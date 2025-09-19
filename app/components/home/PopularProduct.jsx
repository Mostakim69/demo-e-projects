import React from "react";

export default function PopularProduct() {
  const products = [
    {
      id: 1,
      name: "Smartphone",
      price: 299,
      oldPrice: 399,
      discount: "-25%",
      rating: 4.5,
      image: "https://i.ibb.co.com/kgQHjkfB/Apple-i-Phone-17-Pro-Max.png",
    },
    {
      id: 2,
      name: "Rice Pack",
      price: 25,
      oldPrice: 35,
      discount: "-30%",
      rating: 4.2,
      image: "https://i.ibb.co.com/T9gR2Ks/foodela-baglamoti-rice.jpg",
    },
    {
      id: 3,
      name: "Jacket",
      price: 79,
      oldPrice: 120,
      discount: "-35%",
      rating: 4.7,
      image:
        "https://i.ibb.co.com/GQZyX8gh/497-4972831-transparent-leather-jacket-png-cute-red-leather-jacket.png",
    },
    {
      id: 4,
      name: "Smart TV",
      price: 499,
      oldPrice: 599,
      discount: "-15%",
      rating: 4.3,
      image: "https://i.ibb.co.com/LzdM1Qns/32-inch-android-led-tv-612.jpg",
    },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-2">Popular Products</h2>
        <p className="text-gray-600 mb-6">
          Explore our most popular picks loved by thousands of happy customers.
        </p>
        <div className="flex gap-3 mb-8">
          <button className="px-4 py-2 rounded text-sm font-medium bg-orange-500 text-white shadow hover:bg-orange-600 transition">
            All
          </button>
          <button className="px-4 py-2 rounded text-sm font-medium border border-orange-400 text-orange-500 hover:bg-orange-100 transition">
            Electronics
          </button>
          <button className="px-4 py-2 rounded text-sm font-medium border border-orange-400 text-orange-500 hover:bg-orange-100 transition">
            Fashion
          </button>
          <button className="px-4 py-2 rounded text-sm font-medium border border-orange-400 text-orange-500 hover:bg-orange-100 transition">
            Grocery
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative bg-white shadow rounded-lg p-4 hover:shadow-lg transition"
            >
              {/* Discount Badge */}
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                {product.discount}
              </span>

              {/* Product Image */}
              <div className="w-full h-40 mb-4 overflow-hidden rounded">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Info */}
              <h3 className="text-lg font-semibold">{product.name}</h3>

              {/* Price */}
              <p className="text-gray-600">
                <span className="text-red-500 font-bold">${product.price}</span>{" "}
                <span className="line-through text-sm text-gray-400">
                  ${product.oldPrice}
                </span>
              </p>

              {/* Rating */}
              <p className="text-yellow-500 text-sm">
                {"⭐".repeat(Math.floor(product.rating))}
                {product.rating % 1 !== 0 ? "⭐" : ""}
                <span className="text-gray-500 ml-1">
                  ({product.rating.toFixed(1)})
                </span>
              </p>

              {/* Buttons */}
              <div className="mt-4 flex gap-2">
                <button className="flex-1 px-4 py-2 bg-orange-500 text-white rounded shadow hover:bg-orange-600 cursor-pointer">
                  Buy Now
                </button>
                <button className="flex-1 px-4 py-2 border border-orange-500 text-orange-500 rounded hover:bg-orange-100 cursor-pointer">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
