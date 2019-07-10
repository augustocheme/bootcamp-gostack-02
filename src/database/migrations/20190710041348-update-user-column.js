module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('users', 'updatedAt', 'updated_at');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  },
};
