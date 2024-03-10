import jwt from 'jsonwebtoken';
import express from 'express';

interface IGenerateTokenParameters {
  _id: object;
  name: string;
  email: string;
}

const generateToken = ({_id, name, email}: IGenerateTokenParameters) => {
    return jwt.sign({_id: _id, name: name, email: email}, process.env.JWT_PW, {expiresIn: '7d'});
}

const isAuth = async (req, res: express.Response, next) => {
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