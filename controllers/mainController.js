const db = require('../database/models');
const fs = require('fs');
const path = require('path');
const { Op } = require("sequelize");

const propiedadesFilePath = path.join(__dirname, '../data/propiedadesDataBase.json');
const propiedades = JSON.parse(fs.readFileSync(propiedadesFilePath, 'utf-8'));

const mainController = {
    index: function (req, res) {
        res.render("index");
    },
    productDetail: function (req, res) {
        res.render("productDetail");
    },
    login: function (req, res) {
        res.render("login");
    },
    forgot: function (req, res) {
        res.render("forgot");
    },
    carrito: function (req, res) {
        res.render("carrito");
    },
    crearcuenta: function (req, res) {
        res.render("crearcuenta");
    },
    laempresa: function (req,res)  {
        res.render("laempresa");
    },
    tasaciones: function (req, res) {
        res.render("tasaciones");
    },
    buscarPropiedad: function (req, res) {
    let propiedad_id = req.body.propiedad?req.body.propiedad:null;
        db.propiedad.findAll({
            where: {
               tipopropiedad_id:  propiedad_id,
               tipoopercion: req.body.comprar_alquilar,
               barrio: {[Op.like]: '%'+req.body.quicksearch+'%'} 
            },
            order:[['id','DESC']], limit: 10 })
        .then(function(respuesta){
            res.render("indexResultados", {resultados: respuesta});
        })
    },
    buscarCarrousel: function (req, res) {

        db.propiedad.findAll({
            where: {
               tipopropiedad_id:  req.params.tipoPropiedad
            },
            order:[['id','DESC']], limit: 10 })
        .then(function(respuesta){
            res.render("indexResultados", {resultados: respuesta});
        })

    }
}

module.exports = mainController;