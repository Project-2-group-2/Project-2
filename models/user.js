module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      // Giving the Author model a name of type STRING
      fname: {
        type: DataTypes.STRING,
       
      },
      lname: DataTypes.STRING,

    });

    User.associate = function(models) {

        User.hasMany(models.Event, {
          onUpdate: 'CASCADE', 
    
          
        });
      };
    
    
    

    return User;
};