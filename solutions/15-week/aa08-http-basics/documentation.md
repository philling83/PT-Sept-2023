============================================
============================================
## EXAMPLE DOCUMENTATION
### Ask for the Home Page
#### Step 1
Predicted Request components:
- Method: GET
- URL: /
- Headers: none
- Body: none

Predicted Response components:
- Status Code: 200
- Headers:
  - Content-Type: text/html
- Body: HTML page with navigation links to other pages

#### Step 2
In your browser open the chrome dev tools, navigate to [http://localhost:5000] and make a GET request for the Home Page (type "/" into the URL after 5000 and hit "enter").
Explore the "network" tab and find where you can compare your predicted request/response components to the actual components.

#### Step 3
If your prediction was wrong, try to understand why it was incorrect and then update your documentation to the correct request/response components.

Congratulations! You have performed a GET request to / showing the home page of our e-commerce
website. Move on to the next request/response documentation.

* Note
    - Headers contain many keys, but for this exercise focus on **Content-Type** and **Location**.
 
=============================================
=============================================

### Ask for a page that doesn't exist

Request components:

- Method: GET
- URL: /does-not-exist
- Headers: none
- Body: none

Response components:

- Status code: 404
- Headers:
  - Content-Type: text/html
- Body: HTML page containing "Page Not Found"

### Ask for the products list page

Request components:

- Method: GET
- URL: /products
- Headers: none
- Body: none

Response components:

- Status code: 200
- Headers:
  - Content-Type: text/html
- Body: HTML page containing links to details of each product listed

### Ask for the product detail page

Here's an example product on the server:

| detail      | value                                                      |
| ----------- | ---------------------------------------------------------- |
| productId   | 1                                                          |
| name        | "Facial Cleansing Brush"                                   |
| description | "Reaches deep pores to cleanse oil, dirt, and blackheads." |
| price       | 23.99                                                      |
| categories  | "beauty", "electronics"                                    |

Request components:

- Method: GET
- URL: /products/:productId
- Headers: none
- Body: none

Response components:

- Status code: 200
- Headers:
  - Content-Type: text/html
- Body: HTML page containing the details of the product with the specified id

### Ask for the create new product page

Request components:

- Method: GET
- URL: /products/new
- Headers: none
- Body: none

Response components:

- Status code: 200
- Headers:
  - Content-Type: text/html
- Body: HTML page containing form for creating a new product

### Submit a new product

Remember, for a traditional HTML web server, whenever a successful `POST`
request is sent to the server, the server should respond with a redirection to
a page.

After successful submission, user should be looking at the product detail page.

Here are the categories on the server:

| tag         | name           |
| ----------- | -------------- |
| grocery     | Grocery        |
| electronics | Electronics    |
| beauty      | Beauty         |
| toys-games  | Toys and Games |
| health      | Health         |
| furniture   | Furniture      |
| clothing    | Clothing       |

* Note: In Chrome dev tools, if the "body" of a request exists, it will appear 
in the network tab as "payload".

Request components:

- Method: POST
- URL: /products
- Headers:
  - Content-Type: application/x-www-form-urlencoded
- Body: information about the product
  - name
  - description
  - price
  - categories

Response components:

- Status code: 302
- Headers:
  - Location: /products/:productId
- Body: none

### Ask for the edit product page

Request components:

- Method: GET
- URL: /products/:productId/edit
- Headers: none
- Body: none

Response components:

- Status code: 200
- Headers:
  - Content-Type: text/html
- Body: HTML page containing form for editing an existing product

### Submit an edit for an existing product

After successful submission, user should be looking at the product detail page.

Request components:

- Method: POST
- URL: /products/:productId
- Headers:
  - Content-Type: application/x-www-form-urlencoded
- Body: information about the product
  - name
  - description
  - price
  - categories

Response components:

- Status code: 302
- Headers:
  - Location: /products/:productId
- Body: none

### Submit a delete for an existing product

After successful submission, user should be looking at the products list page.

Request components:

- Method: POST
- URL: /products/:productId/delete
- Headers: none
- Body: none

Response components:

- Status code: 302
- Headers:
  - Location: /products
- Body: none

### Submit a new review for a product

After successful submission, user should be looking at the product detail page.

Here's an example review on the server:

| detail     | value                  |
| ---------- | ---------------------- |
| reviewId   | 1                      |
| comment    | "I love this product!" |
| starRating | 5                      |
| productId  | 1                      |

Request components:

- Method: POST
- URL: /products/:productId/reviews
- Headers:
  - Content-Type: application/x-www-form-urlencoded
- Body: information about the review
  - comment
  - starRating

Response components:

- Status code: 302
- Headers:
  - Location: /products/:productId
- Body: none

### Ask for the edit review page for a product

Request components:

- Method: GET
- URL: /reviews/:reviewId/edit
- Headers: none
- Body: none

Response components:

- Status code: 200
- Headers:
  - Content-Type: text/html
- Body: HTML page containing form for editing an existing review

### Submit an edit for an existing review

After successful submission, user should be looking at the product detail page.

Request components:

- Method: POST
- URL: /reviews/:reviewId
- Headers:
  - Content-Type: application/x-www-form-urlencoded
- Body: information about the review
  - comment
  - starRating

Response components:

- Status code: 302
- Headers:
  - Location: /products/:productId
- Body: none

### Submit a delete for an existing review

After successful submission, user should be looking at the product detail page.

Request components:

- Method: POST
- URL: /reviews/:reviewId/delete
- Headers: none
- Body: none

Response components:

- Status code: 302
- Headers:
  - Location: /products/:productId
- Body: none

### Ask for all the products in a particular category by tag of the category

Request components:

- Method: GET
- URL: /categories/:categoryTag/products
- Headers: none
- Body: none

Response components:

- Status code: 200
- Headers:
  - Content-Type: text/html
- Body: HTML page containing a list of products that have the category's tag
  specified

### Ask for the best-selling product

Look for clues in the HTML pages from the prior responses for what the route should be.

Request components:

- Method: GET
- URL: /products/best-selling
- Headers: none
- Body: none

Response components:

- Status code: 200
- Headers:
  - Content-Type: text/html
- Body: HTML page highlighting the best-selling product on the site