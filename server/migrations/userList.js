
module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('UserLists', {
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
        listId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'Lists',
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
      return queryInterface.dropTable('UserLists')
    }
  }
