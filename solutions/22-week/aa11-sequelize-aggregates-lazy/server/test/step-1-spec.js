const { setupBefore, setupChai, removeTestDB } = require('./utils/test-utils');
const chai = setupChai();
const expect = chai.expect;
let chaiJsonSchema = require('chai-json-schema');
chai.use(chaiJsonSchema);

describe("Step #1 Specs", () => {
  let DB_TEST_FILE, models, server;
  before(async () => ({ server, models, DB_TEST_FILE } = await setupBefore(__filename)));
  after(async () => await removeTestDB(DB_TEST_FILE));

  describe("GET /toys-summary", () => {
    it("returns the count, min price, max price, and sum of the price of all toys", async () => {
      await chai
        .request(server)
        .get("/toys-summary")
        .then(res => {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          const schema = {
            type: 'object',
            required: ['count', 'minPrice', 'maxPrice', 'sumPrice'],
            properties: {
              count: {
                type: 'number',
                enum: [10056]
              },
              minPrice: {
                type: 'number',
                enum: [1]
              },
              maxPrice: {
                type: 'number',
                enum: [100]
              },
              sumPrice: {
                type: 'number',
                enum: [543262]
              },
            }
          };
          expect(res.body).to.be.jsonSchema(schema);
        });
    });
  });
});
