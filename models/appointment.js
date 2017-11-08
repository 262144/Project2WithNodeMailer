module.exports = function(sequelize, DataTypes) {
    var Appointment = sequelize.define("Appointment", {
    appointmentTime: DataTypes.STRING,
    message: DataTypes.TEXT
  });

    Appointment.associate = function(models) {
        Appointment.belongsTo(models.Customer, {
            foreignKey: {
                allowNull: false
            }
        });
        Appointment.belongsTo(models.Employee, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Appointment;
};