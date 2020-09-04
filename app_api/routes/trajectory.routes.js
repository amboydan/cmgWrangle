const express = require('express');
const router = express.Router();
const ctrlTrajectories = require('../controllers/trajectory.controller');

router
  .route('/allWells')
  .get(ctrlTrajectories.findAll);

module.exports = router;