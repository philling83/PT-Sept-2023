-- Find names of the cats whose owners are both George Beatty and Melynda Abshire, or just George Beatty, or just Melynda Abshire

SELECT DISTINCT cats.name
FROM cats
JOIN cat_owners ON (cats.id = cat_owners.cat_id)
JOIN owners ON (owners.id = cat_owners.owner_id)
WHERE
  (owners.first_name = 'George' AND owners.last_name = 'Beatty') OR (owners.first_name = 'Melynda' AND owners.last_name = 'Abshire');
