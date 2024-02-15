-- This ensures that SQLite enforces FOREIGN KEY constraints
PRAGMA foreign_keys = 1;
DROP TABLE IF EXISTS instruments;
DROP TABLE IF EXISTS musicians;
DROP TABLE IF EXISTS bands;

CREATE TABLE bands (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(100)
);
CREATE TABLE musicians (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100),
  band_id INTEGER not null,

  FOREIGN KEY (band_id) REFERENCES bands(id)
);
CREATE TABLE instruments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  type VARCHAR(100) NOT NULL
);

create table musician_instrument(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  musician_id integer not null,
  instrument_id integer not null,

  foreign key (musician_id) REFERENCES musicians(id)
  foreign key (instrument_id) REFERENCES instruments(id)
);


insert into bands (name) values ('cool-band'); -- 1

insert into musicians (first_name, last_name, band_id)
values
('guy', 'dude', 1), -- 1
('cool', 'man', 1), -- 2
('Alan', 'Deleon',1); -- 3


insert into instruments (type)
VALUES
('guitar'), -- 1
('bass'), -- 2
('drums'); -- 3


insert into musician_instrument(musician_id, instrument_id)
VALUES
(1, 3),
(1, 2),
(2, 2),
(3, 1),
(3, 2);
