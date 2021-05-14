module.exports = (sequelize, DataTypes) => {
    let alias = 'usuario';
    let cols = {
         id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: DataTypes.STRING(255),
        apellido: DataTypes.STRING(255),
        email: DataTypes.STRING(255),
        tipo_usuario: DataTypes.INTEGER,
        password: DataTypes.STRING(255),
        imagen: DataTypes.STRING(255)
    };
    let options = {
        tableName: 'usuario',
        timestamps: false
    }
    const usuario = sequelize.define(alias,cols,options);
    usuario.associate = function(models){
        usuario.belongsTo(models.tipousuario, {
            as: "tipousuario",
            foreignKey: "tipo_usuario"
        });
    }
    return usuario;
}