const express = require('express');
const router = express.Router();
const propiedadesAPIController = require('../../controllers/api/propiedadesAPIController');

//Rutas
//Listado de películas
router.get('/', propiedadesAPIController.list);
//Detalle de una película
router.get('/:id', propiedadesAPIController.detail);
//Filtrar películas por rating. Puede colocar desde 1 hasta 10


module.exports = router;