const jwt = require("jsonwebtoken");
const {JWT_SECRET} = process.env

exports.authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
    return res.status(400).json({message: "Failed"});
    }
    const decoded = jwt.verify(token,JWT_SECRET);
    if (!decoded) {
      return res.status(400).json({message: "Failed"});
    }
    req.user = decoded;
    next();
  } catch (e) {
    res.status(401).json({ message: 'Authentication Failed' });
  }
};

