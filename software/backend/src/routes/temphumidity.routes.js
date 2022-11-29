const express = require('express');
const router = express.Router();
const controller = require('../controllers/TempHumidity.controller');

router.get('/get', controller.getData);
router.get('/post', controller.createData);
router.get('/params', controller.getMaxMinParams);
router.post('/params', controller.setMaxMinParams);

module.exports = router;