import jwt from 'jsonwebtoken';

const generateToken = ({_id, name, email}) => {
    return jwt.sign({_id: _id, name: name, email: email}, process.env.JWT_PW, {expiresIn: '7d'});
}

const isAuth = async (req, res, next) => {
    const auth = req.headers.authorization
    console.log("Token: ",auth);
    if (auth) {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, process.env.JWT_PW, (err, decode) => {
        if (err) res.status(401).send()
        else {
         console.log("NEXT")
         req.user = decode;
          next();
        }
      });
  
    } else {
      res.status(401).send({ message: "Not authorized, no token" });
    }
  };
  
export {generateToken, isAuth}