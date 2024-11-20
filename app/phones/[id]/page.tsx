"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingCart, Heart, Share2, ChevronLeft, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

interface Phone {
  id: number;
  slug: string;
  name: string;
  price: number;
  image: string;
  colorImages: {
    [key: string]: string[];
  };
  description: string;
  specs: {
    display: string;
    chip: string;
    camera: string;
    battery: string;
    storage: string[];
    colors: string[];
  };
  rating: number;
  reviews: number;
}

// Mock phone data - in a real app, this would come from an API
const phones: Phone[] = [
  {
    id: 1,
    slug: "iphone-15-pro-max",
    name: "iPhone 15 Pro Max",
    price: 1199,
    image:
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=2070&auto=format&fit=crop",
    colorImages: {
      "Natural Titanium": [
        "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1695048094040-8c3a9bcf5d6a?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1695048093895-6a1d59a6c779?q=80&w=2070&auto=format&fit=crop",
      ],
      "Blue Titanium": [
        "https://images.unsplash.com/photo-1697897315664-3c041d6d89a4?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1697897315269-e3e8e39c1379?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1697897315443-0f5027ced8e6?q=80&w=2070&auto=format&fit=crop",
      ],
      "White Titanium": [
        "https://images.unsplash.com/photo-1696440628533-bb4fcb4e8?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1696440628374-b95bc8e5ba89?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1696440628462-963b990d2ca7?q=80&w=2070&auto=format&fit=crop",
      ],
      "Black Titanium": [
        "https://images.unsplash.com/photo-1695650911648-528dea15ece1?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1695650911764-bce8a812c26c?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1695650911510-e834b91b4602?q=80&w=2070&auto=format&fit=crop",
      ],
    },
    description:
      "Experience the ultimate iPhone with the all-new iPhone 15 Pro Max. Featuring a stunning 6.7-inch Super Retina XDR display, powerful A17 Pro chip, and a revolutionary camera system.",
    specs: {
      display: "6.7-inch Super Retina XDR display",
      chip: "A17 Pro chip",
      camera: "48MP Main | 12MP Ultra Wide | 12MP Telephoto",
      battery: "Up to 29 hours video playback",
      storage: ["256GB", "512GB", "1TB"],
      colors: [
        "Natural Titanium",
        "Blue Titanium",
        "White Titanium",
        "Black Titanium",
      ],
    },
    rating: 4.9,
    reviews: 1000,
  },
  {
    id: 2,
    slug: "samsung-galaxy-s24-ultra",
    name: "Samsung Galaxy S24 Ultra",
    price: 1299,
    image:
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=2071&auto=format&fit=crop",
    colorImages: {
      "Titanium Gray": [
        "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=2071&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?q=80&w=2071&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1610945264685-aa5cc3bf024d?q=80&w=2071&auto=format&fit=crop",
      ],
      "Titanium Black": [
        "https://images.unsplash.com/photo-1678911820864-e5c67e784c22?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1678911820920-3c0ddbc3c1c7?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1678911820778-cb6a6f5d720e?q=80&w=2070&auto=format&fit=crop",
      ],
      "Titanium Violet": [
        "https://images.unsplash.com/photo-1697897315664-3c041d6d89a4?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1697897315269-e3e8e39c1379?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1697897315443-0f5027ced8e6?q=80&w=2070&auto=format&fit=crop",
      ],
      "Titanium Yellow": [
        "https://images.unsplash.com/photo-1696440628533-bb4fcb4e8?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1696440628374-b95bc8e5ba89?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1696440628462-963b990d2ca7?q=80&w=2070&auto=format&fit=crop",
      ],
    },
    description:
      "Introducing the Samsung Galaxy S24 Ultra with AI-powered features, S Pen functionality, and a pro-grade camera system that pushes the boundaries of mobile photography.",
    specs: {
      display: "6.8-inch Dynamic AMOLED 2X",
      chip: "Snapdragon 8 Gen 3",
      camera: "200MP Main | 12MP Ultra Wide | 50MP Telephoto",
      battery: "5000mAh with fast charging",
      storage: ["256GB", "512GB", "1TB"],
      colors: [
        "Titanium Gray",
        "Titanium Black",
        "Titanium Violet",
        "Titanium Yellow",
      ],
    },
    rating: 4.8,
    reviews: 500,
  },
  {
    id: 3,
    slug: "google-pixel-8-pro",
    name: "Google Pixel 8 Pro",
    price: 999,
    image:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=2027&auto=format&fit=crop",
    colorImages: {
      Obsidian: [
        "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=2027&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1598327105749-b08c2c14a410?q=80&w=2027&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1598327105854-5e4f834d0a79?q=80&w=2027&auto=format&fit=crop",
      ],
      Porcelain: [
        "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1695048094040-8c3a9bcf5d6a?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1695048093895-6a1d59a6c779?q=80&w=2070&auto=format&fit=crop",
      ],
      Bay: [
        "https://images.unsplash.com/photo-1697897315664-3c041d6d89a4?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1697897315269-e3e8e39c1379?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1697897315443-0f5027ced8e6?q=80&w=2070&auto=format&fit=crop",
      ],
    },
    description:
      "Meet the Google Pixel 8 Pro, powered by Google Tensor G3 and advanced AI features. Capture stunning photos with the pro-level camera system and experience pure Android at its best.",
    specs: {
      display: "6.7-inch LTPO OLED",
      chip: "Google Tensor G3",
      camera: "50MP Main | 48MP Ultra Wide | 48MP Telephoto",
      battery: "5000mAh with 30W fast charging",
      storage: ["128GB", "256GB", "512GB"],
      colors: ["Obsidian", "Porcelain", "Bay"],
    },
    rating: 4.7,
    reviews: 2000,
  },
  {
    id: 4,
    slug: "oneplus-12",
    name: "OnePlus 12",
    price: 799,
    image:
      "https://images.unsplash.com/photo-1678911820864-e5c67e784c22?q=80&w=2070&auto=format&fit=crop",
    colorImages: {
      "Flowy Emerald": [
        "https://images.unsplash.com/photo-1678911820864-e5c67e784c22?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1678911820920-3c0ddbc3c1c7?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1678911820778-cb6a6f5d720e?q=80&w=2070&auto=format&fit=crop",
      ],
      "Silky Black": [
        "https://images.unsplash.com/photo-1695650911648-528dea15ece1?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1695650911764-bce8a812c26c?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1695650911510-e834b91b4602?q=80&w=2070&auto=format&fit=crop",
      ],
      Silver: [
        "https://images.unsplash.com/photo-1696440628533-bb4fcb4e8?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1696440628374-b95bc8e5ba89?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1696440628462-963b990d2ca7?q=80&w=2070&auto=format&fit=crop",
      ],
    },
    description:
      "The OnePlus 12 delivers flagship performance with the Snapdragon 8 Gen 3, stunning display, and incredibly fast charging capabilities.",
    specs: {
      display: "6.82-inch LTPO AMOLED",
      chip: "Snapdragon 8 Gen 3",
      camera: "50MP Main | 48MP Ultra Wide | 64MP Telephoto",
      battery: "5400mAh with 100W charging",
      storage: ["256GB", "512GB"],
      colors: ["Flowy Emerald", "Silky Black", "Silver"],
    },
    rating: 4.6,
    reviews: 1500,
  },
  {
    id: 5,
    slug: "xiaomi-14-pro",
    name: "Xiaomi 14 Pro",
    price: 699,
    image:
      "https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=2081&auto=format&fit=crop",
    colorImages: {
      Black: [
        "https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=2081&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1616348436223-e7a47629f6e4?q=80&w=2081&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1616348436157-601c677fb5b4?q=80&w=2081&auto=format&fit=crop",
      ],
      White: [
        "https://images.unsplash.com/photo-1696440628533-bb4fcb4e8?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1696440628374-b95bc8e5ba89?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1696440628462-963b990d2ca7?q=80&w=2070&auto=format&fit=crop",
      ],
      Green: [
        "https://images.unsplash.com/photo-1678911820864-e5c67e784c22?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1678911820920-3c0ddbc3c1c7?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1678911820778-cb6a6f5d720e?q=80&w=2070&auto=format&fit=crop",
      ],
    },
    description:
      "The Xiaomi 14 Pro brings premium features to the mid-range segment with its powerful camera system, fast charging, and sleek design.",
    specs: {
      display: "6.73-inch LTPO OLED",
      chip: "Snapdragon 8 Gen 3",
      camera: "108MP Main | 50MP Ultra Wide | 50MP Telephoto",
      battery: "4880mAh with 120W charging",
      storage: ["256GB", "512GB"],
      colors: ["Black", "White", "Green"],
    },
    rating: 4.5,
    reviews: 1000,
  },
];

