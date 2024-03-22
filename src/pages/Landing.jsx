import { customFetch } from "../Utils";
import { FeaturedProducts } from "../components";
import Hero from "../components/Hero";

const url = "/products?featured=true";
export const loader = async () => {
  const response = await customFetch(url);
  const products = response.data.data;
  return { products };
};

const Landing = () => {
  return (
    <h1 className="text-4xl">
      <Hero />
      <FeaturedProducts />
    </h1>
  );
};

export default Landing;
