PRAGMA foreign_keys = 1;
DROP TABLE IF EXISTS leaves;
DROP TABLE IF EXISTS trees;


CREATE TABLE trees (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(40)
);

CREATE TABLE leaves (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  tree_id INTEGER,
  -- referencing the specific tree that it belongs to.
  FOREIGN KEY (tree_id) REFERENCES trees(id)
);

-- adding trees into table
INSERT INTO trees (name)
VALUES
('PINE'), -- id 1
('BIRCH'), -- id 2
('MAPLE'); -- id 3

-- view created trees
select * from trees;

-- adding rows to leaves table, but associating them to a specific tree in the trees table.
INSERT INTO leaves (tree_id)
VALUES
(1), -- pine leaf
(1),
(1),
(2), -- birch leaf
(2),
(3); -- maple leaf

-- view leaves and their assocition to trees

select * from leaves;
