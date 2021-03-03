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
		let imagen;
		let planoImg;
		let fotosImg;
        /*req.files.forEach((file, index) => {
            if(file.fieldname=='plano'){
                planoImg=file.filename;
            }else{
                planoImg="default-image.png"
            }
            if(file.fieldname=='fotos'){
                fotosImg=file.filename;
            }else{
                fotosImg="default-image.png"
            }
        });*/
		
		var filePlano = req.files[Object.keys(req.files)[0]];
		var fileFotos = req.files[Object.keys(req.files)[1]];
        planoImg=filePlano[0].filename;
        fotosImg=fileFotos[0].filename;

        console.log(planoImg+"-----"+fotosImg);
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
        res.send("update");
    },
    delete:  function(req, res){
        res.send("delete");
    }
}

module.exports = adminController;