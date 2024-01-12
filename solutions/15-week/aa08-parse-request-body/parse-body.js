function firstStep(input) {
  return input.split("&");
};

function secondStep(input) {
  return input.map((kvPair) => kvPair.split("="));
};

function thirdStep(input) {
  return input.map(([key, value]) => [key, value.replace(/\+/g, " ")]); // [key, value] = kvPair
};

function fourthStep(input) {
  return input.map(([key, value]) => [key, decodeURIComponent(value)]);
};

function fifthStep(input) {
  return input.reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {});
};

function parseBody(str) {
  const splitStrs = firstStep(str);

  const kvArrays = secondStep(splitStrs);

  const replacedPlusSigns = thirdStep(kvArrays);

  const decodedValues = fourthStep(replacedPlusSigns);

  return fifthStep(decodedValues);
};

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  parseBody
};
