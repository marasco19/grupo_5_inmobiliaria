const db = require('../database/models');
const fs = require('fs');
const path = require('path');

const propiedadesFilePath = path.join(__dirname, '../data/propiedadesDataBase.json');
const propiedades = JSON.parse(fs.readFileSync(propiedadesFilePath, 'utf-8'));
const { Op } = require("sequelize");

const adminController = {
    list: function (req, res) {
        db.propiedad.findAll()
        .then(function(respuesta){
            res.render("listProperties", {propiedadListado: respuesta})
        })
    },
    listFavoritos: async function (req, res) {
        let usuarioLogueado= req.session.user.id;
        var results = await db.favoritos.findAll({
            attributes: ['propiedad_id'],
            where: {
                usuario_id:  usuarioLogueado
            },
            raw: true
        });
        let propiedadesBuscar=results.map(a=>a.propiedad_id);
        
        db.propiedad.findAll({
            where: {
                id: {
                [Op.or]: [propiedadesBuscar]
                }    
            }
        })
        .then(function(respuesta){
            res.render("listFavoritos", {resultados: respuesta})
        });
    },   
    addFavorito: function(req, res){
        let usuarioLogueado= req.session.user.id;
        db.favoritos.create({
            propiedad_id: req.params.idPropiedad,
            usuario_id: usuarioLogueado
        })
        .then(function(respuesta){
            res.redirect('/admin/listFavoritos');
        })
        .catch(function(err){
            console.log(err)
        })
    },
    deleteFavorito:  function(req, res){
        let usuarioLogueado= req.session.user.id;
        db.favoritos.destroy({
            where: {
                [Op.and]: [
                    { propiedad_id: req.params.idPropiedad },
                    { usuario_id: usuarioLogueado }
                ]
            }    
        }).then(function(response){
            res.redirect('/admin/listFavoritos')
        });
    },    
    formCreate:  function(req, res){
        res.render("formCreate");
    },
    store:   function(req, res){
        
		let planoImg;
		let fotos1Img;
		let fotos2Img;
		let fotos3Img;
		let fotos4Img;
		let fotos5Img;
		let fotos6Img;
	
        if(req.files[Object.keys(req.files)[0]]){
		    var filePlano = req.files[Object.keys(req.files)[0]];
            fotos1Img=filePlano[0].filename;
        }    
        if(req.files[Object.keys(req.files)[1]]){
		    var fileFotos1 = req.files[Object.keys(req.files)[1]];
            fotos1Img=fileFotos1[0].filename;
        }
        if(req.files[Object.keys(req.files)[2]]){
            var fileFotos2 = req.files[Object.keys(req.files)[2]];
            fotos2Img=fileFotos2[0].filename;
        }    
        if(req.files[Object.keys(req.files)[3]]){
            var fileFotos3 = req.files[Object.keys(req.files)[3]];
            fotos3Img=fileFotos3[0].filename;
        }
        if(req.files[Object.keys(req.files)[4]]){
            var fileFotos4 = req.files[Object.keys(req.files)[4]];
            fotos4Img=fileFotos4[0].filename;
        }
        if(req.files[Object.keys(req.files)[5]]){
            var fileFotos5 = req.files[Object.keys(req.files)[5]];
            fotos5Img=fileFotos5[0].filename;
        }    
        if(req.files[Object.keys(req.files)[6]]){
            var fileFotos6 = req.files[Object.keys(req.files)[6]];
            fotos6Img=fileFotos6[0].filename;
        }

        
        db.propiedad.create({
            titulo:  req.body.titulo, 
            estado:  req.body.estado,
            tipoopercion:  req.body.tipooperacion,
            tipopropiedad_id:  req.body.tipopropiedad,
            precio:  req.body.precio,
            moneda: req.body.moneda,
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
            fotos1:  fotos1Img,
            fotos2:  fotos2Img,
            fotos3:  fotos3Img,
            fotos4:  fotos4Img,
            fotos5:  fotos5Img,
            fotos6:  fotos6Img
        })
        .then(function(response){
            res.redirect('/admin/list')
        })
        .catch((err) => {
            console.log(err);
        })    
    },    
    formEdit:  async function(req, res){
        let respuesta = await db.propiedad.findByPk(req.params.idPropiedad);
        res.render("formEdit", {propiedad:respuesta});
    },
    update:  function(req, res){
	  
        let planoImg;
		let fotos1Img;
		let fotos2Img;
		let fotos3Img;
		let fotos4Img;
		let fotos5Img;
		let fotos6Img;
	
        if(req.files[Object.keys(req.files)[0]]){
		    var filePlano = req.files[Object.keys(req.files)[0]];
            fotos1Img=filePlano[0].filename;
        }    
        if(req.files[Object.keys(req.files)[1]]){
		    var fileFotos1 = req.files[Object.keys(req.files)[1]];
            fotos1Img=fileFotos1[0].filename;
        }
        if(req.files[Object.keys(req.files)[2]]){
            var fileFotos2 = req.files[Object.keys(req.files)[2]];
            fotos2Img=fileFotos2[0].filename;
        }    
        if(req.files[Object.keys(req.files)[3]]){
            var fileFotos3 = req.files[Object.keys(req.files)[3]];
            fotos3Img=fileFotos3[0].filename;
        }
        if(req.files[Object.keys(req.files)[4]]){
            var fileFotos4 = req.files[Object.keys(req.files)[4]];
            fotos4Img=fileFotos4[0].filename;
        }
        if(req.files[Object.keys(req.files)[5]]){
            var fileFotos5 = req.files[Object.keys(req.files)[5]];
            fotos5Img=fileFotos5[0].filename;
        }    
        if(req.files[Object.keys(req.files)[6]]){
            var fileFotos6 = req.files[Object.keys(req.files)[6]];
            fotos6Img=fileFotos6[0].filename;
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
            fotos1:  fotos1Img,
            fotos2:  fotos2Img,
            fotos3:  fotos3Img,
            fotos4:  fotos4Img,
            fotos5:  fotos5Img,
            fotos6:  fotos6Img
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
    detalleAdmin:  function(req, res){
        
         db.propiedad.findByPk(req.params.idPropiedad)
        .then(function(respuesta){
            let fotosProp = [respuesta.fotos1,respuesta.fotos2,respuesta.fotos3,respuesta.fotos4,respuesta.fotos5,respuesta.fotos6];
            let fotosFiltradas = fotosProp.filter(function (el) {
                return el != null;
              });
             
            res.render("detalleAdmin", {propiedad: respuesta, fotosProp: fotosFiltradas, mensaje:""});
        })
    },
    detalleAdminCon:  async function(req, res){
         await db.contactos.create({
            nombre: req.body.nombre,
            email: req.body.email,
            telefono: req.body.telefono,
            comentario: req.body.comentario
        });
         await db.propiedad.findByPk(req.params.idPropiedad)
        .then(function(respuesta){
            let fotosProp = [respuesta.fotos1,respuesta.fotos2,respuesta.fotos3,respuesta.fotos4,respuesta.fotos5,respuesta.fotos6];
            let fotosFiltradas = fotosProp.filter(function (el) {
                return el != null;
              });
            res.render("detalleAdmin", {propiedad: respuesta, fotosProp: fotosFiltradas, mensaje:"Nos contactaremos a la brevedad"});
        })
    },
    storeContacto:  function(req, res){

            db.contactos.create({
                nombre: req.body.nombre,
                email: req.body.email,
                telefono: req.body.telefono,
                comentario: req.body.comentario
            })
            .then(function(respuesta){
                res.render("tasaciones", {mensaje: "Nos contactaremos a la brevedad"});
            })

    },


    listContactos: function(req, res){
        db.contactos.findAll()
        .then(function(respuesta){
            res.render("listContactos", {contactos: respuesta})
        })

    },

    contactoDelete: async function (req, res) {
        let contacto = await db.contactos.findByPk(req.params.id);
        await contacto.destroy();
        res.redirect("/admin/listContactos");
    }


}
module.exports = adminController;