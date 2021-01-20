module.exports = function(sequelize, DataTypes) {
    var Guest = sequelize.define("Guest", {
        PartyFavor: DataTypes.STRING,
    });

    Guest.associate = function(models) {
        Guest.belongsTo(models.Event, {
            foreignKey: {
                allowNull: false
            }
        });

        Guest.belongsTo(models.Attendee, {
            foreignKey: {
              allowNull: false
            }
        });

        Guest.belongsTo(models.Category, {
            foreignKey: {
                allowNull: false
            }
        });
      };

    return Guest;
};