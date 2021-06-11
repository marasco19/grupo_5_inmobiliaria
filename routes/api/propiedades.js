const express = require('express');
const router = express.Router();
const propiedadesAPIController = require('../../controllers/api/propiedadesAPIController');

//Rutas
router.get('/destacada', propiedadesAPIController.destacada);
router.get('/', propiedadesAPIController.list);

router.get('/:id', propiedadesAPIController.detail);



module.exports = router;