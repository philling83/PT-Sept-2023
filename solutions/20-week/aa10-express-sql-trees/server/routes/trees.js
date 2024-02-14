// Instantiate router - DO NOT MODIFY
const express = require('express');
const router = express.Router();
require('dotenv').config();

/**
 * BASIC PHASE 2, Step A - Instantiate SQLite and database
 *   - Database file: "DB_FILE" environment variable
 *   - Database permissions: read/write records in tables
 */

console.log(process.env.DB_FILE);
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(
    process.env.DB_FILE,
    sqlite3.OPEN_READWRITE
);

//! using .route! so all methods under this will have a url of /:id
router.route('/:id')
    /**
 * BASIC PHASE 3 - Retrieve one tree with the matching id
 *
 * Path: /:id
 * Protocol: GET
 * Parameter: id
 * Response: JSON Object
 *   - Properties: id, tree, location, height_ft, ground_circumference_ft
 */
    .get((req, res, next) => {
        const sql = `select * from trees where id = ?`
        const params = [req.params.id];

        db.get(sql, params, (err, row) => {
            if (err) {
                return next(err);
            }
            else {
                res.json(row);
            }
        })
    })
    /**
 * INTERMEDIATE PHASE 5 - DELETE a tree row from the database
 *
 * Path: /trees/:id
 * Protocol: DELETE
 * Parameter: id
 * Response: JSON Object
 *   - Property: message
 *   - Value: success
 */
    .delete((req, res, next) => {
        const sql = `delete from trees where id = ?`
        const params = [req.params.id];

        db.run(sql, params, (err, row) => {
            if (err) {
                return next(err);
            }
            else {
                res.json({
                    message : 'success'
                })
            }
        })
    })
    /**
 * INTERMEDIATE PHASE 6 - UPDATE a tree row in the database
 *
 * Path: /trees/:id
 * Protocol: PUT
 * Parameter: id
 * Response: JSON Object
 *   - Property: message
 *   - Value: success
 */
    .put((req, res, next) => {
        const { id, name, location, height, size } = req.body;
        if (Number(req.params.id) !== id) {
            const err = new Error('Ids do not match');
            return next(err);
        }

        const sql = `update trees
        set
            tree = ?,
            location = ?,
            height_ft = ?,
            ground_circumference_ft = ?
        where id = ?
        `;
        const params = [name, location, height, size, id];

        db.run(sql, params, (err, next) => {
            if (err) return next(err);
            else {
                res.json({
                    message: 'success'
                })
            }
        })
    })




router.route('/')
    /**
 * BASIC PHASE 2, Step B - List of all trees in the database
 *
 * Protocol: GET
 * Path: /
 * Parameters: None
 * Response: JSON array of objects
 *   - Object properties: height-ft, tree, id
 *   - Ordered by the height_ft from tallest to shortest
 */
    .get((req, res, next) => {
        const sql = 'SELECT height_ft, tree, id FROM trees ORDER BY height_ft DESC';
        const params = [];

        db.all(sql, params, (err, rows) => {
            if (err) {
                return next(err);
            }
            else {
                res.json(rows);
            }
        })
    })
    /**
 * INTERMEDIATE PHASE 4 - INSERT tree row into the database
 *
 * Path: /trees
 * Protocol: POST
 * Parameters: None
 * Response: JSON Object
 *   - Property: message
 *   - Value: success
 */
    .post((req, res, next) => {
        const sql = `insert into trees (tree, location, height_ft, ground_circumference_ft) values (?, ?, ?, ?)`;
        const { name, location, height, size } = req.body;
        const params = [name, location, height, size];

        db.run(sql, params, (err, rows) => {
            if (err) {
                return next(err);
            }
            else {
                res.json({
                    message: 'success'
                });
            }
        })
    })



// Export class - DO NOT MODIFY
module.exports = router;
