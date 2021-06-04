const express = require('express');
const router = express.Router();
const usuariosAPIController = require('../../controllers/api/usuariosAPIController');

//Rutas
//Listado de películas
router.get('/', usuariosAPIController.list);
//Detalle de una película
router.get('/:id', usuariosAPIController.detail);
//Filtrar películas por rating. Puede colocar desde 1 hasta 10


module.exports = router;