export default function PhonePage() {
  const params = useParams();
  const { addItem, getItemQuantity } = useCart();
  const [selectedStorage, setSelectedStorage] = useState<string>("256GB");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const phone = phones.find((p) => p.slug === params.id) as Phone | undefined;

  if (!phone) {
    return (
      <div className="container mx-auto px-4 py-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">Phone Not Found</h1>
          <p className="text-gray-600 mb-8">
            The phone you're looking for doesn't exist.
          </p>
          <Link href="/phones">
            <Button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 
                             text-white rounded-full px-8 py-3"
            >
              Browse All Phones
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // Set initial selected color if not set
  useEffect(() => {
    if (!selectedColor && phone.specs.colors.length > 0) {
      setSelectedColor(phone.specs.colors[0]);
      setCurrentImageIndex(0); // Reset image index when color changes
    }
  }, [phone.specs.colors, selectedColor]);

  // Reset image index when color changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [selectedColor]);

  const handleAddToCart = () => {
    addItem({
      id: phone.id.toString(),
      name: phone.name,
      price: phone.price,
      image: phone.image,
      slug: phone.slug,
    });
  };

  // Get current color images or fallback to default image
  const currentColorImages =
    selectedColor && phone.colorImages
      ? phone.colorImages[selectedColor]
      : [phone.image, phone.image, phone.image];

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4">
        <Link
          href="/phones"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Phones
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Image Gallery */}
          <div className="space-y-4">
            <motion.div
              key={currentColorImages[currentImageIndex]} // Add key to force re-render
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50"
            >
              <Image
                src={currentColorImages[currentImageIndex]}
                alt={`${phone.name} in ${selectedColor || "default"} - View ${
                  currentImageIndex + 1
                }`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </motion.div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-3 gap-4">
              {currentColorImages.map((image, index) => (
                <motion.button
                  key={`${selectedColor}-${index}`} // Add unique key
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative aspect-square rounded-xl overflow-hidden ${
                    currentImageIndex === index ? "ring-2 ring-blue-500" : ""
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${phone.name} in ${
                      selectedColor || "default"
                    } - Thumbnail ${index + 1}`}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 33vw, 20vw"
                  />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Right Column - Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-4">{phone.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <span className="font-semibold">{phone.rating}</span>
                </div>
                <span className="text-gray-600">({phone.reviews} reviews)</span>
              </div>
              <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                ${phone.price}
              </p>
            </div>

            <p className="text-gray-600 leading-relaxed">{phone.description}</p>

            <div>
              <h3 className="font-semibold mb-3">Storage</h3>
              <div className="flex flex-wrap gap-3">
                {phone.specs.storage.map((storage) => (
                  <button
                    key={storage}
                    onClick={() => setSelectedStorage(storage)}
                    className={`px-4 py-2 rounded-full border transition-all ${
                      selectedStorage === storage
                        ? "border-blue-600 bg-blue-50 text-blue-600"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    {storage}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Color</h3>
              <div className="flex flex-wrap gap-3">
                {phone.specs.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-full border transition-all ${
                      selectedColor === color
                        ? "border-blue-600 bg-blue-50 text-blue-600"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Key Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-gray-600">Display</p>
                  <p className="font-medium">{phone.specs.display}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-600">Chip</p>
                  <p className="font-medium">{phone.specs.chip}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-600">Camera</p>
                  <p className="font-medium">{phone.specs.camera}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-600">Battery</p>
                  <p className="font-medium">{phone.specs.battery}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-6">
              <Button
                onClick={handleAddToCart}
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-600 
                         text-white rounded-full py-6 flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-5 h-5" />
                {getItemQuantity(phone.id.toString()) > 0
                  ? "Add Another"
                  : "Add to Cart"}
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full w-14 h-14"
              >
                <Heart className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full w-14 h-14"
              >
                <Share2 className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
