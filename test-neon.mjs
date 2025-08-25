import 'dotenv/config';
import { Pool, neonConfig } from '@neondatabase/serverless';
import ws from 'ws';

neonConfig.webSocketConstructor = ws;

const connectionString = process.env.DATABASE_URL;
console.log('DATABASE_URL:', connectionString);

const pool = new Pool({ connectionString });

(async () => {
  try {
    const client = await pool.connect();
    const res = await client.query('SELECT 1');
    console.log('Connection successful:', res.rows);
    client.release();
  } catch (err) {
    console.error('Connection failed:', err);
  }
})();
