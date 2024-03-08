-- Balance Transfer Transactions
-- Rollback SQL Statements
BEGIN TRANSACTION;

  UPDATE accounts
  SET balance = balance + 200
  WHERE (
      first_name = 'Rose'
      AND last_name = 'Tyler'
    );
    -- Rose-Tyler balance : 200
  UPDATE accounts
  SET balance = balance - 200
  WHERE (
      first_name = 'Amy'
      AND last_name = 'Pond'
    );
    -- Amy Pond balance : -200
  SAVEPOINT amy_to_rose;
  -- SAVE
  -- Rose Tyler balance: +200
  -- Amy Pond balance : - 200

  UPDATE accounts
  SET balance = balance + 200
  WHERE (
      first_name = 'Rose'
      AND last_name = 'Tyler'
    );
    -- Rose Tyler : 200 + 200 = 400
  UPDATE accounts
  SET balance = balance - 200
  WHERE (
      first_name = 'Martha'
      AND last_name = 'Jones'
    );
    -- Martha Jones : - 200
  SAVEPOINT martha_to_rose;
    -- Rose Tyler : 400
    -- Martha Jones : - 200

  UPDATE accounts
  SET balance = balance + 200
  WHERE (
      first_name = 'Rose'
      AND last_name = 'Tyler'
    );
    -- Rose Tyler : 400 + 200 = 600

  UPDATE accounts
  SET balance = balance - 200
  WHERE (
      first_name = 'Donna'
      AND last_name = 'Noble'
    );
    -- Donna Noble : - 200
  SAVEPOINT donna_to_rose;
  -- Rose Tyler : 600
  -- Donna Noble : - 200

  ROLLBACK TO martha_to_rose;
  -- Rose Tyler : 600 -> 400
  -- Donna Noble : + 200

  UPDATE accounts
  SET balance = balance + 200
  WHERE (
      first_name = 'Rose'
      AND last_name = 'Tyler'
    );
    --Rose Tyler : 400 + 200 = 600
  UPDATE accounts
  SET balance = balance - 200
  WHERE (
      first_name = 'River'
      AND last_name = 'Song'
    );
    --River Song : - 200
  SAVEPOINT river_to_rose;
  -- Rose Tyler : 600
  -- River Song : - 200

COMMIT;

-- Check results of SQL statements
SELECT *
FROM accounts;

-- After executing:
-- | `id` | `first_name` | `last_name` | `balance` |
-- | ---- | ------------ | ----------- | --------- |
-- | 1    | Amy          | Pond        | 2300      |
-- | 2    | Rose         | Tyler       | 1200      |
-- | 3    | Martha       | Jones       | 2800      |
-- | 4    | Donna        | Nobles      | 200       |
-- | 5    | River        | Song        | 1000      |
