
module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('TodoLists', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        listId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'Lists',
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
      return queryInterface.dropTable('TodoLists')
    }
  }
