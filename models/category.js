module.exports = function(sequelize, DataTypes) {
    var Category = sequelize.define("Category", {  
      CategoryItem: DataTypes.STRING, 
    });

    return Category;
};