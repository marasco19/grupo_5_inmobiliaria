const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');


//Aqui tienen otra forma de llamar a cada uno de los modelos
const usuario = db.usuario;


const usuariosAPIController = {
    'list': (req, res) => {
        db.usuario.findAll()
        .then(usuarios => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: usuarios.length,
                    url: 'api/usuarios'
                },
                data: usuarios
            }
                res.json(respuesta);
            })
    },
    
    'detail': (req, res) => {
        db.usuario.findByPk(req.params.id)
            .then(usuario => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: usuario.length,
                        url: '/api/usuario/:id'
                    },
                    data: usuario
                }
                res.json(respuesta);
            });
    }

}

module.exports = usuariosAPIController;