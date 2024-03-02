const VALID = 'validValues';
const INVALID = 'invalidValues';

module.exports = {
  airlineCode: {
    [VALID]: [
      'UA',
      'BA', 
      'DL',
      'AA',
    ],
    [INVALID]: [
      null,
      '',
      'ua',
      'B',
      'ABC',
    ],
  },

  flightNumber: {
    [VALID]: [
      '1',
      '98',
      '170',
      '8869',
    ],
    [INVALID]: [
      null,
      '',
      '1B',
      'ABC',
      '98765',
      '987654',
    ]
  },

  inService: {
    [VALID]: [
      true,
      false,
      undefined,
    ],
    [INVALID]: [
      null,
    ],
  },

  maxNumPassengers: {
    [VALID]: [
      853,
      550,
      100,
      2,
    ],
    [INVALID]: [
      null,
      -1,
      0,
      1,
      854,
      1000,
    ],
  },

  currentNumPassengers: {
    [VALID]: [
      null,
      undefined,
      853,
      550,
      150,
      0
    ],
    [INVALID]: [
      -1,
      854,
      1000,
    ],
  },

  firstFlightDate: {
    [VALID]: [
      '2020-01-01',
      '2021-12-31',
      null,
    ],
    [INVALID]: [
      '2018-05-12',
      '2019-12-31',
      '2022-01-01',
      '2024-06-10',
    ],
  },

  VALID,
  INVALID,
};
