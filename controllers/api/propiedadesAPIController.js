const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');


//Aqui tienen otra forma de llamar a cada uno de los modelos
const propiedad = db.propiedad;


const propiedadesAPIController = {
    'list': (req, res) => {
        db.propiedad.findAll()
        .then(propiedades => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: propiedades.length,
                    url: 'api/propiedades'
                },
                data: propiedades
            }
                res.json(respuesta);
            })
    },
    
    'detail': (req, res) => {
        db.propiedad.findByPk(req.params.id)
            .then(propiedad => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: propiedad.length,
                        url: '/api/propiedad/:id'
                    },
                    data: propiedad
                }
                res.json(respuesta);
            });
    },
    'destacada': async (req, res) => {
        await db.propiedad.findAll({
            attributes: [
                sequelize.fn('MAX', sequelize.col('precio')),
                'id', 'moneda','direccion','descripciongral', 'precio', 'fotos1'
             ],
             raw: true
            })
            .then(propiedad => {
                let respuesta = {
                    meta: {
                        status: 200,
                        url: '/api/propiedad/destacada'
                    },
                    data: propiedad
                }
                res.json(respuesta);
            });
    }
}

module.exports = propiedadesAPIController;