const chai = require('chai');
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const expect = chai.expect;

const { resetDB } = require('./utils/sql-utils');
const { runValidations, runConstraints } = require('./utils/test-utils');
const data = require('./data/airplane-values');
const { VALID, INVALID } = data;

describe('`airlineCode` and `flightNumber` combination cannot be repeated', () => {
  before(async function () {
    return await resetDB();
  });

  const columnName = 'airlineCode';
  const otherColumnName = 'flightNumber';

  it('does not allow `airlineCode` and `flightNumber` combination to be repeated', async () => {
    let value = 'AA';
    let otherValue = 1000; // 1,000
    await expect(
      runConstraints({
        [columnName]: value,
        [otherColumnName]: otherValue
      }, false),
      `Incorrectly failed constraints when "${columnName}" was set to "${value}" and "${otherColumnName}" was set to "${otherValue}"`
    )
      .to.not.eventually.be.rejectedWith(Error);

    await expect(
      runConstraints({
        [columnName]: value,
        [otherColumnName]: otherValue
      }),
      `Incorrectly passed constraints when two entries had "${columnName}" set to "${value}" and "${otherColumnName}" set to "${otherValue}"`
    )
      .to.eventually.be.rejectedWith(Error);
  });

  it('allows `airlineCode` to be repeated', async () => {
    let value = 'BB';
    await expect(
      runConstraints({
        [columnName]: value,
      }, false),
      `Incorrectly failed constraints when "${columnName}" was set to "${value}"`
    )
      .to.not.eventually.be.rejectedWith(Error);

    let otherValue = '1000';
    await expect(
      runConstraints({
        [columnName]: value,
        [otherColumnName]: otherValue
      }),
      `Incorrectly passed constraints when two entries had "${columnName}" set to "${value}"`
    )
      .to.not.eventually.be.rejectedWith(Error);
  });

  it('allows `flightNumber` to be repeated', async () => {
    let otherValue = '1000';
    await expect(
      runConstraints({
        [otherColumnName]: otherValue,
      }, false),
      `Incorrectly failed constraints when "${otherColumnName}" was set to "${otherValue}"`
    )
      .to.not.eventually.be.rejectedWith(Error);

    let value = 'AA';
    await expect(
      runConstraints({
        [columnName]: value,
        [otherColumnName]: otherValue,
      }),
      `Incorrectly passed constraints when two entries had "${otherColumnName}" set to "${otherValue}"`
    )
      .to.not.eventually.be.rejectedWith(Error);
  });
});