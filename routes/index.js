var express = require('express');
var router = express.Router();
const path = require('path');
const fs = require('fs');


const mainController = require ("../controllers/mainController")
const adminController = require ("../controllers/adminController")
// Middleware para chequear si es administrador
const adminMiddleware = require('../middlewares/adminMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

var multer  = require('multer');
// SET STORAGE

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images/propiedades')
    },
    filename: function (req, file, cb) {
      cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
      )
    }
  })

  var upload = multer({ storage: storage })
  var cpUpload = upload.fields([{ name: 'planos', maxCount: 1 }, { name: 'fotos1', maxCount: 1 }, { name: 'fotos2', maxCount: 1 },
   { name: 'fotos3', maxCount: 1 }, { name: 'fotos4', maxCount: 1 }, { name: 'fotos5', maxCount: 1 }, { name: 'fotos6', maxCount: 1 }]);
  
router.get('/', mainController.index);

router.get('/productDetail', mainController.productDetail);


router.get('/login', mainController.login);


router.get('/carrito', mainController.carrito);

router.get('/crearcuenta', mainController.crearcuenta);

router.get('/laempresa', mainController.laempresa);

router.get('/tasaciones', mainController.tasaciones);
router.post('/buscar/propiedad', mainController.buscarPropiedad);
router.get('/buscar/carrousel/:tipoPropiedad', mainController.buscarCarrousel);

router.get('/admin/list', adminMiddleware, adminController.list);
router.get('/admin/listfavoritos', adminController.listFavoritos);
router.get('/admin/addFavorito/:idPropiedad', authMiddleware, adminController.addFavorito);
router.get('/admin/deleteFavorito/:idPropiedad', adminController.deleteFavorito);
router.get('/admin/:idPropiedad/detalleAdmin', adminController.detalleAdmin);
router.post('/admin/:idPropiedad/detalleAdmin', adminController.detalleAdminCon);

router.get('/admin/formCreate', adminMiddleware, adminController.formCreate);
router.post('/admin', cpUpload, adminController.store);
router.get('/admin/formEdit/:idPropiedad', adminController.formEdit);
router.get('/admin/formCreate', adminController.formCreate);
router.put('/admin/:idPropiedad', cpUpload, adminController.update);
router.delete('/admin/:idPropiedad', adminController.delete);
router.post('/admin/contacto', cpUpload, adminController.storeContacto);
router.get('/admin/listContactos', adminMiddleware, adminController.listContactos);
router.get('/admin/contacto/delete/:id', adminMiddleware, adminController.contactoDelete);



module.exports = router;
