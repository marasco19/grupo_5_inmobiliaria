module.exports = (sequelize, DataTypes) => {
    let alias = 'contactos';
    let cols = {
         id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: DataTypes.STRING(45),
        telefono: DataTypes.STRING(45),
        nombre: DataTypes.STRING(255)
    };
    let options = {
        tableName: 'contactos',
        timestamps: false
    }
    const contactos = sequelize.define(alias,cols,options);
    
    return contactos;
}