'use strict';

const {Insect} = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    const insects = [
      {
        name: 'Western Pygmy Butterfly',
        description: 'It can be recognized by the copper brown and dull blue pattern at the bases of both wings.',
        territory: 'North America',
        fact: 'They also managed to survive mass extinction events such as the ice age. Today, the order of Lepidopterous insects, currently comprise more than 180,000 species and include not only butterflies but also members of the moth family.',
        millimeters: 12
      }
    ]

    await Insect.bulkCreate(insects, { validate: true });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Insects', { name: 'Western Pygmy Butterfly' }, {});
  }
};
