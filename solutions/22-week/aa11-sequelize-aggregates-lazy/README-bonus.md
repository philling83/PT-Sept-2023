# BONUS Practice: Aggregate Data in Sequelize

In this bonus short practice, you will create a route handler that returns
aggregate data.

If you haven't already, download starter, then execute the __setup-commands.sh__
script from the root directory of this practice.

```shell
sh setup-commands.sh
```

Explore the models and their associations in the __db/models__ directory. The
`Cat` and `Toy` models have a many-to-many relationship, and are joined by the
`CatToy` model.

## Step 4: Find or calculate more aggregate values

In this step, you will implement the `GET /toys/:toyId` endpoint in the
__app.js__ file.

A. Find a toy with their associated cats.
B. Find or calculate the total amount of cats that the toy is associated with.
   Set it to a variable called `catCount`.
C. Find or calculate the total amount of cats that have a color of "Orange" and
   that the toy is associated with. Set it to a variable called
   `orangeCatCount`.
D. Find or calculate the percentage of cats that have a color of "Orange" and
   that the toy is associated with. Set it to a variable called
   `orangeCatPercentage`.
E. Return a JSON response with the toy, its associated cats, the count of cats
   associated with the toy, the count of orange cats associated with the toy,
   and the percentage of orange cats that the toy is associated.

Run `npm test test/bonus/step-4-spec.js` in the __server__ directory to test
this endpoint.

How many queries did you make to the database to get this data? (Hint: check
your server logs.) What is the time complexity of your JavaScript code in this
endpoint?

Here are some examples of a JSON response for a given request:

### GET /toys/5

```json
{
    "catCount": 3,
    "orangeCatCount": 2,
    "orangeCatPercentage": "67%",
    "id": 5,
    "name": "Shiny Mouse",
    "color": "Blue",
    "price": 7,
    "createdAt": "2023-01-18T21:33:31.000Z",
    "updatedAt": "2023-01-18T21:33:31.000Z",
    "Cats": [
        // data for each of the toy's cats
    ]
}
```

### GET /toys/1

```json
{
    "catCount": 7,
    "orangeCatCount": 0,
    "orangeCatPercentage": "0%",
    "id": 1,
    "name": "String",
    "color": "Yellow",
    "price": 1,
    "createdAt": "2023-01-18T21:33:31.000Z",
    "updatedAt": "2023-01-18T21:33:31.000Z",
    "Cats": [
        // data for each of the toy's cats
    ]
}
```

### GET /toys/11

```json
{
    "catCount": 5,
    "orangeCatCount": 1,
    "orangeCatPercentage": "20%",
    "id": 11,
    "name": "Relaxed",
    "color": "Purple",
    "price": 73,
    "createdAt": "2023-01-18T21:33:31.000Z",
    "updatedAt": "2023-01-18T21:33:31.000Z",
    "Cats": [
        // data for each of the toy's cats
    ]
}
```

### GET /toys/13

```json
{
    "catCount": 7,
    "orangeCatCount": 2,
    "orangeCatPercentage": "29%",
    "id": 13,
    "name": "Couple with heart",
    "color": "Blue",
    "price": 71,
    "createdAt": "2023-01-18T21:33:31.000Z",
    "updatedAt": "2023-01-18T21:33:31.000Z",
    "Cats": [
        // data for each of the toy's cats
    ]
}
```
