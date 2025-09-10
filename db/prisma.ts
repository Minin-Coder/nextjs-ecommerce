import 'dotenv/config';
import { PrismaClient } from '@prisma/client';

// Get connection string with fallback
const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error('DATABASE_URL environment variable is not set');
}

// Create Prisma client with connection management
function createPrismaClient() {
  return new PrismaClient({ 
    datasources: {
      db: {
        url: connectionString,
      },
    },
    log: ['error', 'warn'],
  }).$extends({
    result: {
      product: {
        price: {
          compute(product: any) {
            return product.price.toString();
          },
        },
        rating: {
          compute(product: any) {
            return product.rating.toString();
          },
        },
      },
    },
  });
}

const globalForPrisma = globalThis as unknown as {
  prisma: ReturnType<typeof createPrismaClient> | undefined;
};

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
