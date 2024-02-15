import User from '../models/User';
import bcrypt from 'bcrypt'
import {generateToken} from '../utils'


 const signUp = async (req, res) =>{
    const { email, password} = req.body;
    
    if(await User.findOne({ email: email })){
      res.status(409).send({message: "User already exists"});
      return;
    }

    const saltRounds = 10; // You can adjust this value as needed
    const salt = bcrypt.genSaltSync(saltRounds);

    const newUser = new User({
      name: createName(email),
      email: email,
      password: bcrypt.hashSync(password, salt),
    });
    
    const user = await newUser.save();

    // we dont need the password!
    res.send({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user),
    });
};

 const signIn = async (req, res) =>{
    const {password: passwordFromWebsite, email} = req.body;

    const user = await User.findOne({email: email});
    if(user){
        if(bcrypt.compareSync(passwordFromWebsite, user.password)){
            res.send({
                _id: user._id,
                name: user.name,
                email: user.email,
                token: generateToken(user),
            });
            return;
        }
    }
    res.status(401).send({message: "Invalid Password/User"});
}

 const getUserById = async (req, res) => {
    const { id } = req.params;
  
    try {
      const user = await User.findById(id);
  
      if (user) {
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
        });
      } else {
        res.status(404).send({ message: "User not found" });
      }
    } catch (error) {
      res.status(500).send({ message: "Internal Server Error" });
    }
  };

  const getAllUsers = async(req, res) => {
    const users = await User.find();
    res.send(users);
  }

  const createName = (email: string) : string => {
    const atIndex = email.indexOf('@');
    if (atIndex !== -1) {
      return email.substring(0, atIndex);
    } else {
      throw new Error('Invalid email format');
    }
  }

  export {signUp, signIn, getUserById, getAllUsers}