const { createTables, insertData, stopTestOnError } = require('./utils');

describe('Insert data', () => {
  let client;
  let createError;
  let insertError;

  before(async () => {
    ({ client, createError, otherError } = await createTables());

    const insertError = await insertData(client, otherError);
    if (insertError) otherError = insertError;
  });

  after(async () => {
    if (client) {
      client.close();
    }
  });

  it('has no insertion errors (does not test if the data was inserted correctly)', async () => {
    if (stopTestOnError(client, createError, insertError)) return;
  });
});
