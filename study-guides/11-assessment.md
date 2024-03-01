# `Weeks 21 + 22 Study Guide`

## Topics

- Benchmark SQL statements
    - EXPLAIN QUERY PLAN
    - Avoiding N + 1 Queries
    - Creating Indexes
        - Can be used to create unique constraints across multiple columns
- Express
    - Understand how to define routes handlers (GET, POST, PUT/PATCH, DELETE)
    - How to parse information from req obj ie params, body-data
    - Query for information from database
    - Respond with the appropriate data
- ORMs (Sequelize)
    - The purpose of:
        - .sequelizerc
            - define paths to various Sequelize-related directories
        - sequelize-cli package
            - provides way to manage database thru command line
        - Migrations
            - manages changes to their database schema in a controlled and version-controlled manner
        - Models
            - responsible for defining the structure of the data, including the table name, columns, and their data types in a OOP manner
        - Seeders
            - scripts used to populate your database with initial data
    - Database Constraints vs Model Validations
    - Defining Associations
        - One relationship = Two associations
    - Querying Data
        - Eager / Lazy Loading
        - *No aggregates / pagination*

## Suggested Practices

- [Practice Assessment](https://open.appacademy.io/learn/js-py---pt-sep-2023-online/week-22---practice-assessment/readme) (once daily til Mon)
- [Intermediate Sequelize](https://open.appacademy.io/learn/js-py---pt-sep-2023-online/week-21---express-and-sequelize-pt--i/long-practice--intermediate-sequelize--1-)
- [Sequelize Foundations](https://open.appacademy.io/learn/js-py---pt-sep-2023-online/week-21---express-and-sequelize-pt--i/long-practice--sequelize-foundations)
- Individual Practices from Week21 Tues-Wed

## Helpful Tips

- Comment in *logging: false* in */config/database.js* to reduce output from testing
- Make sure any changes done through Migrations are also made in the Models ie additional columns, constraints, etc
