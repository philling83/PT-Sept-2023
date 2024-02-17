-- Your code here

-- tool name, price, quantity order it by name, then quantity

select tools.name, tools.price, quantity from purchases
join tools on (purchases.tool_id = tools.id)
where tools.name like 'Pipe%'
order by tools.name, quantity asc;
