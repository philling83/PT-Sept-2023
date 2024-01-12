# Exercise: HTML Web Server RESTful Endpoints

In this exercise, you will be determining RESTful endpoints for an HTML web
server based on the given scenarios.

## Set up

Clone the exercise from the [starter].

## Conventions for RESTful Endpoints for an HTML web server

The following tables show the conventions for RESTful Endpoints of a traditional
HTML web server:

| Path Pattern                     | HTTP Verb | Meaning                                                               |
| -------------------------------- | --------- | --------------------------------------------------------------------- |
| /resource-name                   | GET       | Index page: Get an HTML-based list of the resource                    |
| /resource-name/new               | GET       | Create form page: Show a form to create a new record for the resource |
| /resource-name                   | POST      | Submit create form: Create a new record for the resource              |
| /resource-name/:record-id        | GET       | Detail page: See the details of the specified record                  |
| /resource-name/:record-id/edit   | GET       | Edit form page: Show the edit form for the specified record           |
| /resource-name/:record-id        | POST      | Submit edit form: Update the specified record                         |
| /resource-name/:record-id/delete | POST      | Submit delete form: Delete the specified record                       |

For Nested Resources:

| Path Pattern                                  | HTTP Verb | Meaning                                                                                                      |
| --------------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------ |
| /resource-name/:record-id/nested-resource     | GET       | Index page: Get an HTML-based list of the nested resource related to the specified record                    |
| /resource-name/:record-id/nested-resource/new | GET       | Create form page: Show a form to create a new record for the nested resource related to the specified record |
| /resource-name/:record-id/nested-resource     | POST      | Submit create form: Create a new record for the nested resource related to the specified record              |
| /nested-resource/:nested-record-id            | GET       | Detail page: See the details of the specified nested resource's record                                       |
| /nested-resource/:nested-record-id/edit       | GET       | Edit form page: Show the edit form for the specified nested resource's record                                |
| /nested-resource/:nested-record-id            | POST      | Submit edit form: Update the specified nested resource's record                                              |
| /nested-resource/:nested-record-id/delete     | POST      | Submit delete form: Delete the specified nested resource's record                                            |

## Instructions

Determine an endpoint for each of the following use cases. Don't worry about
getting it perfect as this is just practice!

For example, to access the home page of a site, the RESTful endpoint could be
`GET /` or `GET /home`.

Remember, HTML web servers should only accept requests with methods of `GET` and
`POST` only! They cannot accept `PUT`, `PATCH` or `DELETE` requests.

- Access the home page
  - `GET /`
  - `GET /home`
- Submit a contact form
  - POST /contact, /contact-us, /contacts
- Access the posts page
  - GET /posts
- Access the edit page for a post
  - GET /posts/:postId/edit
- Access the create page for a post
  - GET /posts/new, /posts/create
- Create a new user (sign up)
  - POST /users, /signup, /sign-up
- Log In
  - POST /users/login, /login, /log-in, /session
- Log Out
  - POST /users/logout, /logout, /log-out, /session/delete
- Access the comments for a post page
  - GET /posts/:postId/comments
- Access the create page for a post's comment
  - GET /posts/:postId/comments/new, /posts/:postId/comments/create
- Access the edit page for a comment
  - GET /comments/:commentId/edit, /posts/:postId/comments/:commentId/edit
- Submit a like for a post
  - POST /posts/:postId/like(s)
- Delete a like for a post
  - POST /posts/:postId/like(s)/delete
- Access all the posts of a user
  - GET /users/:userId/posts
- Submit a search on posts
  - POST /posts/search?title=chicken

[starter]: https://github.com/appacademy/practice-for-week-08-html-web-server-restful-endpoints
