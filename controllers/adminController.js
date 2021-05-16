const db = require('../database/models');
const fs = require('fs');
const path = require('path');

const propiedadesFilePath = path.join(__dirname, '../data/propiedadesDataBase.json');
const propiedades = JSON.parse(fs.readFileSync(propiedadesFilePath, 'utf-8'));
const adminController = {
    list: function (req, res) {
        db.propiedad.findAll()
        .then(function(respuesta){
            res.render("listProperties", {propiedadListado: respuesta})
        })
    },
    formCreate:  function(req, res){
        res.render("formCreate");
    },
    store:  function(req, res){
        let ids = propiedades.map(p=>p.id);
		
		let planoImg;
		let fotosImg;
		
		var filePlano = req.files[Object.keys(req.files)[0]];
		var fileFotos = req.files[Object.keys(req.files)[1]];
        planoImg=filePlano[0].filename;
        fotosImg=fileFotos[0].filename;

        db.propiedad.create({
            titulo:  req.body.titulo, 
            estado:  req.body.estado,
            tipoopercion:  req.body.tipooperacion,
            tipopropiedad_id:  req.body.tipopropiedad,
            precio:  req.body.precio,
            direccion:  req.body.direccion,
            barrio:  req.body.barrio,
            latitud:  req.body.latitud,
            longitud:  req.body.longitud,
            descripciongral:  req.body.decripciongral,
            suptotal:  req.body.suptotal,
            supcubierta:  req.body.supcubierta,
            supdescubierta:  req.body.supdescubierta,
            ambientes:  req.body.ambientes,
            dormitorios:  req.body.dormitorios,
            banios:  req.body.banios,
            medcocina:  req.body.medcocina,
            tipococina:  req.body.tipococina,
            lavadero:  req.body.lavadero,
            balcon:  req.body.balcon,
            baulera:  req.body.baulera,
            palier:  req.body.palier,
            recepcion:  req.body.recepcion,
            calefaccion:  req.body.calefaccion,
            aire:  req.body.aire,
            expensas:  req.body.expensas,
            abl:  req.body.abl,
            tipopiso:  req.body.tipopiso,
            nropisos:  req.body.nropisos,
            dptosxpisos:  req.body.dptosxpisos,
            ascensor:  req.body.ascensor,
            gimnasio:  req.body.gimnasio,
            lavaderocen:  req.body.lavaderocen,
            sum:  req.body.sum,
            solarium:  req.body.solarium,
            salonfiestas:  req.body.salonfiestas,
            guardabici:  req.body.guardabici,
            piscina:  req.body.piscina,
            quincho:  req.body.quincho,
            parrilla:  req.body.parrilla,
            seguridad:  req.body.seguridad,
            grupoelec:  req.body.grupoelec,
            youtube:  req.body.youtube,
            vimeo:  req.body.vimeo,
            plano:  planoImg,
            fotos:  fotosImg
        })
        .then(function(response){
            res.redirect('/admin/list')
        });
    },    
    formEdit: function(req, res){
        db.propiedad.findByPk(req.params.idPropiedad)
        .then(function(respuesta){
            res.render("formEdit", propiedad = respuesta);
            
        })
    },
    update:  function(req, res){
	  
        let planoImg;
		let fotosImg;
		if(req.files && req.files.length){
		    var filePlano = req.files[Object.keys(req.files)[0]];
		    var fileFotos = req.files[Object.keys(req.files)[1]];
            planoImg=filePlano[0].filename;
            fotosImg=fileFotos[0].filename;
        }else{
            planoImg='';
            fotosImg='';
        }    

        db.propiedad.update({
            titulo:  req.body.titulo, 
            estado:  req.body.estado,
            tipoopercion:  req.body.tipooperacion,
            tipopropiedad_id:  req.body.tipopropiedad,
            precio:  req.body.precio,
            direccion:  req.body.direccion,
            barrio:  req.body.barrio,
            latitud:  req.body.latitud,
            longitud:  req.body.longitud,
            descripciongral:  req.body.descripciongral,
            suptotal:  req.body.suptotal,
            supcubierta:  req.body.supcubierta,
            supdescubierta:  req.body.supdescubierta,
            ambientes:  req.body.ambientes,
            dormitorios:  req.body.dormitorios,
            banios:  req.body.banios,
            medcocina:  req.body.medcocina,
            tipococina:  req.body.tipococina,
            lavadero:  req.body.lavadero,
            balcon:  req.body.balcon,
            baulera:  req.body.baulera,
            palier:  req.body.palier,
            recepcion:  req.body.recepcion,
            calefaccion:  req.body.calefaccion,
            aire:  req.body.aire,
            expensas:  req.body.expensas,
            abl:  req.body.abl,
            tipopiso:  req.body.tipopiso,
            nropisos:  req.body.nropisos,
            dptosxpisos:  req.body.dptosxpisos,
            ascensor:  req.body.ascensor,
            gimnasio:  req.body.gimnasio,
            lavaderocen:  req.body.lavaderocen,
            sum:  req.body.sum,
            solarium:  req.body.solarium,
            salonfiestas:  req.body.salonfiestas,
            guardabici:  req.body.guardabici,
            piscina:  req.body.piscina,
            quincho:  req.body.quincho,
            parrilla:  req.body.parrilla,
            seguridad:  req.body.seguridad,
            grupoelec:  req.body.grupoelec,
            youtube:  req.body.youtube,
            vimeo:  req.body.vimeo,
            plano:  planoImg,
            fotos:  fotosImg
        },
        {where: {id: req.params.idPropiedad}
    }).then(function(response){
        res.redirect('/admin/list')
    });
    },
    delete:  function(req, res){
        db.propiedad.destroy({where: {id: req.params.idPropiedad}
        }).then(function(response){
            res.redirect('/admin/list')
        });
    },
    detalleAdmin: function(req, res){
        db.propiedad.findByPk(req.params.idPropiedad)
        .then(function(respuesta){
            res.render("detalleAdmin", propiedad = respuesta);
            
        })

    }
}

module.exports = adminController;