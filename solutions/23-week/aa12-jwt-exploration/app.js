// configure environment - DO NOT MODIFY
require('dotenv').config();

// Import package

const jwt = require('jsonwebtoken')

// Define variables - DO NOT MODIFY

// 1. Sign (create) a JWT containing your email address
let token; // DO NOT MODIFY! Re-assign the token variable below.

token = jwt.sign(
    { email: 'johnny@gmail.com' },
    process.env.SECRET_KEY,
    { expiresIn: 1 }
);

// See the JWT in the console - DO NOT MODIFY
console.log('JWT:', token);

// 2. Decode a JWT Payload

let payload; // DO NOT MODIFY! Re-assign the payload variable below.

payload = jwt.decode(token)

// See the decoded payload in the console - DO NOT MODIFY
console.log('Payload:', payload);

// 3. Verify a JWT

let verifiedPayload; // DO NOT MODIFY! Re-assign the verifiedPayload variable below.

verifiedPayload = jwt.verify(token, process.env.SECRET_KEY)

// See the verified payload in the console - DO NOT MODIFY
console.log('Verified Payload:', verifiedPayload);

// (Optional) Bonus: Catch Error With Invalid Signature
// Generate an alternate secret key and use it
//    To "try" to get the payload using jwt.verify
//    Then "catch" the error and log it to the console.

try {
    const newSecret = 'dc4ec585cfa9a4a613e1f801e11b869698ac7f9422369769a47fb454882c681d55447ed2a1b8147e8595d3e64f0ee7eed533718cdb2fec63eff8943bc2a18a46';

    const tryVerify = jwt.verify(token, newSecret);

}
catch (e) {
    console.log('Error' , e);
}

// (Optional) Bonus: Catch Error With Expired Token
// First, set the token's expiration (above) to 1 second
// Second, add a setTimeout longer than 1 second
//    To "try" to get the payload using jwt.verify (with proper secret)
//    Then "catch" the error and log it to the console

try {
    setTimeout(() => {
        const timeVerify = jwt.verify(token, process.env.SECRET_KEY);
    }, 1001)
}
catch (e) {
    console.log('expired error', e);
}
