const express = require('express');
const router = express.Router();

const { Fan, Player } = require("../db/models");

router.get("/:fanId/drafts", async (req, res) => {
  const { fanId } = req.params;

  const fan = await Fan.findByPk(parseInt(fanId), {
    include: [
      { model: Player }
    ]
  });

  return res.json(fan.Players);
});

router.delete("/:fanId", async (req, res) => {
  const { fanId } = req.params

  const fan = await Fan.findByPk(parseInt(fanId));

  await fan.destroy();

  return res.json({ "message": "Successfully deleted" });
});

module.exports = router;