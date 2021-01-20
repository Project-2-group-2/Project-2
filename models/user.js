module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      // Giving the Author model a name of type STRING
      fname: DataTypes.STRING,
      lname: DataTypes.STRING,
    });

    return User;
};