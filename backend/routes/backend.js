var express = require('express');
var router = express.Router();
const apisController = require('../controller/apisController')

router.get('/mock', apisController.dadosMock);

module.exports = router;
