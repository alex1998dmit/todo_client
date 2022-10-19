const { Model } = require('sequelize')
const Todo = require('./Todo')
const List = require('./List')

module.exports = (sequelize, DataTypes) => {
  class TodoList extends Model {}
  TodoList.init({
    todoId: DataTypes.INTEGER,
    listId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'TodoList',
  })
  TodoList.associate = (models) => {
    TodoList.belongsTo(models.Todo, { foreignKey: 'todoId', as: 'todos' });
    TodoList.belongsTo(models.List, { foreignKey: 'listId', as: 'lists' });
  }
  return TodoList
}
