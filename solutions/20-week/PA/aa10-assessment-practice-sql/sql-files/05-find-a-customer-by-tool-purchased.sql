-- Your code here

select customers.first_name, customers.last_name, customers.phone_number from purchases
join customers on (purchases.customer_id = customers.id)
join tools on (purchases.tool_id = tools.id)
where tools.name = 'Pipe Cutter'
order by purchases.id desc limit 1;
