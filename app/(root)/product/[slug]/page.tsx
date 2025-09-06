import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getProductBySlug } from "@/lib/actions/products.action";
import { notFound } from "next/navigation";
import ProductPrice from "@/components/shared/Product/Product-price";

const ProductDetailsPage = async (props: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await props.params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  return (
    <>
      <section>
        <div className="grid grid-cols md:grid-cols-5">
          {/*Images Column*/}
          <div className="col-span-2">{/*Images component*/}</div>
          <div className="col-span-2 p-5">
            <div className="flex flex-col gap-5">
                <p className="m-0">
                    {product.brand} {product.category}
                </p>
                <h1 className="h3-bold m-0">{product.name}</h1>
                <p className="m-0">{product.rating} of {product.numReviews} Reviews</p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                    <ProductPrice value={Number(product.price)} className="w-24 rounded-full bg-green-100 text-green-700 px-5 py-2 text-center" />
                </div>
            </div>
            <div className="mt-10">
                <p className="font-semibold">Description:</p>
                <p>{product.description}</p>
            </div>
          </div>
          {/*Action Column*/}
          <div>
            <Card >
                <CardContent className="p-4" > 
                    <div className="mb-2 flex justify-between">
                        <div>Price</div>
                        <div>
                            <ProductPrice  value={Number(product.price)}/>
                        </div>
                    </div>
                    <div className="mb-2 flex justify-between">
                        <div>Status</div>
                        {product.stock > 0 ? (
                           <Badge variant="outline">In Stock</Badge> 
                        ) : (
                            <Badge variant="destructive">Out of Stock</Badge>
                        )}

                    </div>
                </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetailsPage;
