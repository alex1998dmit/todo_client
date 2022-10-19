const { Model } = require('sequelize');
const ListUser = require('./UserList');
const Todo = require('./Todo');
const User = require('./User');
const db = require('.');

module.exports = (sequelize, DataTypes) => {
  class List extends Model {}
  List.init({
    title: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'List',
  });

  List.associate = (models) => {
    List.belongsToMany(models.User, { through: 'ListUser', foreignKey: 'listId', as: 'users' });
    // List.belongsToMany(models.Todo, { through: 'TodoUser', foreignKey: 'listId', as: 'todos' });
  }
  return List
}
