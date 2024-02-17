let client;

try {
  client = require('./better-sqlite-client');
} catch (err) {
  client = require('./sqlite-client');
}

module.exports = client;