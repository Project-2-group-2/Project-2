module.exports = function (sequelize, DataTypes) {
  var Category = sequelize.define("Category", {
    CategoryItem: DataTypes.STRING,
  });

  Category.associate = function (models) {
    Category.hasMany(models.Guest, {

    });
  };
  
  return Category;
};