'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      "Teams",
      "sportId",
      {
        type: Sequelize.INTEGER,
        references: { model: "Sports" },
        allowNull: false,
      }
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Teams", "sportId")
  }
};
