PRAGMA foreign_keys = 1;
DROP TABLE IF EXISTS elden_ring_players;
DROP TABLE IF EXISTS weapons;

CREATE TABLE elden_ring_players (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(40)
);

CREATE TABLE weapons (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(40)
);

-- join table created to hold associations between many players and many weapons
CREATE TABLE player_weapon (
  player_id INTEGER,
  weapon_id INTEGER,
  FOREIGN KEY (player_id) REFERENCES elden_ring_players(id)
  FOREIGN KEY (weapon_id) REFERENCES weapons(id)
);

INSERT INTO elden_ring_players (name)
VALUES
('Alan'), -- id 1
('Phil'), -- id 2
('someScrub'); -- id 3

INSERT INTO weapons (name)
VALUES
('Long Sword'), -- id 1
('Battle Axe'), -- id 2
('Claymore'), -- id 3
('Rapier'); -- id 4

-- insert rows into join table to create  associations between players and weapons.

INSERT INTO player_weapon (player_id, weapon_id)
VALUES
-- player Alan has a long sword and a claymore
(1, 1),
(1, 3),
-- player Phil has a Battle Axe and a claymore
(2, 2),
(2, 3),
-- player someScrub has a rapier
(3, 4);

select * from elden_ring_players;
select * from weapons;

select * from player_weapon;

-- sneak peak on join tables
select elden_ring_players.name, weapons.name from player_weapon
join elden_ring_players on (player_weapon.player_id = elden_ring_players.id)
join weapons on (player_weapon.weapon_id = weapons.id);
