import 'dotenv/config';
import { Pool, neonConfig } from '@neondatabase/serverless';
import { PrismaNeon } from '@prisma/adapter-neon';
import { PrismaClient } from '../lib/generated/prisma';
import ws from 'ws';
import sampleData from './sample-data';
import { v4 as uuidv4 } from 'uuid';


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
  await prisma.product.deleteMany();

  for (const product of sampleData.products) {
    await prisma.product.create({
      data: {
        ...product,
        id: uuidv4(),
        banner: product.banner ?? null,
        createdAt: new Date(),
      },
    });
  }

  console.log("database seeded successfully");
}

main();