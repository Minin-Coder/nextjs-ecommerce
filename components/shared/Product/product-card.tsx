import Link from "next/link";
import Image from "next/image";
import ProductPrice from "./Product-price";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Product } from "@/types";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card className="w-full max-w-sm ">
      <CardHeader className="p-0 items-center">
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.images[0]}
            alt={product.name}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto", borderRadius: "0.5rem" }}
            priority={true}
          />
        </Link>
      </CardHeader>
      <CardContent className="p-4 grid gap-4">
        <div className="text-xs">{product.brand}</div>
        <Link
          style={{ textDecoration: "none" }}
          href={`/product/${product.slug}`}
          className="link-dark"
        >
          <h2 className="lgBlock text-sm font-medium m-0">
            {product.name}
          </h2>
        </Link>
        <div className="flex-between gap-4">
          <p>{product.rating?.toString()} Stars</p>
          { product.stock > 0 ? (
            <ProductPrice value={Number(product.price)} />
          ) : (
            <p className="text-destructive">Out Of Stock</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
