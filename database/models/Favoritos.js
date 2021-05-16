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
        favoritos.hasMany(models.propiedad, {
            as: "es-favorita-de",
            foreignKey: "id"
        });
        favoritos.hasMany(models.usuario, {
            as: "es-favorita-del_usuario",
            foreignKey: "id"
        });
                
    }
    return favoritos;
}