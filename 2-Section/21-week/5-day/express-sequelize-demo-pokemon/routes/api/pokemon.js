const express = require('express');

const { Pokemon } = require('../../db/models')

const { buildError } = require('../../utils/errorBuild.js')

const router = express.Router();

const { Op } = require('sequelize');

//! /gen/:genNum get all pokemon  from a specific gen
//! only show columns name, gen, order by type reverse alpha

router.get('/gen/:genNum', async (req, res, next) => {
    const { genNum } = req.params;

    const pokemonByGen = await Pokemon.findAll({
        where: {
            gen: genNum
        },
        attributes: ['name', 'type', 'gen'],
        order: [['type', 'ASC']]
    });

    res.json(pokemonByGen);

})

//! /type/water get all pokemon that are water type
//! show name, type, hasEvo, order by name and type

router.get('/type/water', async (req, res, next) => {

    const queryObj = {
        where: {
            type: 'water'
        },
        attributes: ['name', 'type', 'hasEvo', 'gen'],
        order: [['name', 'ASC'], ['gen', 'DESC']]
    };

    const waterPokemon = await Pokemon.findAll(
        queryObj
    );

    res.json(waterPokemon);

})

//! /char
//! get all pokemon that start with Char, show all info
router.get('/char', async (req, res, next) => {


    const charPokemon = Pokemon.findAll({
        where: {
            [Op.like]: 'Char%'
        }
    });

    res.json(charPokemon);

})

//! /:id getting specific pokemon, deleting or updating pokemon
//! show all info
router.route('/:id')
    .get(async (req, res, next) => {
        const { id } = req.params;
        //! can use findOne

        const pokemonOne = await Pokemon.findOne({
            where: {
                id
            }
        })

        //! or use findByPk

        const pokemonPk = await Pokemon.findByPk(id);

        if (!pokemonPk) return next(buildError('Could not find pokemon by that name', 'Poke not found', 404))


        res.json(pokemonPk)

    })
    .put(async (req, res, next) => {
        const { id } = req.params;
        const {name} = req.body
        //! first need to query for the pokemon we are trying to update
        const pokeToUpdate = await Pokemon.findByPk(id);

        if (!pokeToUpdate) {
           return next(buildError('Could not find pokemon by that name', 'Poke not found', 404))
        }

        await pokeToUpdate.update({
            name
        })

        res.json(pokeToUpdate);
    })
    .delete(async (req, res, next) => {
        const { id } = req.params;

        const pokeToRelease = await Pokemon.findByPk(id);

        if (!pokeToRelease) return next(buildError('Could not find pokemon by that name', 'Poke not found', 404))

        pokeToRelease.destroy();

        res.json({
            'message' : 'Delete successful'
        })
    })

//! / -> posting a new pokemon, getting all pokemon
//! order by pokemon who can evolve and then name

router.route('/')
    .get(async (req, res, next) => {
        const allPokemon = await Pokemon.findAll({
            order: [['type', 'ASC'], ['name', 'ASC']]
        })

        res.json(allPokemon);
    })
    .post(async (req, res, next) => {
        const { name, type, hasEvo, gen } = req.body;
        //! for now will use try catch we will learn express-validator stuff later
        try {
            //! use build then save maybe use build if you need to manipulate the instance in any way before saving
            // const newPokemon = Pokemon.build({
            //     name,
            //     type,
            //     hasEvo,
            //     gen
            // })
            // //! build only builds the instance, it does not save to the db need to run save
            // await newPokemon.save()

            const newPokemon = await Pokemon.create({
                name,
                type,
                hasEvo,
                gen
            })

            res.json(newPokemon);

            //! Model.create

        }
        catch (err) {
            return next(err);
        }

    })







module.exports = router;
