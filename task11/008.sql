SELECT (SELECT name FROM users WHERE user_id = 2) AS 'name', creation_date, description FROM photo_post 
WHERE user_id = 2 ORDER BY CREATION_DATE ASC;