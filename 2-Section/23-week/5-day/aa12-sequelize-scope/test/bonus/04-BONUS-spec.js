const { setupBefore, setupChai, removeTestDB, runSQLQuery } = require('../utils/test-utils');
const chai = setupChai();
const expect = chai.expect;

describe('BONUS', () => {
    describe('Implement Step 2 for all instrument types', () => {
        let DB_TEST_FILE, models, server;
        before(async () => ({ server, models, DB_TEST_FILE } = await setupBefore(__filename)));
        after(async () => await removeTestDB(DB_TEST_FILE));  
    
        describe('GET /instruments/:type', () => {
            it('endpoint returns only instruments of the given type (percussion)', async () => {
                return await chai.request(server)
                    .get('/instruments/percussion')
                    .then((res) => {
                        expect(res).to.have.status(200);
                        expect(res).to.be.json;
                        expect(res.body).to.be.a('array');
                        expect(res.body.length).to.eq(7);
    
                        for (const instrument of res.body) {
                            expect(instrument).to.have.own.property('id');
                            expect(instrument).to.have.own.property('name');
                            expect(instrument).to.have.own.property('type');
                            expect(instrument).to.have.own.property('storeId');
                            expect(instrument.type).to.equal('percussion');
                        }
    
                        expect(res.body.map(instrument => instrument.type))
                            .to.not.include("string", "woodwind", "keyboard", "brass wind");
                });
            });
    
            it('endpoint returns only instruments of the given type (brass wind)', async () => {
                return await chai.request(server)
                    .get('/instruments/brass%20wind')
                    .then((res) => {
                        expect(res).to.have.status(200);
                        expect(res).to.be.json;
                        expect(res.body).to.be.a('array');
                        expect(res.body.length).to.eq(6);
    
                        for (const instrument of res.body) {
                            expect(instrument).to.have.own.property('id');
                            expect(instrument).to.have.own.property('name');
                            expect(instrument).to.have.own.property('type');
                            expect(instrument).to.have.own.property('storeId');
                            expect(instrument.type).to.equal('brass wind');
                        }
    
                        expect(res.body.map(instrument => instrument.type))
                            .to.not.include("string", "woodwind", "percussion", "keyboard");
                });
            });
        });
    });

    describe('Implement another named function scope to a dynamic route', () => {
        let DB_TEST_FILE, models, server;
        before(async () => ({ server, models, DB_TEST_FILE } = await setupBefore(__filename)));
        after(async () => await removeTestDB(DB_TEST_FILE));  
    
        describe('GET /stores/:storeId/instruments/:type', () => {
            it('returns all the instruments of store 2 that are keyboards', async () => {
                return await chai.request(server)
                    .get('/stores/2/instruments/keyboard')
                    .then((res) => {
                        expect(res).to.have.status(200);
                        expect(res).to.be.json;
                        expect(res.body).to.be.a('array');
                        expect(res.body.length).to.eq(1);
    
                        for (const instrument of res.body) {
                            expect(instrument).to.have.own.property('id');
                            expect(instrument).to.have.own.property('name');
                            expect(instrument).to.have.own.property('type');
                            expect(instrument).to.have.own.property('storeId');
                            expect(instrument).to.have.own.property('Store');
    
                            expect(instrument.type).to.equal('keyboard');
                            expect(instrument.storeId).to.equal(2);
                            expect(instrument["Store"].id).to.equal(2);
                        }
    
                        expect(res.body.map(instrument => instrument.type))
                            .to.not.include("string", "woodwind", "percussion", "brass wind");
                });
            });
    
            it('returns all the instruments of store 1 that are percussion', async () => {
                return await chai.request(server)
                    .get('/stores/1/instruments/percussion')
                    .then((res) => {
                        expect(res).to.have.status(200);
                        expect(res).to.be.json;
                        expect(res.body).to.be.a('array');
                        expect(res.body.length).to.eq(3);
    
                        for (const instrument of res.body) {
                            expect(instrument).to.have.own.property('id');
                            expect(instrument).to.have.own.property('name');
                            expect(instrument).to.have.own.property('type');
                            expect(instrument).to.have.own.property('storeId');
                            expect(instrument).to.have.own.property('Store');
    
                            expect(instrument.type).to.equal('percussion');
                            expect(instrument.storeId).to.equal(1);
                            expect(instrument["Store"].id).to.equal(1);
                        }
    
                        expect(res.body.map(instrument => instrument.type))
                            .to.not.include("string", "woodwind", "keyboard", "brass wind");
                });
            });
        });
    });
});

