const chai = require('chai');
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const expect = chai.expect;

const { resetDB } = require('./utils/sql-utils');
const { runValidations, runConstraints } = require('./utils/test-utils');
const data = require('./data/airplane-values');
const { VALID, INVALID } = data;

describe('`currentNumPassengers` must be null if `inService` is true', () => {
  before(async function () {
    return await resetDB();
  });

  const columnName = 'currentNumPassengers';

  it('does not allow `inService` to be false if `currentNumPassengers` not null', async () => {
    let value = 80;
    let otherColumnName = 'inService';
    let otherValue = false;
    await expect(
      runValidations({
        [columnName]: value,
        [otherColumnName]: otherValue
      }),
      `Incorrectly passed validations when "${columnName}" was set to "${value}" and "${otherColumnName}" was set to "${otherValue}"`
    )
      .to.eventually.be.rejectedWith(Error);

    value = null;
    await expect(
      runValidations({
        [columnName]: value,
        [otherColumnName]: otherValue
      }),
      `Incorrectly failed validations when "${columnName}" was set to "${value}" and "${otherColumnName}" was set to "${otherValue}"`
    )
      .to.eventually.be.fulfilled;

    value = undefined;
    await expect(
      runValidations({
        airlineCode: "BB",
        [columnName]: value,
        [otherColumnName]: otherValue
      }),
      `Incorrectly failed validations when "${columnName}" was set to "${value}" and "${otherColumnName}" was set to "${otherValue}"`
    )
      .to.eventually.be.fulfilled;
  });
});
