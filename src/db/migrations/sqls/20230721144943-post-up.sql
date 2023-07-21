/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS "posts" (
    "id" varchar PRIMARY KEY NOT NULL,
    "text" varchar,
    "created_at" timestamptz DEFAULT (now()),
    "updated_at" timestamptz DEFAULT (now())
)