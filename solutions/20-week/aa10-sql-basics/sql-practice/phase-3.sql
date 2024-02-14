-- rachel join loyalty program

insert into customers (name, phone)
VALUES
('Rachel', 1111111111);

-- rachel purchases a coffee

select points, name from customers where name = 'Rachel';

update customers
set points = 6
where name = 'Rachel';

insert into coffee_orders default values; -- 1

-- monica and phoebe join loyalty program

insert into customers (name, email, phone)
VALUES
('Monica', 'monica@friends.show', 2222222222),
('Phoebe', 'phoebe@friends.show', 3333333333);

-- phoebe purchases 3 coffees

select points, name from customers where name = 'Phoebe';

update customers
set points = 8
where name = 'Phoebe';

insert into coffee_orders default values; -- 2
insert into coffee_orders default values; -- 3
insert into coffee_orders default values; -- 4

-- Rachel purchase 4 coffess each

select points, name from customers where name = 'Rachel';

update customers
set points = 10
where name = 'Rachel';

insert into coffee_orders default values; -- 5
insert into coffee_orders default values; -- 6
insert into coffee_orders default values; -- 7
insert into coffee_orders default values; -- 8

-- Monica purchases 4 coffees

select points, name from customers where name = 'Monica';

update customers
set points = 9
where name = 'Monica';

insert into coffee_orders default values; -- 9
insert into coffee_orders default values; -- 10
insert into coffee_orders default values; -- 11
insert into coffee_orders default values; -- 12

-- Monica wants to check her points
select points, name from customers where name = 'Monica';

-- rachel wants to redeem points for coffee if she has enough.
select points, name from customers where name = 'Rachel';

update customers
set points = 0
where name = 'Rachel';

insert into coffee_orders (is_redeemed)
values (1); --13

insert into customers (name, email)
VALUES
('Joey', 'joey@friends.show'),
('Chandler', 'chandler@friends.show'),
('Ross', 'ross@friends.show');

-- Ross purchase six coffees

select points, name from customers where name = 'Ross';

update customers
set points = 11
where name = 'Ross';

insert into coffee_orders default values; -- 14
insert into coffee_orders default values; -- 15
insert into coffee_orders default values; -- 16
insert into coffee_orders default values; -- 17
insert into coffee_orders default values; -- 18
insert into coffee_orders default values; -- 19

-- Monica purchase three coffees

select points, name from customers where name = 'Monica';

update customers
set points = 12
where name = 'Monica';

insert into coffee_orders default values; -- 20
insert into coffee_orders default values; -- 21
insert into coffee_orders default values; -- 22

-- phoebe checks points and redeems if enough if not she will buy a coffee

select points, name from customers where name = 'Phoebe';

update customers
set points = 9
where name = 'Phoebe';

insert into coffee_orders default values; -- 23

-- Ross demands a refund for the last 2 coffees, remove 2 points

select points, name from customers where name = 'Ross';

update customers
set points = 9
where name = 'Ross';

delete from coffee_orders where id = 18;
delete from coffee_orders where id = 19;

-- Joey purchases 2 coffees

select points, name from customers where name = 'Joey';

update customers
set points = 7
where name = 'Joey';

insert into coffee_orders default values; -- 24
insert into coffee_orders default values; -- 25

-- monica check points redeem coffee if enough else buy coffee

select points, name from customers where name = 'Monica';

update customers
set points = 2
where name = 'Monica';

insert into coffee_orders (is_redeemed)
VALUES (1); -- 26

delete from customers where name = 'Chandler';

-- Ross checks points for redeem if enough else buy

select points, name from customers where name = 'Ross';

update customers
set points = 10
where name = 'Ross';

insert into coffee_orders default values; -- 27

-- Joey Redeem ? redeem : buy

select points, name from customers where name = 'Joey';

update customers
set points = 8
where name = 'Joey';

insert into coffee_orders default values; --28

-- phoebe change email

update customers
set email = 'p_as_in_phoebe@friends.show'
where name = 'Phoebe';
