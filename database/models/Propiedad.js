module.exports = (sequelize, DataTypes) => {
    let alias = 'propiedad';
    let cols = {
         id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo:DataTypes.STRING(255),
        estado:DataTypes.STRING(255),
        tipoopercion:DataTypes.STRING(45),
        tipopropiedad_id:DataTypes.INTEGER,
        precio:DataTypes.STRING(255),
        direccion:DataTypes.STRING(255),
        barrio:DataTypes.STRING(255),
        latitud:DataTypes.DOUBLE,
        longitud:DataTypes.DOUBLE,
        descripciongral:DataTypes.STRING(512),
        suptotal:DataTypes.INTEGER,
        supcubierta:DataTypes.INTEGER,
        supdescubierta:DataTypes.INTEGER,
        ambientes:DataTypes.INTEGER,
        dormitorios:DataTypes.INTEGER,
        banios:DataTypes.INTEGER,
        medcocina:DataTypes.STRING(255),
        tipococina:DataTypes.STRING(10),
        lavadero:DataTypes.STRING(10),
        balcon:DataTypes.STRING(10),
        baulera:DataTypes.STRING(10),
        palier:DataTypes.STRING(10),
        recepcion:DataTypes.STRING(255),
        calefaccion:DataTypes.STRING(10),
        aire:DataTypes.STRING(10),
        expensas:DataTypes.INTEGER,
        abl:DataTypes.INTEGER,
        tipopiso:DataTypes.STRING(255),
        nropisos:DataTypes.INTEGER,
        dptosxpisos:DataTypes.INTEGER,
        ascensor:DataTypes.INTEGER,
        gimnasio:DataTypes.STRING(10),
        lavaderocen:DataTypes.STRING(10),
        sum:DataTypes.STRING(10),
        solarium:DataTypes.STRING(10),
        salonfiestas:DataTypes.STRING(10),
        guardabici:DataTypes.STRING(10),
        piscina: DataTypes.STRING(10),
        quincho: DataTypes.STRING(10),
        parrilla: DataTypes.STRING(10),
        seguridad: DataTypes.STRING(10),
        grupoelec: DataTypes.STRING(10),
        youtube: DataTypes.STRING(255),
        vimeo: DataTypes.STRING(255),
        plano: DataTypes.STRING(255),
        fotos: DataTypes.STRING(255)

    };
    let options = {
        tableName: 'propiedad',
        timestamps: false
    }
    const propiedad = sequelize.define(alias,cols,options);
    propiedad.associate = function(models){
        propiedad.belongsTo(models.tipopropiedad, {
            as: "tipopropiedad",
            foreignKey: "tipopropiedad_id"
        });

    }        
    return propiedad;
}   