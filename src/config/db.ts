import pgPromise from 'pg-promise'

const pgp = pgPromise();
const db = pgp({
    host: process.env.REDDIT_CLONE_DATABSE_HOST,
    port: process.env.REDDIT_CLONE_DATABASE_PORT ? parseInt(process.env.REDDIT_CLONE_DATABASE_PORT) : undefined,
    database: process.env.REDDIT_CLONE_DATABASE_NAME,
    user: process.env.REDDIT_CLONE_DATABASE_USER,
    password: process.env.REDDIT_CLONE_DATABASE_PASSWORD
})

export default db;