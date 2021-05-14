module.exports = (sequelize, DataTypes) => {
    let alias = 'tipousuario';
    let cols = {
         id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: DataTypes.STRING(255)
    };
    let options = {
        tableName: 'tipousuario',
        timestamps: false
    }
    const tipousuario = sequelize.define(alias,cols,options);
    
    return tipousuario;
}