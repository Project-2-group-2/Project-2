module.exports = function(sequelize, DataTypes) {
    var Location = sequelize.define("Location", {
      address: DataTypes.STRING,
    });

    Location.associate = function(models) {
      Location.hasMany(models.Event, {
        
      });
    };

    return Location;
};