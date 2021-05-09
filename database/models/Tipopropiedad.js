module.exports = (sequelize, DataTypes) => {
    let alias = 'tipopropiedad';
    let cols = {
         id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: DataTypes.STRING(255)
    };
    let options = {
        tableName: 'tipopropiedad',
        timestamps: false
    }
    const tipoPropiedad = sequelize.define(alias,cols,options);
    
    return tipoPropiedad;
}