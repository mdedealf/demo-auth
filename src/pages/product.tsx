import { useEffect, useState } from "react";
import { mockProducts } from "../constants/products";
import type { ProductType } from "../types/product-type";

const Product = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    // Simulate fetching products from API
    setProducts(mockProducts);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10 mt-[60px]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">Our Products</h1>
          <p className="text-gray-500 mt-2">
            Browse our curated collection of top-quality products.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                  {product.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 truncate">
                  {product.name}
                </h3>
                <p className="text-blue-600 font-bold mt-2">
                  ${product.price.toFixed(2)}
                </p>
                <button className="mt-4 w-full py-2 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
