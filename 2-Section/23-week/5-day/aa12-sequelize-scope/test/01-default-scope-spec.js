const { setupBefore, setupChai, removeTestDB } = require('./utils/test-utils');
const chai = setupChai();
const expect = chai.expect;

describe('Step 1: Apply a default scope onto the searches', () => {
    let DB_TEST_FILE, models, server;
    before(async () => ({ server, models, DB_TEST_FILE } = await setupBefore(__filename)));
    after(async () => await removeTestDB(DB_TEST_FILE));

    describe('GET /instruments', () => {
        it('get instruments query excludes the `createdAt` and `updatedAt` data', async () => {
            return await chai.request(server)
                .get('/instruments')
                .then((res) => {
                    expect(res).to.have.status(200);
                    expect(res).to.be.json;
                    expect(res.body).to.be.a('array');
                    expect(res.body.length).to.eq(39);

                    for (const instrument of res.body) {
                        expect(instrument).to.have.own.property('id');
                        expect(instrument).to.have.own.property('name');
                        expect(instrument).to.have.own.property('type');
                        expect(instrument).to.have.own.property('storeId');
                        expect(instrument).not.to.have.own.property('createdAt');
                        expect(instrument).not.to.have.own.property('updatedAt');
                    }
            });
        });
    });

    describe('GET /stores', () => {
        it('get stores query excludes the `createdAt` and `updatedAt` data', async () => {
            return await chai.request(server)
                .get('/stores')
                .then((res) => {
                    expect(res).to.have.status(200);
                    expect(res).to.be.json;
                    expect(res.body).to.be.a('array');
                    expect(res.body.length).to.eq(3);

                    for (const instrument of res.body) {
                        expect(instrument).to.have.own.property('id');
                        expect(instrument).to.have.own.property('name');
                        expect(instrument).to.have.own.property('location');
                        expect(instrument).not.to.have.own.property('createdAt');
                        expect(instrument).not.to.have.own.property('updatedAt');
                    }
            });
        });
    });
});
