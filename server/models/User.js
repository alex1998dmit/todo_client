const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class User extends Model {}
    User.init({
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'User',
    });
    User.associate = (models) => {
        User.belongsToMany(models.Todo, { through: 'UserTodo', foreignKey: 'userId' });
        User.belongsToMany(models.List, { through: 'TodoList', foreignKey: 'userId' });
    }
    return User;
}
