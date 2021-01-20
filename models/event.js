module.exports = function(sequelize, DataTypes) {
    var Event = sequelize.define("Event", {
      date: DataTypes.INTEGER,
      startTime: DataTypes.INTEGER,
      endTime: DataTypes.INTEGER
    });

    Event.associate = function(models) {
        Event.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });

        Event.belongsTo(models.Party, {
            foreignKey: {
              allowNull: false
            }
        });

        Event.belongsTo(models.Location, {
            foreignKey: {
                allowNull: false
            }
        });
      };

    return Event;
};