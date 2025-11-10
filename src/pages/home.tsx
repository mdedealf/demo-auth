import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { mockProductsHome } from "../constants/products";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col mt-[60px]">
      {/* Hero Section */}
      <section className="flex flex-col gap-4 md:flex-row items-center justify-between px-8 md:px-16 lg:px-24 py-20 bg-linear-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-lg flex flex-col items-start gap-2">
          <h1 className="text-5xl font-bold leading-tight">
            Shop the Best Deals in One Place
          </h1>
          <p className="mt-4 text-lg text-blue-100">
            Discover the latest gadgets, fashion, and accessories — all at
            unbeatable prices.
          </p>
          <Button onClick={() => navigate("/product")}>Shop Now</Button>
        </div>
        <div className="mt-10 md:mt-0">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
            alt="Shopping"
            className="rounded-3xl shadow-lg w-full max-w-md"
          />
        </div>
      </section>

      {/* Featured Products */}
      <section className="px-8 md:px-16 lg:px-24 py-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {mockProductsHome.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 truncate">
                  {product.name}
                </h3>
                <p className="text-blue-600 font-bold mt-2">{product.price}</p>
                <button className="mt-4 w-full py-2 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-800 text-gray-400 text-center">
        © {new Date().getFullYear()} mdedealf — All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
