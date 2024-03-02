const express = require('express');
const router = express.Router();

const { Player, Sport, Team } = require("../db/models");

router.post("/:id/players", async (req, res) => {
  const { firstName, lastName, number, isRetired } = req.body;
  const { id } = req.params;

  const newPlayer = await Player.create({
    firstName,
    lastName,
    number,
    isRetired,
    currentTeamId: parseInt(id)
  })

  return res.json(newPlayer);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  const team = await Team.findByPk(parseInt(id), {
    include: [
      { model: Sport },
      { model: Player, as: "TeamRoster" }
    ]
  });

  return res.json(team);
})

module.exports = router;
