import React from "react";

export default function SpecialOffers() {
  const offers = [
    {
      id: 1,
      title: "20% OFF on Electronics",
      code: "ELEC20",
      condition: "Valid on orders above $100",
    },
    {
      id: 2,
      title: "Free Shipping",
      code: "FREESHIP",
      condition: "All orders above $50",
    },
    {
      id: 3,
      title: "Buy 1 Get 1 Free",
      code: "BOGO",
      condition: "Applicable on Fashion category",
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-2xl font-bold mb-2">Special Offers & Coupons</h2>
        <p className="text-gray-600 mb-6">
          Grab the best deals and discounts available for a limited time!
        </p>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="bg-orange-50 p-6 rounded-lg shadow hover:shadow-lg transition relative"
            >
              {/* Ribbon / Badge */}
              <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
                Hot Deal
              </span>

              {/* Offer Info */}
              <h3 className="text-lg font-semibold mb-2 mt-1">{offer.title}</h3>
              <p className="text-gray-700 mb-4">{offer.condition}</p>

              {/* Coupon & Button */}
              <div className="flex justify-between items-center">
                <span className="font-bold text-orange-600 border border-orange-400 px-2 py-1 rounded cursor-pointer hover:bg-orange-100 transition">
                  {offer.code}
                </span>
                <button className="px-3 py-1 bg-orange-500 text-white rounded hover:bg-orange-600 cursor-pointer transition">
                  Grab Offer
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

