# Practice: Lazy Loading Aggregate Data in Sequelize

In this short practice, you will be using lazy loading to get aggregate data
using Sequelize.

## Getting started

Download starter.

Execute the __setup-commands.sh__ script from the root directory of this
practice.

```shell
sh setup-commands.sh
```

View the contents of the script to see the commands that are executed. View the
results in the terminal to confirm that setup was successful and the `Cats`,
`Toys`, and `CatToys` tables exist in your database and you have seed data
present. These tables will be very large!

Explore the models and their associations in the __db/models__ directory. The
`Cat` and `Toy` models have a many-to-many relationship, and are joined by the
`CatToy` model.

`cd` into the __server__ folder.

Start your development server using `npm run dev`.

In this practice you will be implementing the endpoints in __app.js__ which will
query your database for aggregate values from the `Cats` and `Toys` tables. You
will find or calculate the aggregate data values for:

- the number of entries/records/rows in a given table
- the minimum value of all the given column values
- the maximum value of all the given column values
- the sum of all the given column values
- the average value of all the given column values

## STEP 1: Find the count, min price, max price, and total price of all toys

You will work within the `GET /toys-summary` route handler and define four
variables according to the specifications below. You will use
[Sequelize's aggregate built-in methods] to find the following aggregate data
values:

- Set the `count` variable to evaluate to the total number of toy records

- Set the `minPrice` variable to evaluate to the minimum price of all the toy
  records

- Set the `maxPrice` variable to evaluate to the maximum price of all the toy
  records

- Set the `sumPrice` variable to evaluate to the sum of all of the toy prices

Run `npm test test/step-1-spec.js` in the __server__ directory to test this
endpoint.

You can also test that your endpoint returns the correct aggregate data values
by navigating to the `/toys-summary` endpoint in your browser. If you
implemented the aggregate methods correctly, the JSON returned should look like
this:

```json
{
    "count": 10056, 
    "minPrice": 1,
    "maxPrice": 100,
    "sumPrice": 543262,
}
```

How many queries did you make to the database to get this data? (Hint: check
your server logs.) What is the time complexity of your JavaScript code in this
endpoint?

## STEP 2: Find a cat with their associated toys, and aggregate toy data

In this step, you will work within the `GET /cats/:catId` route handler.
The goal of this step is to eager load the data for a single cat, with all of
its associated toy data, as well as calculate aggregate data about the toys.

Most of the route handler has already been created for you. If you navigate to a
cat's page, such as `/cats/7`, you should already see the cat's data as well as
the associated data for each of its four toys within the `cat` key.

You will need to calculate three aggregate data values according to the
specifications below:

- Set the `toyCount` variable to evaluate to the the total amount of toys that
  the cat is associated with

- Set the `toyTotalPrice` variable to evaluate to the total price of all the
  toys that the cat is associated with

- Set the `toyAvgPrice` variable to evaluate to the average price of all the
  toys that the cat is associated with

Run `npm test test/step-2-spec.js` in the __server__ directory to test this
endpoint.

You can also test that your endpoint returns the correct aggregate data values
by navigating to the `/cats/7` endpoint. The JSON should look like this:

```json
{
    "toyCount": 4,
    "toyTotalPrice": 92,
    "toyAvgPrice": 23,
    "id": 7,
    "name": "Keturah",
    "color": "White",
    "breed": "Arabian Mau",
    "createdAt": "2022-02-02T15:08:06.000Z",
    "updatedAt": "2022-02-02T15:08:06.000Z",
    "Toys": [
        {
            "id": 4783,
            "name": "Golf",
            "color": "Fuchsia",
            "price": 53,
            "createdAt": "2022-02-02T15:08:07.000Z",
            "updatedAt": "2022-02-02T15:08:07.000Z",
            "CatToy": {
                "catId": 7,
                "toyId": 4783,
                "createdAt": "2022-02-02T15:08:07.000Z",
                "updatedAt": "2022-02-02T15:08:07.000Z",
                "CatId": 7,
                "ToyId": 4783
            }
        },
        // ... the rest of this cat's toys
    ]
}
```

How many queries did you make to the database to get this data? (Hint: check
your server logs.) What is the time complexity of your JavaScript code in this
endpoint?

## STEP 3: Observe the difference between `...cat` and `...cat.toJSON()`

In the `GET /cats/:catId` route handler that you just changed, look at the way
that the cat record is formatted as JSON for the return. The `.toJSON()` method
was used on an instance of the `Cat` model before it was spread using the
rest operator (`...`). The rest operator (`...`) is used in this case to spread
out the attributes of the `cat` instance object as key-value pairs in the object
returned from the route handler.

Remove the `.toJSON()` on the `cat`, then navigate to `/cats/7` again. What do
you see?

You should have gotten a `TypeError`. To eliminate this error while still
spreading out the attributes of the cat instance object, the
[`toJSON()` Sequelize method] can be used. The `.toJSON()` method more easily
allows the instance attributes to be represented in JSON format.

## Congratulations!

You are now able to write Sequelize queries to get common aggregate data values,
calculate aggregate values in JavaScript, and display those values in your
endpoints.

## Submission

Submit your work.

1. Delete the `node_modules` folder in the __server__ directory
2. Zip up the project folder
3. Submit the zip file

[Sequelize's aggregate built-in methods]: https://sequelize.org/docs/v7/core-concepts/model-querying-basics/#utility-methods
[`toJSON()` Sequelize method]: https://sequelize.org/docs/v6/core-concepts/model-instances/#note-logging-instances