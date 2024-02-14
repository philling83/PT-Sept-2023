#S1W20D3

## Primary Key - PK

The unique identifier for the table. Never duplicated, auto-incremented.

- Most often integers, but don't have to be
- Integers allow for AUTOINCREMENT and fast lookup

## Foreign Key - FK

The identifier for **_another_** table.

- Syntax convention: <singular form of foreign table>_<PK of foreign table> eg. user_id
- Technically doesn't have to be the other table's PK
- References the PK in another table for easy lookup
- How we create this reference depends on the type of relationship

```sql
-- syntax
FOREIGN KEY (fk_name_in_this_table) REFERENCES otherTableName(pk_from_that_table)
```

## One-To-One

A single instance of data from one table is only related to a single instance of data from a different table.

Not very commonly used, but can be useful in rare cases.

Think: A single user may have a single choice of light mode or dark mode

## One-To-Many

A single instance of data from one table is related to multiple instances of data from a different table.

Think:

- One person can have many pets, each pet can only have one owner
- One classroom can have many desks, each desk can only belong to one classroom
- One tree can have many leaves, each leaf can only belong to one tree

```sql
CREATE TABLE trees (
  id INTEGER PRIMARY KEY AUTOINCREMENT
);

CREATE TABLE leaves (
  id INTEGER PRIMARY KEY AUTOINCREMNT,
  tree_id INTEGER,
  FOREIGN KEY (tree_id) REFERENCES trees(id)
);
```

## Many-To-Many

Multiple instances of data from one table can relate to multiple instance of data from a different table.

When we use this form of relationship, a **_join table_** is required. A join table only holds the PK's of each table to use as a reference.

Think:

- Every student belongs to many classrooms, every classroom has many students
- Every road has many cars driving on it, every car drives on many roads
- Every COD player can use many weapons, every weapon can be used by many players

```sql
CREATE TABLE elden_ring_players (
  id INTEGER PRIMARY KEY AUTOINCREMENT
);

CREATE TABLE weapons (
  id INTEGER PRIMARY KEY AUTOINCREMENT
);

CREATE TABLE player_weapon (
  player_id INTEGER,
  weapon_id INTEGER,
  FOREIGN KEY (player_id) REFERENCES elden_ring_players(id)
  FOREIGN KEY (weapon_id) REFERENCES weapons(id)
);
```

## Database Design - Normalization

Normalizing a database ensures it's being as efficient as possible. When designing a database, consider these rules

 TODO - add normalization examples from microsoft link

- First normal form

  - Remove repeats within a single table
  - Create different tables for each related piece of data
  - Set a PK for each table

  - For example, to track an inventory item that may come from two possible sources, an inventory record may contain fields for Vendor Code 1 and Vendor Code 2.
  What happens when you add a third vendor? Adding a field isn't the answer; it requires program and table modifications and doesn't smoothly accommodate a dynamic number of vendors. Instead, place all vendor information in a separate table called Vendors, then link inventory to vendors with an item number key, or vendors to inventory with a vendor code key.


- Second normal form

  - Create a different table for value sets that apply to multiple tables
  - Relate tables with FK

  - For example, consider a customer's address in an accounting system. The address is needed by the Customers table, but also by the Orders, Shipping, Invoices, Accounts Receivable, and Collections tables. Instead of storing the customer's address as a separate entry in each of these tables, store it in one place, either in the Customers table or in a separate Addresses table.
  - Or a coffee_orders table that holds the information about a coffee purchase, rather than storing that information on the customer table.

- Third normal form
  - Remove anything that isn't dependant on the PK
- For example, in an Employee Recruitment table, a candidate's university name and address may be included. But you need a complete list of universities for group mailings. If university information is stored in the Candidates table, there is no way to list universities with no current candidates. Create a separate Universities table and link it to the Candidates table with a university code key.

## Some basic SQL rules/guidelines

- Table names should be plural, joins tables should be singular

- Semi-colon required at the end of commands;

- Use single quotes instead of double quotes for string values

- No spaces in names, use_underscores instead of camelCase
