import Container from "../shared/Container";

const Hero = () => {
  return (
    <section className="bg-gray-100 py-16">
      <Container>
        <div className="grid md:grid-cols-2 items-center gap-10">

          {/* Left */}
          <div>
            <p className="text-blue-600 font-semibold mb-3">
              Best Online Shopping Platform
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Discover Modern Lifestyle Products
            </h1>

            <p className="text-gray-600 mb-6">
              Electronics, Home Decor, Cosmetics & Jewelry —
              all in one place.
            </p>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition">
              Shop Now
            </button>
          </div>

          {/* Right */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
              alt="Hero"
              className="rounded-2xl w-full h-[450px] object-cover"
            />
          </div>

        </div>
      </Container>
    </section>
  );
};

export default Hero;