var express = require('express');
var router = express.Router();
const mainController = require ("../controllers/mainController")


router.get('/', mainController.index);

router.get('/productDetail', mainController.productDetail);


router.get('/login', mainController.login);

router.get('/forgot', mainController.forgot);



module.exports = router;
