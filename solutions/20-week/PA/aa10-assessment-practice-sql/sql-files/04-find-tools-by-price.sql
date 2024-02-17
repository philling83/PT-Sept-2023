-- Your code here

-- name, price, between 14.67 and 20.09, ordered alphabetically

select name, price from tools
where price between 14.67 and 20.09
order by name;
