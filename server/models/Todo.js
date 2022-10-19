const { Model } = require("sequelize");
const List = require("./List");

module.exports = (sequelize, DataTypes) => {
    class Todo extends Model {}
    Todo.init({
        title: DataTypes.STRING,
        checked: DataTypes.BOOLEAN,
    }, {
        sequelize,
        modelName: 'Todo',
    })
    Todo.associate = (models) => {
        // Todo.belongsToMany(models.User, { through: 'UserTodo', foreignKey: 'todoId', as: 'users' });
        Todo.belongsToMany(models.List, { through: 'TodoList', foreignKey: 'todoId', as: 'lists' });
    }
    return Todo;
}
