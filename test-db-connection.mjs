import 'dotenv/config';
import { PrismaClient } from '@prisma/client';

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
  try {
    // Simple query to test connection
    const products = await prisma.product.findMany({ take: 1 });
    console.log('Connection successful! Sample product:', products[0] || 'No products found');
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
