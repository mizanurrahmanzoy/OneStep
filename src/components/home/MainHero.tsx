import CategorySidebar from "./CategorySidebar";

const MainHero = () => {
  return (
    <section className="py-8">

      <div className="grid grid-cols-12 gap-6 items-stretch">

        {/* Sidebar */}
        <div className="hidden lg:block lg:col-span-3">
          <CategorySidebar />
        </div>

        {/* Hero */}
        <div className="col-span-12 lg:col-span-9">

          <div className="bg-[#dff5f2] rounded-[32px] min-h-[520px] overflow-hidden relative flex items-center px-10 md:px-16">

            {/* Content */}
            <div className="relative z-10 max-w-xl">

              <p className="text-blue-600 font-semibold text-lg mb-4">
                Welcome to OneStep
              </p>

              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-gray-900 mb-6">
                Shop Smart,
                <br />
                Live Better
              </h1>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Discover electronics, home decor,
                cosmetics and jewelry —
                all in one modern marketplace.
              </p>

              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold transition shadow-lg">
                Shop Now
              </button>

            </div>

            {/* Decorative Circle */}
            <div className="absolute right-[-120px] top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/40 rounded-full"></div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default MainHero;