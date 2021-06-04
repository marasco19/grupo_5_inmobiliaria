const express = require('express');
const router = express.Router();

// Controller
const usersController = require ("../controllers/usersController")

// Middlewares
const uploadFile = require('../middlewares/multerMiddleware');
const validations = require('../middlewares/validateRegisterMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');

  
// Formulario de registro
router.get('/register', guestMiddleware, usersController.register);

// Procesar el registro
router.post('/register', uploadFile.single('imagen'), validations, usersController.processRegister);

// Formulario de login
router.get('/login', guestMiddleware, usersController.login);

// Procesar el login
router.post('/login', usersController.loginProcess);

//forgot
router.get('/forgot', usersController.forgot);
// Perfil de Usuario
router.get('/profile/', authMiddleware, usersController.profile);

// Logout
router.get('/logout/', usersController.logout);

// Editar usuario
router.get('/formEdit/:id', authMiddleware, usersController.edit);
router.post('/formEdit/:id', uploadFile.single('imagen'), validations, usersController.update);

// Borrar usuario
router.get('/delete/:id', authMiddleware, usersController.delete);
router.post('/delete/:id', usersController.destroy);

// Listar usuarios
router.get('/list', adminMiddleware, usersController.list);

module.exports = router;
