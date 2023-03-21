const express = require("express");
const router = express.Router();
const {UserSignup , UserLogin} = require("../controllers/UserAuthentication");

// Signup route
router.post("/signup", UserSignup);

// Login route
router.post("/login", UserLogin);

module.exports = router;
