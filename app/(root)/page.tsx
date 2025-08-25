import ProductList from "@/components/shared/Product/Product-list";
import { getLatestProducts } from "@/lib/actions/products.action";

const Homepage = async () => {
  const latestProducts = await getLatestProducts();
  return (
    <>
      <ProductList
        data={latestProducts}
        title="Newest Arrivals"
        limit={4}
      />
    </>
  );
};

export default Homepage;
