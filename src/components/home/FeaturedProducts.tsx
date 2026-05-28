import Container from "../shared/Container";
import ProductCard from "../shared/ProductCard";
import SectionTitle from "../shared/SectionTitle";

const products = [
  {
    title: "Smart Watch",
    price: 2500,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
  {
    title: "Table Lamp",
    price: 1800,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  },
  {
    title: "Lipstick Set",
    price: 1200,
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348",
  },
  {
    title: "Necklace",
    price: 3200,
    image:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-gray-50">
      <Container>

        <SectionTitle
          title="Featured Products"
          subtitle="Trending products you may love"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

          {products.map((product) => (
            <ProductCard
              key={product.title}
              product={product}
            />
          ))}

        </div>
      </Container>
    </section>
  );
};

export default FeaturedProducts;