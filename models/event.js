module.exports = function(sequelize, DataTypes) {
    var Event = sequelize.define("Event", {
      date: DataTypes.STRING,
      startTime: DataTypes.STRING,
      endTime: DataTypes.STRING
    });



    Event.associate = function(models) {
        Event.belongsTo(models.User, {
            onUpdate: 'CASCADE',
            foreignKey: {
                allowNull: false
              } 
        });

        Event.belongsTo(models.Party, {
            foreignKey: 'LocationId',
            targetKey: 'id'
        });

        Event.belongsTo(models.Location, {
            foreignKey: 'PartyId',
            targetKey: 'id'
        }); 
        Event.hasMany(models.Guest, {
        
        });
      };

    return Event;
};


