const { setupBefore, setupChai, removeTestDB } = require('./utils/test-utils');
const chai = setupChai();
const expect = chai.expect;
let chaiJsonSchema = require('chai-json-schema');
chai.use(chaiJsonSchema);

describe("Step #2 Specs", () => {
  let DB_TEST_FILE, models, server;
  before(async () => ({ server, models, DB_TEST_FILE } = await setupBefore(__filename)));
  after(async () => await removeTestDB(DB_TEST_FILE));

  describe("GET /cats/:catId", () => {
    it("GET /cats/7 returns the cat with an id of 7, its toys, and the count, total price, and avg price of its toys", async () => {
      await chai
        .request(server)
        .get("/cats/7")
        .then(res => {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          const schema = {
            type: 'object',
            required: ['toyCount', 'toyTotalPrice', 'toyAvgPrice', 'id', 'name', 'color', 'breed', 'createdAt', 'updatedAt', 'Toys'],
            properties: {
              toyCount: {
                type: 'number',
                enum: [4]
              },
              toyTotalPrice: {
                type: 'number',
                enum: [92]
              },
              toyAvgPrice: {
                type: 'number',
                enum: [23]
              },
              id: {
                type: 'number',
                enum: [7]
              },
              name: {
                type: 'string',
                enum: ['Keturah']
              },
              color: {
                type: 'string',
                enum: ['White']
              },
              breed: {
                type: 'string',
                enum: ['Arabian Mau']
              },
              createdAt: {
                type: 'string',
                format: 'date-time'
              },
              updatedAt: {
                type: 'string',
                format: 'date-time'
              },
              Toys: {
                type: 'array',
                minItems: 4,
                maxItems: 4,
              }
            }
          };
          expect(res.body).to.be.jsonSchema(schema);
        });
    });
  });
});
