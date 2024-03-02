require('express-async-errors');
require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

const { WarehouseItem } = require("./db/models");

app.get("/items", async (req, res) => {
  const items = await WarehouseItem.findAll({ where: { isUsed: false } });

  return res.json(items);
});

app.put("/items/:id", async (req, res) => {
  const { id } = req.params;
  const { name, price, quantity, isUsed } = req.body;

  const item = await WarehouseItem.findByPk(parseInt(id));

  if (item) {
    // item.name = name;
    // item.price = price;
    // item.quantity = quantity;
    // item.isUsed = isUsed;
    // await item.save();

    await item.update({
      name,
      price,
      quantity,
      isUsed,
    });

    return res.json(item);
  } else {
    return res.status(404).json({ message: "Warehouse Item not found" });
  };
});

if (require.main === module) {
  const port = 8003;
  app.listen(port, () => console.log('Server-3 is listening on port', port));
} else {
  module.exports = app;
}