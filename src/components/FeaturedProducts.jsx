import SectionTitle from "./SectionTitle";
import ProductGrid from "./ProductGrid";
const FeaturedProducts = () => {
  return (
    <div className="pt-24">
      <SectionTitle text="Featured products" />
      <ProductGrid />
    </div>
  );
};

export default FeaturedProducts;
