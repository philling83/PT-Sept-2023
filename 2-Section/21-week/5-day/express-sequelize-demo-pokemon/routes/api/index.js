const express = require('express');


const router = express.Router();

const pokemonRouter = require('./pokemon.js')

router.use('/pokemon', pokemonRouter);

module.exports = router;
