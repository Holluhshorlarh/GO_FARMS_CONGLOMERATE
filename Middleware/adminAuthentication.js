const express = require('express');
const router = express.Router();
const roleBasedAccess = require('../middleware/roleBasedAccess');
const { FarmDivision } = require('../models/farmDivision');
const { Admin } = require('../models/admin');

// Create new farm division
router.post('/farmDivisions', roleBasedAccess(['admin']), async (req, res, next) => {
  try {
    const newFarmDivision = new FarmDivision(req.body);
    await newFarmDivision.save();
    res.status(201).json({ success: true, data: newFarmDivision });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
