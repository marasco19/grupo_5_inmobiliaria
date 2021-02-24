var express = require('express');
var router = express.Router();
const mainController = require ("../controllers/mainController")
const adminController = require ("../controllers/adminController")


router.get('/', mainController.index);

router.get('/productDetail', mainController.productDetail);


router.get('/login', mainController.login);

router.get('/admin/form', adminController.form);
router.get('/admin/list', adminController.list);



module.exports = router;
