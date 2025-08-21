import { PrismaClient } from '../lib/generated/prisma';
import sampleData from './sample-data';
import { v4 as uuidv4 } from 'uuid';


async function main() {
  const prisma = new PrismaClient();
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