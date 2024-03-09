const { setupBefore, setupChai, removeTestDB } = require('./utils/test-utils');
const chai = setupChai();
const expect = chai.expect;

describe('Step 3: Implement a named function scope to a dynamic route', () => {
    let DB_TEST_FILE, models, server;
    before(async () => ({ server, models, DB_TEST_FILE } = await setupBefore(__filename)));
    after(async () => await removeTestDB(DB_TEST_FILE));  

    describe('GET /stores/:storeId/instruments', () => {
        it('returns all the instruments within the given `storeId` with Store property', async () => {
            return await chai.request(server)
                .get('/stores/2/instruments')
                .then((res) => {
                    expect(res).to.have.status(200);
                    expect(res).to.be.json;
                    expect(res.body).to.be.a('array');
                    expect(res.body.length).to.eq(10);

                    for (const instrument of res.body) {
                        expect(instrument).to.have.own.property('id');
                        expect(instrument).to.have.own.property('name');
                        expect(instrument).to.have.own.property('type');
                        expect(instrument).to.have.own.property('storeId');
                        expect(instrument).to.have.own.property('Store');
                    }
            });
        });

        it('returns associated Store data within Store property', async () => {
            return await chai.request(server)
                .get('/stores/2/instruments')
                .then((res) => {
                    expect(res).to.have.status(200);
                    expect(res).to.be.json;
                    expect(res.body.length).to.eq(10);

                    for (const instrument of res.body) {
                        expect(instrument["Store"]).to.have.own.property('id');
                        expect(instrument["Store"]).to.have.own.property('name');
                        expect(instrument["Store"]).to.have.own.property('location');
                    }
            });
        });

        it('get /stores/:storeId/instruments query orders instruments alphabetically by name', async () => {
            return await chai.request(server)
                .get('/stores/2/instruments')
                .then((res) => {
                    expect(res).to.have.status(200);
                    expect(res).to.be.json;

                    const names = res.body.map((inst) => inst.name);
                    const firstName = names[0]
                    const lastName = names[9]
                    const sortedNames = names.sort();

                    expect(firstName).to.eql(sortedNames[0]);
                    expect(lastName).to.eql(sortedNames[9]);
            });
        });

        it('get /stores/:storeId/instruments query excludes createdAt and updatedAt', async () => {
            return await chai.request(server)
                .get('/stores/2/instruments')
                .then((res) => {
                    expect(res).to.have.status(200);
                    expect(res).to.be.json;

                    for (const instrument of res.body) {
                        expect(instrument).not.to.have.own.property('createdAt');
                        expect(instrument).not.to.have.own.property('updatedAt');
                    }
            });
        });
    });
});
