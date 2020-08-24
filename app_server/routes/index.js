const express = require('express');
const router = express.Router();
const ctrlWellList = require('../controllers/wellList');

/* GET home page. */
router.get('/', ctrlWellList.homeList);

module.exports = router;
