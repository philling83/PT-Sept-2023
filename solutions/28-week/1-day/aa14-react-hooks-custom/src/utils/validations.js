export const textInputValidators = [
  (value) => {
    if (value.length < 3) {
      return { pass: false, msg: "Length must be at least 3." };
    } else {
      return { pass: true };
    }
  }
];
