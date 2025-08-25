import { PrismaClient } from '../lib/generated/prisma';

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error('DATABASE_URL is not set. Check your .env file and environment.');
}

console.log('DATABASE_URL:', connectionString);

export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: connectionString,
    },
  },
});


