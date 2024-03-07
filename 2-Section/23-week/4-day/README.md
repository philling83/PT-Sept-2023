# CSRF Attacks (Cross-Site Request Forgery)
- Unauthorized frontend applications making requests to the backend with the intent of performing malicious actions such as stealing sensitive information about the user.
- An example of a CSRF attack would be clicking on a link believing it will lead to their intended site, but it ends up sending them to a fake site that can make similar request to the original sites backend. This will give them authorization to perform malicious actions on the backend server.

## Preventing CSRF Attacks
- Through the use of CSRF tokens and encryption, the backend can authorize a valid frontend application to make any non-get request to the backend. This will prevent any unauthorized applications making non-get requests to the backend.
- The backend has a secret encryption key and creates 2 types of tokens and attatches them to the cookies. One cookie is encrypted and is HTTP-ONLY and same-site meaning it can't be used by JavaScript and cannot be used by another application. The other cookie is decrypted and is set as a normal cookie.
- The frontend needs to make an initial request that will retrieve these cookies, then in any non-get request they need to add the decrypted cookie as a header in their request. When the request is made the modified header and encrypted cookie are sent to the backend.
- The backend can now check the request's encrypted cookie and decrypt it and check if it matches the token in the request header. This will prevent any unauthorized request from any unauthorized web apps.


# JWT (Json Web Token)
## encoding, encrypting, hashing
- encoding changes characters that are hard to read for certain systems into readable characters, IE changing from utf-8 to base64. Can easily be reversed with or with out a key.
- Encryption is used to transmit info, only making it readable to someone who has a special key to decrypt it.
- Hashing also transmits information, but can never be reversed to its pre-hashed state. This makes it the most secure out the three.

## JWT components
- Header contains the algorithm used to hash, and the type of token.
- Payload contains the data the token is holding. It is encoded in base64, so it can easily be decoded. Important to never store sensitive information in a JWT.
- Signature is used to verify that the token has not been tampered with, NOT used to protect the contents of the payload. Signature contains a hash of the header + payload + secret-key.

- To verify the validity of the token, you would just use the secret key, and try to hash it together with header and payload, if the payload or the header were changed, the signature would not match the original.

- This is what an encoded JWT looks like, the components are split apart by "."
```js
  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9 // encoded header
  .eyJlbWFpbCI6ImpvaG5ueUBnbWFpbC5jb20ifQ // encoded payload
  .SkuHIxgU1sDTrNKTTUIu9yDohUu8h0_4mbHiOMaUKwA // hashed signature

```

# Sql Transactions
- Are used to create snapshots of states in the database while making multiple changes to multiple records.
- Start a string of queries with BEGIN TRANSACTION
- any time you want to save a certain state of the database use SAVEPOINT [name of save point]
- can rollback any changes to the database using ROLLBACK [name of savepoint] this will undo any changes made after that savepoint.
- When we are done with all the queries we need to use the command COMMIT, to ensure all changes are saved.

- A good example of when we would use sql transaction is during a transfer of funds between bank accounts, we would want to ensure the accounts have enough to cover the transfer.
Since we need to make multiple queries, it is a good idea to keep track of each change in the database until the whole transaction is finished.

# Transactions in Sequelize
- Two types of transactions in sequelize, managed and unmanaged.
- In an unmanaged transaction, we need to specify when we want to rollback or commit.
- In a managed transaction, it is automatically done if there were no errors in the queries.
- For an unmanaged transaction we would save a transaction object to a variable ```const t = await sequelize.transaction() ``` before a try catch block. Then we would use that object's transaction methods. To create a savepoint we would use the "t" object in our option object for a query
```js
    const user = await User.create({
        firstName : 'Alan'
    }, {transaction : t}) // save point creation here.
```

- For a managed transaction, we would run the sequelize transaction method in a try/catch block and pass it callback function that will do all the queries we need.
```js
    try{
        const transaction = await sequelize.transaction(async (t) =>{
            // queries here.
        })
        // if the transaction completes, it will automatically be committed.
    }
    catch(e){
        // if an error occurs, and we end up in the catch block, the transaction will automatically be rolled back.
    }

```
