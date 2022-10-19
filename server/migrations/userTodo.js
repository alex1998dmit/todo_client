
module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('UserTodos', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        userId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'id'
            }
        },
        todoId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'Todos',
                key: 'id'
            }
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
      return queryInterface.dropTable('UserTodos')
    }
  }
