const chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../app');
chai.use(chaiHttp);
const expect = chai.expect;

const { WarehouseItem } = require('../../db/models');
const { resetDB, seedAllDB } = require('../utils/test-utils');

describe('Phase 3 Bonus Specs - WarehouseItems', () => {
  let currentId = 3;

  before(async function () {
    await resetDB();
    return seedAllDB();
  });

  it('passes the API specs for GET /items/:name', async () => {
    await chai.request(server)
      .get('/items/Paint')
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.eql({ id: 1, name: 'Paint', price: 12.12, quantity: 12, isUsed: false });
      });

    const newItemInfo = {
      name: 'NewItem',
      price: 1.01,
      quantity: 1,
      isUsed: true
    };
    await WarehouseItem.create(newItemInfo);
    currentId++;
    await chai.request(server)
      .get('/items/NewItem')
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.eql({
          id: currentId,
          ...newItemInfo
        });
      });

    return await chai.request(server)
      .get('/items/notfound')
      .then((res) => {
        expect(res).to.have.status(404);
        expect(res).to.be.json;
        expect(res.body).to.eql({
          "message": "Warehouse Item not found"
        });
      });
  });

  it('passes the API specs for DELETE /items/:id', async () => {
    await chai.request(server)
      .delete('/items/3')
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.eql({ message: 'Successfully deleted' });
      });
    const foundItem = await WarehouseItem.findByPk(3);
    expect(foundItem).to.be.null;

    return await chai.request(server)
      .delete('/items/100')
      .then((res) => {
        expect(res).to.have.status(404);
        expect(res).to.be.json;
        expect(res.body).to.eql({
          "message": "Warehouse Item not found"
        });
      });
  });
});