const fs = require('fs');
const path = require('path');

const propiedadesFilePath = path.join(__dirname, '../data/propiedadesDataBase.json');
const propiedades = JSON.parse(fs.readFileSync(propiedadesFilePath, 'utf-8'));
const adminController = {
    list: function (req, res) {
        
        res.render("listProperties", propiedadListado = propiedades);
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

       
		let nuevoPropiedad = {
			id: Math.max(...ids)+1,
			... req.body,
			plano: planoImg,
            fotos: fotosImg
		};
       
		propiedades.push(nuevoPropiedad);
		fs.writeFileSync(propiedadesFilePath, JSON.stringify(propiedades,null,' '));
		res.redirect('/admin/list');
    },    
    formEdit: function(req, res){
        let idPropiedad = req.params.idPropiedad;
        let propiedadEditar = propiedades.find((propiedad) => propiedad.id == idPropiedad);
        res.render("formEdit", propiedad = propiedadEditar);
    },
    update:  function(req, res){
		let idPropiedad = req.params.idPropiedad;
        
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

		let propiedadEditar = propiedades.find((propiedad) => propiedad.id == idPropiedad);
        propiedadEditar = {
			id: propiedadEditar.id,
			...req.body,
            plano: planoImg,
            fotos: fotosImg
		};

        let newPropiedad = propiedades.map(propiedad => {
			if(propiedad.id == propiedadEditar.id){
				return propiedad = { ...propiedadEditar};
			}
			return propiedad;
		});

        fs.writeFileSync(propiedadesFilePath, JSON.stringify(newPropiedad, null,' '));
       

		res.redirect('/admin/list');
    },
    delete:  function(req, res){
        let id = req.params.idPropiedad;
		let finalPropiedades = propiedades.filter(propiedad => propiedad.id != id);
		fs.writeFileSync(propiedadesFilePath, JSON.stringify(finalPropiedades,null,' '));
		res.redirect('/admin/list');
    },
    detalleAdmin: function(req, res){
        let idPropiedad = req.params.idPropiedad;
        let propiedad = propiedades.find((propiedad) => propiedad.id == idPropiedad);
        console.log(propiedad);
        res.render("detalleAdmin", {propiedad:propiedad});

    }
}

module.exports = adminController;