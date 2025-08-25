export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'Prostore';
export const APP_DESCRIPTION = process.env.NEXT_PUBLIC_APP_DESCRIPTION || 'A modern e-commerce platform bult with Next.js';
let url = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000';
try {
  url = new URL(url).toString();
} catch {
  url = 'http://localhost:3000';
}
export const SERVER_URL = url;

export const LATESR_PRODUCTS_LIMIT = Number(process.env.LATESR_PRODUCTS_LIMIT) || 4;
