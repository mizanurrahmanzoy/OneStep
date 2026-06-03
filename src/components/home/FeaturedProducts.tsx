import Container from "../shared/Container";
import ProductCard from "../shared/ProductCard";
import SectionTitle from "../shared/SectionTitle";

const products = [
  {
    id: 1,
    title: "Smart Watch",
    price: 2500,
    oldPrice: 3000,
    discount: 17,
    rating: 4.7,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
  {
    id: 2,
    title: "Table Lamp",
    price: 1800,
    oldPrice: 2200,
    discount: 18,
    rating: 4.5,
    category: "Home Decor",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  },
  {
    id: 3,
    title: "Lipstick Set",
    price: 1200,
    oldPrice: 1500,
    discount: 20,
    rating: 4.8,
    category: "Cosmetics",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348",
  },
  {
    id: 4,
    title: "Necklace",
    price: 3200,
    oldPrice: 4000,
    discount: 20,
    rating: 4.9,
    category: "Jewelry",
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
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </Container>
    </section>
  );
};

export default FeaturedProducts;