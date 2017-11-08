module.exports = function(sequelize, DataTypes) {
    var Employee = sequelize.define("Employee", {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
    });

    Employee.associate = function(models) {
        Employee.belongsTo(models.Role, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Employee;
};