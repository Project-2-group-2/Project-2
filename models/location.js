module.exports = function(sequelize, DataTypes) {
    var Location = sequelize.define("Location", {
      address: DataTypes.STRING,
    });

    return Location;
};