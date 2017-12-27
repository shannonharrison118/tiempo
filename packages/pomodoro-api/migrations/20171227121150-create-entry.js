module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('Entries', {
      id: {
        unique: true,
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
      },
      start: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      end: {
        type: Sequelize.INTEGER,
      },
      running: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      typeId: {
        allowNull: false,
        onDelete: 'CASCADE',
        references: { model: 'Types', key: 'id' },
        type: Sequelize.UUID,
      },
      userId: {
        allowNull: false,
        onDelete: 'CASCADE',
        references: { model: 'Users', key: 'id' },
        type: Sequelize.UUID,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('now()'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('now()'),
      },
    })
  },

  down(queryInterface, Sequelize) {
    return queryInterface.dropTable('Entries')
  },
}
