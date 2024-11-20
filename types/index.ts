export interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  description: string;
  images: string[];
  colors: string[];
  storage: string[];
  features: string[];
  specs: {
    display: string;
    processor: string;
    camera: string;
    battery: string;
    charging: string;
    water: string;
    [key: string]: string;
  };
}

export interface Category {
  id: number;
  name: string;
  description: string;
  image: string;
  count: number;
}

export interface CartItem extends Product {
  quantity: number;
  selectedColor: string;
  selectedStorage: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  wishlist: number[];
  cart: CartItem[];
}
