import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const con = process.env.NODE_ENV === 'production' ? process.env.DATABASE_URL : process.env.TEST_DB_URL;

const pool = new Pool({ connectionString: con });
export default {
  query(text, params) {
    try {
      return pool.query(text, params);
    } catch (err) {
      return err;
    }
  },
};
