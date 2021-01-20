module.exports = function(sequelize, DataTypes) {
    var Party = sequelize.define("Party", {
    
      partyName: DataTypes.STRING,
      
    });

    return Party;
};