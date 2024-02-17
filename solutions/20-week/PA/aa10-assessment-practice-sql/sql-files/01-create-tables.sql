-- This ensures that SQLite enforces FOREIGN KEY constraints
PRAGMA foreign_keys = 1;


-- custsomers can buy many tools, tools can be bought by many customers many to many
-- create a join table as purchases to relate customers and tools w/ quantity.

--department table can be related to many tools

-- tools table can only be related to one department

DROP table if exists purchases;
DROP table if exists customers;
DROP table if exists tools;
DROP table if exists departments;

create table customers(
    id integer PRIMARY KEY AUTOINCREMENT,
    first_name text,
    last_name text,
    phone_number numeric(10,0)
);

create table departments(
    id integer PRIMARY KEY AUTOINCREMENT,
    name text
);

create table tools(
    id integer PRIMARY KEY AUTOINCREMENT,
    name text,
    price float,
    department_id integer,

    FOREIGN KEY (department_id) REFERENCES departments(id) ON DELETE SET NULL
);

create table purchases(
    id integer PRIMARY KEY AUTOINCREMENT,
    customer_id integer,
    tool_id integer,
    quantity integer,

    FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE CASCADE,
    FOREIGN KEY (tool_id) REFERENCES tools(id) ON DELETE CASCADE
);
