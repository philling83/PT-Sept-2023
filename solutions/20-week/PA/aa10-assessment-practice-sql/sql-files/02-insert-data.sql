
insert into customers(first_name, last_name, phone_number)
VALUES
('John', 'Smith', 1111111111), -- 1
('Jane', 'Doe', 2222222222); -- 2

insert into departments(name)
VALUES
('Home & Garden'), -- 1
('Electrical'), -- 2
('Plumbing'); -- 3

insert into tools (name, price, department_id)
VALUES
('Snow shovel', 16.50, 1), -- 1
('Work light', 29.99, (select id from departments where name = 'Electrical')), -- 2
('Wheelbarrow', 89.99, 1), -- 3
('Pipe Wrench', 18.99, 3), -- 4
('Pipe Cutter', 36.36, 3), -- 5
('Rake', 15.45, 1), -- 6
('Women''s Gloves', 8.39, 1), -- 7
('Men''s Gloves', 8.39, 1); -- 8

insert into purchases (customer_id, tool_id, quantity)
VALUES
(1, 2, 1),
(1, 5, 2),
(2, 1, 3),
(2, 2, 1),
(2, 7, 1),
(2, 4, 1),
(2, 5, 1),
(1, 3, 3),
(1, 8, 2);
