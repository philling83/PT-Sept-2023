const { setupBefore, setupChai, removeTestDB, runSQL, runSQLQuery } = require('./utils/test-utils');
const chai = setupChai();
const expect = chai.expect;

describe('Phase 3 Specs - Insect', () => {
  let DB_TEST_FILE, SERVER_DB_TEST_FILE, models, server;
  before(async () => ({ server, models, DB_TEST_FILE, SERVER_DB_TEST_FILE } = await setupBefore(__filename)));
  after(async () => await removeTestDB(DB_TEST_FILE));

  context('Invalid Data', () => {
    it('does not allow `name` attribute to be empty', async () => {
      try {
        await runSQL("INSERT INTO 'Insects' (millimeters) VALUES (5);", SERVER_DB_TEST_FILE)
      } catch(err) {
        try {
          const insect = models.Insect.build({ millimeters: 5 });
          await insect.validate();
        } catch(err) {
          return;
        }
        return expect.fail('Invalid Data Allowed in DB (check your validations)');
      }
      expect.fail('Invalid Data Allowed in DB (check your constraints)');
    });
  
    it('does not allow duplicate `name` attribute values', async () => {
      try {
        await models.Insect.create({ name: 'Bumblebee', millimeters: 5 });
        await models.Insect.create({ name: 'Bumblebee', millimeters: 5 });
      } catch (err) {
        return;
      }
      expect.fail('Invalid Data Allowed in DB (check your constraints)')
    });
  
    it('does not allow `name` attribute values that are not title cased', async () => {
      try {
        await models.Insect.create({ name: 'dragonfly', millimeters: 5 })
      } catch (err) {
        return;
      }
      expect.fail('Invalid Data Allowed in DB (check your validations)')
    });

    it('does not allow `fact` attribute values that are greater than 240 characters', async () => {
      try {
        await models.Insect.create({ name: 'Dragonfly', millimeters: 5, fact: 'x'.repeat(241) })
      } catch (err) {
        return;
      }
      expect.fail('Invalid Data Allowed in DB (check your validations)')
    });

    it('does not allow `millimeters` attribute to be empty', async () => {
      try {
        await runSQL("INSERT INTO 'Insects' (name) VALUES ('Wasp');", SERVER_DB_TEST_FILE)
      } catch(err) {
        try {
          const insect = models.Insect.build({ name: 'Wasp' });
          await insect.validate();
        } catch(err) {
          return;
        }
        return expect.fail('Invalid Data Allowed in DB (check your validations)');
      }
      expect.fail('Invalid Data Allowed in DB (check your constraints)');
    });
  
    it('does not allow `millimeters` attribute values less than 0', async () => {
      try {
        await models.Insect.create({ name: 'Ant', millimeters: -1 })
      } catch(err) {
        return;
      }
      expect.fail('Invalid Data Allowed in DB (check your validations)')
    });
  });

  context('Valid Data', () => {
    it('allows a title-cased string for the `name` attribute value', async () => {
      await models.Insect.create({ name: 'Queen Ant', millimeters: 5 });
    });

    it('allows a number greater than 0 for the `millimeters` attribute', async () => {
      await models.Insect.create({ name: 'Fly', millimeters: 1 });
    });

    it('allows a `fact` attribute that is less than 240 characters', async () => {
      await models.Insect.create({ name: 'Spider', millimeters: 5, fact: 'x'.repeat(238) });
    });

    it('allows a string for the `description` attribute', async () => {
      await models.Insect.create({ name: 'Beetle', millimeters: 5, description: 'A buggy beetle' });
    });

    it('uses the current time as default values for `createdAt` and `updatedAt` attribute values', async () => {
      await runSQL("INSERT INTO 'Insects' (name, millimeters) VALUES ('Ladybug', 5);", SERVER_DB_TEST_FILE);
      const testInsect = await models.Insect.findOne({ where: { name: 'Ladybug' }, attributes: ['createdAt', 'updatedAt']});
      expect(testInsect.get('createdAt')).to.be.an.instanceof(Date);
      expect(testInsect.get('createdAt').toString()).to.eq(testInsect.get('updatedAt').toString());
    });
  })
})