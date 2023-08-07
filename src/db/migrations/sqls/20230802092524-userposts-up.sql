/* Replace with your SQL commands */
ALTER TABLE "posts"
ADD COLUMN user_id varchar REFERENCES users(id) ON DELETE CASCADE,
ADD COLUMN parent_id varchar REFERENCES posts(id) ON DELETE CASCADE