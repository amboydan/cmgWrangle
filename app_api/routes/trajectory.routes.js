const express = require('express');
const router = express.Router();
const ctrlTrajectories = require('../controllers/trajectory.controller');

router
  .route('/allWells')
  .get(ctrlTrajectories.findAll);

module.exports = router;

// module.exports = app => {
//     const trajectories = require("../controllers/trajectory.controller.js");
    
//     // Retrieve all Customers
//     app.get("/allWells", trajectories.findAll);
  
// };