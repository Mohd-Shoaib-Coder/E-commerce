// const jwt = require("jsonwebtoken");

// function verifyUser(req, res, next) {
//   const authHeader = req.headers["authorization"];
//   if (!authHeader || !authHeader.startsWith("Bearer ")) {
//     return res.status(401).json({ error: "Authorization token missing" });
//   }

//   const token = authHeader.split(" ")[1]; // Extract token after 'Bearer'

//   console.log("verify ka Token",token)

//   jwt.verify(token, "abbajabbadabba", (err, decoded) => {
//     if (err) {
//       return res.status(403).json({ error: "Token is invalid" });
//     }

//     req.userId = decoded.id;
//     next();
//   });
// }

// module.exports = verifyUser;



const jwt = require("jsonwebtoken");

const verifyUser = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) return res.status(401).json({ message: "No token provided" });

  jwt.verify(token, "abbajabbadabba", (err, decoded) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.userId = decoded.id;
    next();
  });
};

module.exports = verifyUser;
