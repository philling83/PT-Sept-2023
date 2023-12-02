function binaryToString(binaryBlob) {
  let chars = "";

  for (let i = 0; i < binaryBlob.length; i += 8) {
    let binary8 = binaryBlob.slice(i, i + 8);
    let decimal = parseInt(binary8, 2);
    let char = String.fromCharCode(decimal);

    chars += char;
  };

  return chars;
};

/* Comment in the code below to run local tests */
// console.log(binaryToString('010000010100001001000011')); // 'ABC'
// console.log(binaryToString('001101100011011100111000')); // '678'


module.exports = binaryToString;