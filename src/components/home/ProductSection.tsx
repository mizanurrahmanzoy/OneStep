import ProductCard from "../shared/ProductCard";

type Product = {
  id: number;
  title: string;
  price: number;
  oldPrice: number;
  image: string;
  discount: number;
  rating: number;
  category: string;
};

type Props = {
  title: string;
  products: Product[];
};

const ProductSection = ({ title, products }: Props) => {
  return (
    <section className="mt-12">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">

        <h2 className="text-3xl font-bold text-gray-900">
          {title}
        </h2>

        <button className="text-blue-600 font-medium hover:underline">
          See All
        </button>

      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </section>
  );
};

export default ProductSection;