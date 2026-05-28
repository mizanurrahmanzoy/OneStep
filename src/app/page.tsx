import Hero from "@/components/home/Hero";
import ProductSection from "@/components/home/ProductSection";
import Navbar from "@/components/layout/Navbar";

import MainHero from "@/components/home/MainHero";
import Container from "@/components/shared/Container";

import { products } from "@/data/products";

export default function Home() {
  return (
    <main className="bg-[#f5f7fa] min-h-screen">

      <Navbar />

      <Container>

        <MainHero />

        <ProductSection
          title="Trending Products"
          products={products}
        />

        <ProductSection
          title="Electronics Deals"
          products={products.filter(
            (item) => item.category === "Electronics"
          )}
        />

        <ProductSection
          title="Home Decor Picks"
          products={products.filter(
            (item) => item.category === "Home Decor"
          )}
        />

        <ProductSection
          title="Cosmetics Collection"
          products={products.filter(
            (item) => item.category === "Cosmetics"
          )}
        />

        <ProductSection
          title="Jewelry Collection"
          products={products.filter(
            (item) => item.category === "Jewelry"
          )}
        />

      </Container>

    </main>
  );
}