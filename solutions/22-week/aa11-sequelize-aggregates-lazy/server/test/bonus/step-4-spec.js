const { setupBefore, setupChai, removeTestDB } = require('../utils/test-utils');
const chai = setupChai();
const expect = chai.expect;
let chaiJsonSchema = require('chai-json-schema');
chai.use(chaiJsonSchema);

describe("Step #4 Specs", () => {
  let DB_TEST_FILE, models, server;
  before(async () => ({ server, models, DB_TEST_FILE } = await setupBefore(__filename)));
  after(async () => await removeTestDB(DB_TEST_FILE));

  describe("GET /toys/:toyId", () => {
    it("GET /toys/5 returns the toy with an id of 5, its cats, and the percentage of its cats that have a color of 'Orange'", async () => {
      await chai
        .request(server)
        .get("/toys/5")
        .then(res => {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          const schema = {
            type: 'object',
            required: ['catCount', 'orangeCatCount', 'orangeCatPercentage', 'id', 'name', 'color', 'price', 'createdAt', 'updatedAt', 'Cats'],
            properties: {
              catCount: {
                type: 'number',
                enum: [3]
              },
              orangeCatCount: {
                type: 'number',
                enum: [2]
              },
              orangeCatPercentage: {
                type: 'string',
                enum: ['67%']
              },
              id: {
                type: 'number',
                enum: [5]
              },
              name: {
                type: 'string',
                enum: ['Shiny Mouse']
              },
              color: {
                type: 'string',
                enum: ['Blue']
              },
              price: {
                type: 'number',
                enum: [7]
              },
              createdAt: {
                type: 'string',
                format: 'date-time'
              },
              updatedAt: {
                type: 'string',
                format: 'date-time'
              },
              Cats: {
                type: 'array',
                minItems: 3,
                maxItems: 3,
              }
            }
          };
          expect(res.body).to.be.jsonSchema(schema);
        });
    });

    it("GET /toys/13 returns the toy with an id of 13, its cats, and the percentage of its cats that have a color of 'Orange'", async () => {
      await chai
        .request(server)
        .get("/toys/13")
        .then(res => {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          const schema = {
            type: 'object',
            required: ['catCount', 'orangeCatCount', 'orangeCatPercentage', 'id', 'name', 'color', 'price', 'createdAt', 'updatedAt', 'Cats'],
            properties: {
              catCount: {
                type: 'number',
                enum: [7]
              },
              orangeCatCount: {
                type: 'number',
                enum: [2]
              },
              orangeCatPercentage: {
                type: 'string',
                enum: ['29%']
              },
              id: {
                type: 'number',
                enum: [13]
              },
              name: {
                type: 'string',
                enum: ['Couple with heart']
              },
              color: {
                type: 'string',
                enum: ['Blue']
              },
              price: {
                type: 'number',
                enum: [71]
              },
              createdAt: {
                type: 'string',
                format: 'date-time'
              },
              updatedAt: {
                type: 'string',
                format: 'date-time'
              },
              Cats: {
                type: 'array',
                minItems: 7,
                maxItems: 7,
              }
            }
          };
          expect(res.body).to.be.jsonSchema(schema);
        });
    });
  });
});
