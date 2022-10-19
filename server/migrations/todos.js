
module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('Todos', {
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
        checked: {
            type: Sequelize.BOOLEAN,
            default: false
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
      return queryInterface.dropTable('Todos')
    }
  }
