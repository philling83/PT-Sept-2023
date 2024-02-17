PRAGMA foreign_keys=on; -- Turns on foreign key support in SQLite3

-- Create / re-create tables
DROP TABLE IF EXISTS toys;
DROP TABLE IF EXISTS cats;

CREATE TABLE cats (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  birth_year INTEGER
);

CREATE TABLE toys (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  cat_id INTEGER,
  FOREIGN KEY (cat_id) REFERENCES cats(id) ON DELETE CASCADE
);

-- Create/recreate BONUS tables
DROP TABLE IF EXISTS toys_backup;
DROP TABLE IF EXISTS cats_backup;

CREATE TABLE cats_backup (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  birth_year INTEGER
);

CREATE TABLE toys_backup (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  cat_id INTEGER,
  FOREIGN KEY (cat_id) REFERENCES cats_backup(id) ON DELETE CASCADE
);

-- Seed Data
INSERT INTO cats
  (name, birth_year)
VALUES
  ('Smudge', 2014),
  ('Molly', 2015),
  ('Lucky', 2016),
  ('Bella', 2020),
  ('Tiger', 2012),
  ('Oscar', 2010),
  ('Garfield', 2009),
  ('Crookshanks', 2017);

INSERT INTO toys
  (cat_id, name)
VALUES
  (1, 'Catnip Mouse'),
  (2, 'Feather Wand'),
  (2, 'Scratcher'),
  (2, 'Laser Pointer'),
  (3, 'Chew Toy'),
  (4, 'Tunnel'),
  (4, 'Flopping Fish'),
  (5, 'Crinkle Ball'),
  (7, 'Cheetos'),
  (8, 'Yarn');

-- q1

-- join
-- select toys.name from toys
-- join cats on (cats.id = toys.cat_id)
-- where cats.name = 'Garfield';

-- sub query

select name from toys where cat_id = (select id from cats where name = 'Garfield');

-- q2

insert into toys (name, cat_id)
values
('Pepperoni', (select id from cats where name = 'Garfield'));


select name from toys where cat_id = (select id from cats where name = 'Garfield');

-- b1
insert into toys (name, cat_id)
select 'Cat Bed', id
from cats
where birth_year < 2013;

select cats.name, toys.name from toys
join cats on (cats.id = toys.cat_id)
where toys.name = 'Cat Bed';

-- b2

insert into cats_backup
select *
from cats;

select * from cats_backup;
select * from cats;

insert into toys_backup
select *
from toys;

select * from toys_backup;
select * from toys;
