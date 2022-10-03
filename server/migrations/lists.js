
module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('Lists', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        title: {
          type: Sequelize.STRING,
          default: null
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      })
    },
    down: (queryInterface) => {
      return queryInterface.dropTable('Lists')
    }
  }
