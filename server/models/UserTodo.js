const { Model } = require('sequelize')
const Todo = require('./Todo');
const User = require('./User');

module.exports = (sequelize, DataTypes) => {
  class UserTodo extends Model {}
  UserTodo.init({
    title: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'UserTodo',
  })
  UserTodo.associate = (models) => {
    UserTodo.belongsTo(models.Todo, { foreignKey: 'todoId' });
    UserTodo.belongsTo(models.User, { foreignKey: 'userId' });
  }
  return UserTodo
}
