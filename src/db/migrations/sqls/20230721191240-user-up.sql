/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS "users" (
    "id" varchar PRIMARY KEY NOT NULL,
    "username" varchar,
    "password" varchar,
    "created_at" timestamptz DEFAULT (now()),
    "updated_at" timestamptz DEFAULT (now())
)