module.exports = function(sequelize, DataTypes) {
  var Customer = sequelize.define("Customer", {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  });

  Customer.associate = function(models) {
    Customer.hasMany(models.Appointment, {
      onDelete: "cascade"
    });
  };

  return Customer;
};