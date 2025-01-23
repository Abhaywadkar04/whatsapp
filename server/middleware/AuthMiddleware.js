import jwt from  'jsonwebtoken'


export const verifyToken = (req, res, next) => {
    const token = req.cookies.jwt;
    if(!token)return res.status(401).send("you are not authenicated!");
        jwt.verify(token, process.env.JWT_KEY,  async (err, payload) => {
        if(err) return res.status(403).send("token is not valid!");
            req.userId=payload.userId;
            next();
        });
        };
    

// export const verifyToken = (req, res, next) => {
//     const token = req.cookies.jwt;
//     console.log("hiiii")
//     console.log("Received Token:", token); // Debug token
//     if (!token) return res.status(401).send("You are not authenticated!");
//     jwt.verify(token, process.env.JWT_KEY, (err, payload) => {
//       if (err) {
//         console.log("JWT Verification Error:", err.message); // Debug error
//         return res.status(401).send("Token is not valid!");
//       }
//       req.userId = payload.userId;
//       next();
//     });
//   };
  