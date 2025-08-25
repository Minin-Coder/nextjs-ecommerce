const { PrismaClient } = require('./lib/generated/prisma');
const { PrismaNeon } = require('@prisma/adapter-neon');
const { Pool, neonConfig } = require('@neondatabase/serverless');
const ws = require('ws');

neonConfig.webSocketConstructor = ws;
const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error('DATABASE_URL is not set. Check your .env file and environment.');
}
console.log('DATABASE_URL:', connectionString);
const pool = new Pool({ connectionString });
const adapter = new PrismaNeon(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  const products = await prisma.product.findMany();
  console.log(products);
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
