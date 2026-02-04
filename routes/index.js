const express = require("express");
const router = express.Router();
const taskApi = require('./task.api');

router.use('/tesks', taskApi);

module.exports = router;