drop table if exists customers;
drop table if exists coffee_orders;

CREATE TABLE customers(
    id integer PRIMARY KEY AUTOINCREMENT,
    name varchar(40) not null,
    phone numeric(10,0) unique,
    email varchar(255) unique,
    points integer default 5 not null,
    created_at timestamp not null default current_time
);

CREATE TABLE coffee_orders(
    id integer PRIMARY KEY AUTOINCREMENT,
    is_redeemed boolean default 0,
    ordered_at timestamp not null default current_time
);


