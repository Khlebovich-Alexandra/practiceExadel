SELECT users.name FROM users, photo_post WHERE users.user_id = photo_post.user_id
GROUP BY users.user_id
HAVING COUNT(photo_post.user_id) >= 3;

/*SELECT * FROM users;*/