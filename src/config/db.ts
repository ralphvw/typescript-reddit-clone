import pgPromise from 'pg-promise'
import dotenv from 'dotenv'

dotenv.config();

const pgp = pgPromise();
const db = pgp(process.env.REDDIT_CLONE_DB_URL || '');

export default db;