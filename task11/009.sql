SELECT (SELECT name FROM users WHERE users.user_id = photo_post.user_id) AS 'name', creation_date, description 
FROM photo_post WHERE LENGTH(description)>15;
