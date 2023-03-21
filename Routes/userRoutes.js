const express = require("express");
const { UserSignup, UserLogin } = require("../Controllers/userAuthentication");
const router = express.Router();

// Signup route
router.post("/signup", UserSignup);

// Login route
router.post("/login", UserLogin);

module.exports = router;
