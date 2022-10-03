const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class List extends Model {}
  List.init({
    title: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'List',
  })
  return List
}
