module.exports = (sequelize, DataTypes) => {
    let alias = 'fotospropiedad';
    let cols = {
         id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        propiedad_id: DataTypes.INTEGER,
        nombre: DataTypes.STRING(255)
    };
    let options = {
        tableName: 'fotos_propiedad',
        timestamps: false
    }
    const fotosPropiedad = sequelize.define(alias,cols,options);
    
    return fotosPropiedad;
}