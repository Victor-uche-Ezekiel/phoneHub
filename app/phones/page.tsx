"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, Filter, SortDesc } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

const phones = [
  {
    id: 1,
    slug: "iphone-15-pro-max",
    name: "iPhone 15 Pro Max",
    price: 1199,
    rating: 4.9,
    reviews: 1000,
    image:
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=2070&auto=format&fit=crop",
    features: ["A17 Pro chip", "Pro camera system", "Titanium design"],
    brand: "Apple",
    category: "Flagship",
  },
  {
    id: 2,
    slug: "samsung-galaxy-s24-ultra",
    name: "Samsung Galaxy S24 Ultra",
    price: 1299,
    rating: 4.8,
    reviews: 500,
    image:
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=2071&auto=format&fit=crop",
    features: ["AI-powered camera", "200MP main sensor", "S Pen included"],
    brand: "Samsung",
    category: "Flagship",
  },
  {
    id: 3,
    slug: "google-pixel-8-pro",
    name: "Google Pixel 8 Pro",
    price: 999,
    rating: 4.7,
    reviews: 2000,
    image:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=2027&auto=format&fit=crop",
    features: ["Tensor G3 chip", "Magic Editor", "Temperature sensor"],
    brand: "Google",
    category: "Flagship",
  },
  {
    id: 4,
    slug: "oneplus-12",
    name: "OnePlus 12",
    price: 799,
    rating: 4.6,
    reviews: 1500,
    image:
      "https://images.unsplash.com/photo-1678911820864-e5c67e784c22?q=80&w=2070&auto=format&fit=crop",
    features: ["Snapdragon 8 Gen 3", "50MP camera", "100W charging"],
    brand: "OnePlus",
    category: "Mid-range",
  },
  {
    id: 5,
    slug: "xiaomi-14-pro",
    name: "Xiaomi 14 Pro",
    price: 699,
    rating: 4.5,
    reviews: 1000,
    image:
      "https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=2081&auto=format&fit=crop",
    features: ["108MP camera", "120W charging", "MIUI 15"],
    brand: "Xiaomi",
    category: "Mid-range",
  },
];

const filters = {
  brands: ["Apple", "Samsung", "Google", "OnePlus", "Xiaomi"],
  categories: ["Flagship", "Mid-range", "Budget", "Gaming"],
  priceRanges: ["Under $500", "$500-$800", "$800-$1000", "Over $1000"],
};

export default function PhonesPage() {
  const [selectedFilters, setSelectedFilters] = useState({
    brands: new Set<string>(),
    categories: new Set<string>(),
    priceRanges: new Set<string>(),
  });
  const [sortOption, setSortOption] = useState("newest");
  const { addItem, getItemQuantity } = useCart();

  const toggleFilter = (
    type: "brands" | "categories" | "priceRanges",
    value: string
  ) => {
    setSelectedFilters((prev) => {
      const newFilters = { ...prev };
      const set = new Set(prev[type]);
      if (set.has(value)) {
        set.delete(value);
      } else {
        set.add(value);
      }
      newFilters[type] = set;
      return newFilters;
    });
  };

  const isInPriceRange = (price: number, range: string) => {
    switch (range) {
      case "Under $500":
        return price < 500;
      case "$500-$800":
        return price >= 500 && price < 800;
      case "$800-$1000":
        return price >= 800 && price < 1000;
      case "Over $1000":
        return price >= 1000;
      default:
        return true;
    }
  };

  const filteredPhones = useMemo(() => {
    let result = phones;

    // Apply brand filter
    if (selectedFilters.brands.size > 0) {
      result = result.filter((phone) =>
        selectedFilters.brands.has(phone.brand)
      );
    }

    // Apply category filter
    if (selectedFilters.categories.size > 0) {
      result = result.filter((phone) =>
        selectedFilters.categories.has(phone.category)
      );
    }

    // Apply price range filter
    if (selectedFilters.priceRanges.size > 0) {
      result = result.filter((phone) =>
        Array.from(selectedFilters.priceRanges).some((range) =>
          isInPriceRange(phone.price, range)
        )
      );
    }

    // Apply sorting
    return [...result].sort((a, b) => {
      switch (sortOption) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        default: // 'newest'
          return b.id - a.id;
      }
    });
  }, [selectedFilters, sortOption]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Filters Section */}
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="w-full md:w-64 space-y-6">
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Filter className="w-5 h-5" />
                Filters
              </h2>

              {/* Brand Filter */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Brand</h3>
                <div className="space-y-2">
                  {filters.brands.map((brand) => (
                    <label
                      key={brand}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedFilters.brands.has(brand)}
                        onChange={() => toggleFilter("brands", brand)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-gray-700">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Category</h3>
                <div className="space-y-2">
                  {filters.categories.map((category) => (
                    <label
                      key={category}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedFilters.categories.has(category)}
                        onChange={() => toggleFilter("categories", category)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-gray-700">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  Price Range
                </h3>
                <div className="space-y-2">
                  {filters.priceRanges.map((range) => (
                    <label
                      key={range}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedFilters.priceRanges.has(range)}
                        onChange={() => toggleFilter("priceRanges", range)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-gray-700">{range}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-900">
                Latest Phones
              </h1>
              <div className="flex items-center gap-2">
                <SortDesc className="w-5 h-5 text-gray-600" />
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="border-gray-300 rounded-lg text-gray-700 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="newest">Newest First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPhones.map((phone) => (
                <motion.div
                  key={phone.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <Link href={`/phones/${phone.slug}`} className="block">
                    <div className="relative aspect-square rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-blue-50 to-purple-50">
                      <Image
                        src={phone.image}
                        alt={phone.name}
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">
                      {phone.name}
                    </h2>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        <span className="font-semibold text-gray-900">
                          {phone.rating}
                        </span>
                      </div>
                      <span className="text-gray-600">
                        ({phone.reviews} reviews)
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                        ${phone.price}
                      </p>
                      <Button
                        onClick={(e) => {
                          e.preventDefault();
                          addItem({
                            id: phone.id.toString(),
                            name: phone.name,
                            price: phone.price,
                            image: phone.image,
                            slug: phone.slug,
                          });
                        }}
                        className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                      >
                        <ShoppingCart className="w-5 h-5" />
                      </Button>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
