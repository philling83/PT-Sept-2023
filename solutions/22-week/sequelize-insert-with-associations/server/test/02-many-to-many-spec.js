const { setupBefore, setupChai, removeTestDB, runSQLQuery } = require('./utils/test-utils');
const chai = setupChai();
const expect = chai.expect;

describe('Step 2: Many-to-Many', () => {
  let DB_TEST_FILE, SERVER_DB_TEST_FILE, models, server;
  before(async () => ({ server, models, DB_TEST_FILE, SERVER_DB_TEST_FILE } = await setupBefore(__filename)));
  after(async () => await removeTestDB(DB_TEST_FILE));

  describe('POST /musicians/:musicianId/instruments', () => {
    let adam;
    let beforeAdamInstruments;

    before(async () => {
      adam = await models.Musician.findOne({
        where: { firstName: "Adam" }
      });

      beforeAdamInstruments = await models.MusicianInstrument.findAll({
        where: { musicianId: adam.id },
        order: [ ["instrumentId"] ]
      });
    });

    it('sends a JSON success message after associating musician and instruments', async () => {
      expect(beforeAdamInstruments).to.not.be.null;
      expect(beforeAdamInstruments).to.be.an('array');
      expect(beforeAdamInstruments).to.have.length(2);
      expect(beforeAdamInstruments[0].dataValues).to.haveOwnProperty('instrumentId');
      expect(beforeAdamInstruments[0].dataValues.instrumentId).to.equal(1);
      expect(beforeAdamInstruments[1].dataValues).to.haveOwnProperty('instrumentId');
      expect(beforeAdamInstruments[1].dataValues.instrumentId).to.equal(2);

      const reqBody = {
        instrumentIds: [ 3, 4 ]
      };

      await chai.request(server)
        .post(`/musicians/${adam.id}/instruments`)
        .send(reqBody)
        .then((res) => {
          expect(res.status).to.be.within(200, 201);
          expect(res).to.be.json;
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.own.property('message');
          expect(res.body.message).to.equal(`Associated ${adam.firstName} with instruments ${reqBody.instrumentIds}.`);
        });
    })

    it('connects the instruments to the musician through the join table', async () => {

      const afterAdamInstruments = await models.MusicianInstrument.findAll({
        where: { musicianId: adam.id },
        order: [ ["instrumentId"] ]
      });

      expect(afterAdamInstruments).to.not.be.null;
      expect(afterAdamInstruments).to.be.an('array');
      expect(afterAdamInstruments).to.have.length(4);
      expect(afterAdamInstruments[2].dataValues).to.haveOwnProperty('instrumentId');
      expect(afterAdamInstruments[2].dataValues.instrumentId).to.equal(3);
      expect(afterAdamInstruments[3].dataValues).to.haveOwnProperty('instrumentId');
      expect(afterAdamInstruments[3].dataValues.instrumentId).to.equal(4);
    });
  });
});
