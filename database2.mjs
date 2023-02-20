import { config } from 'dotenv-safe';
import postgres from 'postgres';

config();

const sql = postgres();

console.log(
  await sql`
SELECT * FROM shop
  `,
);

//to disconnect after getting the database2
await sql.end();
