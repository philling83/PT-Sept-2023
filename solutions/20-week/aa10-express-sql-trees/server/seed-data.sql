-- BASIC PHASE 1A - DROP and CREATE table
drop table if exists trees;

create table trees(
    id integer primary key AUTOINCREMENT,
    tree varchar(32),
    location varchar(64),
    height_ft float,
    ground_circumference_ft float
);

-- BASIC PHASE 1B - INSERT seed data

insert into trees (tree, location, height_ft, ground_circumference_ft)
VALUES
('General Sherman', 'Sequoia National Park', 274.9, 102.6),
('General Grant', 'Kings Canyon National Park', 268.1, 102.6),
('President', 'Sequoia National Park', 240.9, 93.0),
('Lincoln', 'Sequoia National Park', 255.8, 98.3),
('Stagg', 'Private Land', 243.0, 109.0);
