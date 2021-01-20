module.exports = function(sequelize, DataTypes) {
    var Party = sequelize.define("Party", {
    
      partyName: DataTypes.STRING,
      
    });

    Party.associate = function(models) {
      Party.hasMany(models.Event, {
        
      });
    };
  

    return Party;
};