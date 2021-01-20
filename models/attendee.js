module.exports = function(sequelize, DataTypes) {
    var Attendee = sequelize.define("Attendee", {
      attendeeName: DataTypes.STRING,
    });

    Attendee.associate = function(models) {
      Attendee.hasMany(models.Guest, {
        
      });
    };

    return Attendee;
};
