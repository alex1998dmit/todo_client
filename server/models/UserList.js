const { Model } = require('sequelize');
const List = require('./List');
const User = require('./User');

module.exports = (sequelize, DataTypes) => {
  class UserList extends Model {}
  UserList.init({
    title: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'UserList',
  })
  UserList.associate = (models) => {
    UserList.belongsTo(models.List, { foreignKey: 'listId' });
    UserList.belongsTo(models.User, { foreignKey: 'userId' });
  }
  return UserList
}
