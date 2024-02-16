-- Find the name of the cats who have an owner whose first name begins with an "H"

SELECT name
FROM cats
JOIN cat_owners
  ON (cat_owners.cat_id = cats.id)
JOIN owners
  ON (cat_owners.owner_id = owners.id)
WHERE
  owners.first_name LIKE 'H%';
