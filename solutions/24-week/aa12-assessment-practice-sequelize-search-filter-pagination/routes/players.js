const express = require('express');
const router = express.Router();

const { Player } = require('../db/models');

router.get('/', async (req, res) => {
  let { firstName, number, page, size } = req.query;

  page = Number(page);
  size = Number(size);

  if (isNaN(page) || page < 1) page = 1;
  if (isNaN(size) || size < 1) size = 2;

  if (size > 10) size = 10;

  const where = {};
  const pagination = {};
  pagination.limit = size;
  pagination.offset = size * (page - 1);

  if (firstName && firstName !== '') {
    //! first letter of name should be set to uppercase not lowercase
    where.firstName = firstName[0].toUpperCase() + firstName.slice(1);
  } else if (firstName === '') {
    res.status(400);
    return res.json({
      errors: [
        { message: 'firstName filter should not be empty' }
      ]
    });
  }

  if (number) {
    //! number should be greater or equal to zero, not less
    if (!isNaN(number) && number >= 0) {
      where.number = parseInt(number);
    } else {
      res.status(400);
      return res.json({
        errors: [
          { message: 'number filter should be a number greater or equal to 0' }
        ]
      });
    }
  }

  const players = await Player.findAll({
    where,
    ...pagination
  });
  return res.json({
    players,
    page: page,
    size: size
  });
});

module.exports = router;
