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
            <div className="flex flex-col gap-6">
                
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetailsPage;
