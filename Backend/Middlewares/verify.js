
const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.cookies.token;
   

  if (!token) {
    return res.status(401).json({ 
      status: false, 
      error: "Please login before making an order" 
    });
  }

  try {
    const decoded = jwt.verify(token, "abbajabbadabba");
    req.userId = decoded.id;
    next();
  } catch (err) {
    return res.status(401).json({ status: false, message: "Invalid token" });
  }
};
