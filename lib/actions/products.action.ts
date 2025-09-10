"use server";

import { prisma } from "@/db/prisma";
import { convertToPlainObject } from "../utils";
import { LATESR_PRODUCTS_LIMIT } from "../constant";

// get latest products
export async function getLatestProducts() {
   const data = await prisma.product.findMany({
        take: LATESR_PRODUCTS_LIMIT,
        orderBy : { createdAt: "desc" },
    });

    return data.map(product => ({
      ...product,
      price: product.price.toString(),
      rating: product.rating.toString(),
    }));
}


// Get single product by slug

export async function getProductBySlug(slug: string) {
    return await prisma.product.findFirst({
        where: { slug: slug },
    })
}
