# Sequelize-3 Bonus Practice Assessment

If you are finished with studying for the assessment and want an extra
practice, try this bonus phase out!

You will be asked to:

* Implement an API endpoint to return a single entry in the `WarehouseItems`
  table
* Implement an API endpoint to delete an entry in the `WarehouseItems` table

## Instructions

Given following API endpoint specifications, add the API endpoints to the
server in **app.js**.

The test specs can be found in the __test/bonus/phase-3-bonus-spec.js__ file.

Run `npm test test/bonus/phase-3-bonus-spec.js` and pass all the specs for this
bonus phase.

### GET /items/:name

Returns the entry in the `WarehouseItems` table that matches the `name` route
parameter.

Request:

* Method: `GET`
* Example URL: `/items/Paint`
* Headers: none
* Body: none

Success Response:

* Status Code: `200`
* Headers:
  * Content-Type: application/json
* Example Body:

  ```json
  {
    "id": 1,
    "name": "Paint",
    "price": 12.12,
    "quantity": 12,
    "isUsed": false
  }
  ```

Error Response:

When the `name` route parameter could not be matched with any entry in the
`WarehouseItems` table.

* Status Code: `404`
* Headers:
  * Content-Type: application/json
* Body:

  ```json
  {
    "message": "Warehouse Item not found"
  }
  ```

### DELETE /items/:id

Delete the entry in the `WarehouseItems` table that matches the `id` route
parameter.

Request:

* Method: `DELETE`
* Example URL: `/items/3`
* Headers: none
* Body: none

Success Response:

* Status Code: `200`
* Headers:
  * Content-Type: application/json
* Example Body:

  ```json
  {
    "message": "Successfully deleted"
  }
  ```

Error Response:

When the `id` route parameter could not be matched with any entry in the
`WarehouseItems` table.

* Status Code: `404`
* Headers:
  * Content-Type: application/json
* Body:

  ```json
  {
    "message": "Warehouse Item not found"
  }
  ```
