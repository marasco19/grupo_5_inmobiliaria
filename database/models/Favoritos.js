module.exports = (sequelize, DataTypes) => {
    let alias = 'favoritos';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        propiedad_id: DataTypes.INTEGER,
        usuario_id: DataTypes.INTEGER
    };
    let options = {
        tableName: 'favoritos',
        timestamps: false
    }
    const favoritos = sequelize.define(alias,cols,options);
   favoritos.associate = function(models){
        favoritos.belongsToMany(models.propiedad, {
            through: "propiedad_id",
            as: "es-favorita-de",
            foreignKey: "id"
        });
        favoritos.belongsToMany(models.usuario, {
            through: "usuario_id",
            as: "es-favorita-del_usuario",
            foreignKey: "id"
        });
               
    }
   
    return favoritos;
}