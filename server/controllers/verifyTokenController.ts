import jwt from "jsonwebtoken";

const verifyToken = (req, res) => {
    const auth = req.headers.authorization

    if(auth){
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, process.env.JWT_PW, (err, decode)=> {
            if(err) res.status(401).send(false);
            else{
                req.user = decode;
                res.send(true);
            }
        })
    }
    else res.send(false);
}

export {verifyToken}