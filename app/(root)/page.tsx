import ProductList from "@/components/shared/Product/Product-list";
import sampleData from "@/db/sample-data";

const Homepage = () => {
  console.log(sampleData);
  return (
    <>
      <ProductList
        data={sampleData.products}
        title="Newest Arrivals"
        limit={4}
      />
    </>
  );
};

export default Homepage;
