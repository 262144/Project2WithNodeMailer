module.exports = function(sequelize, DataTypes) {
    var Role = sequelize.define("Role", {
        service: DataTypes.STRING,
        roleType: DataTypes.STRING,
    });

    Role.associate = function(models) {
        Role.hasMany(models.Employee, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Role;
};