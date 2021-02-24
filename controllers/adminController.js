let propiedades = [
    { id: 1, titulo: 'Bavio Ernesto A. 3100', estado:'activo',tipoperacion:'alquiler',tipopropiedad:'casa',precio:230000,direccion: 'alem 11223', barrio: 'Nuñez', latitud: 'gdgdfgdfgdfg', longitud:'gfdfgdfg', descripciongral:'lorem ipsum', suptotal:324, supcubierta:2323, supdescubierta: 3333, ambientes: 4, dormitorios: 3, banios: 2, medcocina: "grande", tipococina:"americana",lavadero:0,balcon:1,baulera:0, palier:1,recepcion:0,calefaccion:1, aire:1, expensas:22222, abl:3333, tipopiso: 'ceramica', nropisos: 3, dptosxpisos:3, ascensor: 2, gimnasio: 1, lavaderocen: 1, sum:1, solarium:1, salonfiestas: 0, guardabici: 1, piscina:1, quincho:1, parrilla: 1, seguridad: 1, grupoelec:1, youtube: "bU1QPtO111111", vimeo: "134173961", imagen: "/images/list1.jpg"  },
    { id: 2, titulo: 'Arana Gob. 2050', estado:'incativo',tipoperacion:'alquiler',tipopropiedad:'casa',precio:230000,direccion: 'alem 11223', barrio: 'La Horqueta', latitud: 'gdgdfgdfgdfg', longitud:'gfdfgdfg', descripciongral:'lorem ipsum', suptotal:324, supcubierta:2323, supdescubierta: 3333, ambientes: 4, dormitorios: 3, banios: 2, medcocina: "grande", tipococina:"americana",lavadero:0,balcon:1,baulera:0, palier:0,recepcion:1,calefaccion:1, aire:1, expensas:22222, abl:3333, tipopiso: 'ceramica', nropisos: 3, dptosxpisos:3, ascensor: 2, gimnasio: 1, lavaderocen: 1, sum:1, solarium:0, salonfiestas: 1, guardabici: 0, piscina:1, quincho:0, parrilla: 1, seguridad: 0, grupoelec:1, youtube: "bU1QPtO12222", vimeo: "134173961", imagen: "/images/list2.jpg"  },
    { id: 3, titulo: 'Monteverde Luis 4025', estado:'activo',tipoperacion:'venta',tipopropiedad:'casa',precio:230000,direccion: 'alem 11223', barrio: 'La Lucila', latitud: 'gdgdfgdfgdfg', longitud:'gfdfgdfg', descripciongral:'lorem ipsum', suptotal:324, supcubierta:2323, supdescubierta: 3333, ambientes: 4, dormitorios: 3, banios: 2, medcocina: "grande", tipococina:"americana",lavadero:1,balcon:1,baulera:1, palier:1,recepcion:0,calefaccion:0, aire:1, expensas:22222, abl:3333, tipopiso: 'ceramica', nropisos: 3, dptosxpisos:3, ascensor: 2, gimnasio: 1, lavaderocen: 1, sum:0, solarium:1, salonfiestas: 1, guardabici: 1, piscina:0, quincho:1, parrilla: 1, seguridad: 0, grupoelec:1, youtube: "bU1QPtO13333", vimeo: "134173961", imagen: "/images/list3.jpg"  },
    { id: 4, titulo: 'Lavalle 1150', estado:'inactivo',tipoperacion:'alquiler',tipopropiedad:'casa',precio:230000,direccion: 'alem 11223', barrio: 'Martínez', latitud: 'gdgdfgdfgdfg', longitud:'gfdfgdfg', descripciongral:'lorem ipsum', suptotal:324, supcubierta:2323, supdescubierta: 3333, ambientes: 4, dormitorios: 3, banios: 2, medcocina: "grande", tipococina:"americana",lavadero:1,balcon:1,baulera:1, palier:1,recepcion:1,calefaccion:1, aire:1, expensas:22222, abl:3333, tipopiso: 'ceramica', nropisos: 3, dptosxpisos:3, ascensor: 2, gimnasio: 1, lavaderocen: 1, sum:0, solarium:1, salonfiestas: 1, guardabici: 0, piscina:1, quincho:1, parrilla: 1, seguridad: 1, grupoelec:0 , youtube: "bU1QPtO4444", vimeo: "134173961", imagen: "/images/list4.jpg" },
    { id: 5, titulo: 'alem 11223', estado:'activo',tipoperacion:'venta',tipopropiedad:'casa',precio:230000,direccion: 'alem 11223', barrio: 'Retiro', latitud: 'gdgdfgdfgdfg', longitud:'gfdfgdfg', descripciongral:'lorem ipsum', suptotal:324, supcubierta:2323, supdescubierta: 3333, ambientes: 4, dormitorios: 3, banios: 2, medcocina: "grande", tipococina:"americana",lavadero:1,balcon:0,baulera:0, palier:0,recepcion:0,calefaccion:0, aire:0, expensas:22222, abl:3333, tipopiso: 'ceramica', nropisos: 3, dptosxpisos:3, ascensor: 2, gimnasio: 1, lavaderocen: 1, sum:1, solarium:1, salonfiestas: 1, guardabici: 1, piscina:1, quincho:1, parrilla: 1, seguridad: 1, grupoelec:0 , youtube: "bU1QPtO155555", vimeo: "134173961", imagen: "/images/list1.jpg" }
];
const adminController = {
    form: function (req, res) {
        res.render("formCreate");
    },
    list: function (req, res) {
        
        res.render("listProperties", propiedadListado = propiedades);
    },
    formEdit: function(req, res){
        let idPropiedad = req.params.idPropiedad;
        let propiedadEditar = propiedades.find((propiedad) => propiedad.id == idPropiedad);
        res.render("formEdit", propiedad = propiedadEditar);
    }
}

module.exports = adminController;