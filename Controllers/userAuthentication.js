const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const User = require('../Models/userModel');
require('dotenv').config();

const {JWT_SECRET} = process.env

exports.UserSignup = async (req, res) => {
    try {
      const schema = Joi.object({
        first_name: Joi.string().required(),
        last_name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required() 
      });
  
      // Get data from request body
      const { first_name, last_name, email, password } = req.body;
  
      // Validate request body data
      const { error } = schema.validate({ first_name, last_name, email, password });
      if (error) {
        return res.status(400).json({ message: error.details[0].message });
      }
  
      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      // Hash the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      // Create a new user
      const user = new User({
        first_name,
        last_name,
        email,
        password: hashedPassword,
      });
  
      await user.save();
  
      // Create and sign a token
  
      res.status(201).json({ user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Something went wrong' });
    }
  };
  
exports.UserLogin = async (req, res) => {
  try {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    // Check if user exists
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check if password is correct
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Create and sign a token
    const token = await jwt.sign({ id: user._id }, JWT_SECRET);

    res.status(200).json({ user, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

