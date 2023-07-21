import pgPromise from 'pg-promise'
import dotenv from 'dotenv'

dotenv.config();

const pgp = pgPromise();

/*-------Convert dates to strings---------*/
const parseTimestampTZ = (val: any) => {
    return val === null ? null : new Date(val).toISOString();
  };
  
pgp.pg.types.setTypeParser(pgp.pg.types.builtins.TIMESTAMPTZ, parseTimestampTZ);
const db = pgp(process.env.REDDIT_CLONE_DB_URL || '');

export default db;