const fs = require('fs');
const path = require('path');

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
        
        var results = [];
        for (var i=0 ; i < propiedades.length ; i++)
        {
            if (propiedades[i]['tipopercion'] == req.body.comprar_alquilar && propiedades[i]['tipopropiedad'] && req.body.propiedad && propiedades[i]['barrio'] == req.body.quicksearch ) {
                results.push(propiedades[i]);
            }
        }
        res.render("indexResultados", {resultados: results});
    }
}

module.exports = mainController;