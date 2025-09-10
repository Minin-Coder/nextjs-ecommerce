import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import sampleData from './sample-data';
import { v4 as uuidv4 } from 'uuid';

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error('DATABASE_URL is not set. Check your .env file and environment.');
}
console.log('DATABASE_URL:', connectionString);

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: connectionString,
    },
  },
});

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