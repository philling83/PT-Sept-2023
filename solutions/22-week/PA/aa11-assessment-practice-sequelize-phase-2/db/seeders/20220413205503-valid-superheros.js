'use strict';

const { Superhero } = require('../models');

// DON'T SPEND ALL YOUR TIME MAKING REAL SEED DATA!!!
// Try to just spend only 5 minutes to create the seed data for testing
// You do not need to put in real superhero data as values! The data values
// just need to make sense based from the migration and model files.

const validSuperheros = [
  {
    name: "TESTA",
    alias: "TESTA",
    affiliation: "Avengers",
    heightCm: 200,
    isMutant: true,
    race: "human",
    universe: "Marvel",
    releaseYear: 1943,
  },
  {
    name: "TESTB",
    alias: "TESTB",
    affiliation: "Avengers",
    heightCm: 200,
    isMutant: true,
    race: "human",
    universe: "Marvel",
    releaseYear: 1942,
  },
  {
    name: "TESTC",
    alias: "TESTC",
    affiliation: "Avengers",
    heightCm: 200,
    isMutant: true,
    race: "human",
    universe: "Marvel",
    releaseYear: 1939,
  },
  {
    name: "TESTD",
    alias: "TESTD",
    affiliation: "Avengers",
    heightCm: 200,
    isMutant: true,
    race: "human",
    universe: "Marvel",
    releaseYear: 1940,
  },
  {
    name: "TESTF",
    alias: "TESTF",
    affiliation: "Avengers",
    heightCm: 200,
    isMutant: true,
    race: "human",
    universe: "Marvel",
    releaseYear: 1941,
  }
];

module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await Superhero.bulkCreate(validSuperheros, {
        validate: true,
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  },

  async down(queryInterface, Sequelize) {
    for (let superheroInfo of validSuperheros) {
      try {
        await Superhero.destroy({
          where: superheroInfo
        });
      } catch (err) {
        console.log(err);
        throw err;
      }
    }
  },
  // DO NOT MODIFY BELOW (for testing purposes):
  validSuperheros,
};
