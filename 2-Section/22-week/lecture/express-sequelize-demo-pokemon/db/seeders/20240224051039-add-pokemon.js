'use strict';

const { Pokemon } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    const pokemon = [
      {
        name: 'Bulbasaur',
        type: 'grass',
        hasEvo: true,
        gen: 1,
      },
      {
        name: 'Squirtle',
        type: 'water',
        hasEvo: true,
        gen: 1,
      },
      {
        name: 'Ditto',
        type: 'normal',
        hasEvo: false,
        gen: 1
      },
      {
        name: 'Charmander',
        type: 'fire',
        hasEvo: true,
        gen: 1
      },
      {
        name: 'Charmeleon',
        type: 'fire',
        hasEvo: true,
        gen: 1
      },

      {
        name: 'Charizard',
        type: 'fire',
        hasEvo: false,
        gen: 1
      },
      {
        name: 'Froakie',
        type: 'water',
        hasEvo: true,
        gen: 6
      },
      {
        name: 'Hoopa',
        type: 'psychic',
        hasEvo: false,
        gen: 6
      },
      {
        name: 'Chespin',
        type: 'grass',
        hasEvo: true,
        gen: 6
      },
      {
        name: 'Totodile',
        type: 'water',
        hasEvo: true,
        gen: 2
      },
      {
        name: 'Ledian',
        type: 'bug',
        hasEvo: false,
        gen: 2
      },
      {
        name: 'Yanma',
        type: 'bug',
        hasEvo: false,
        gen: 2
      }
    ]
    await Pokemon.bulkCreate(pokemon, {validate: true})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Pokemon', null, {});
  }
};
