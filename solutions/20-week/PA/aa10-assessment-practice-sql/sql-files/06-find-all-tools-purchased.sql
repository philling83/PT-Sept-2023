-- Your code here

-- name of tool, quantity purchased , order by tool name then quantity purchased least -> great


select tools.name, quantity from purchases
join tools on (purchases.tool_id = tools.id)
order by tools.name, quantity asc;
