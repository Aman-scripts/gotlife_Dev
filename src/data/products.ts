import product1 from "@/assets/products/product-1.jpg";
import product2 from "@/assets/products/product-2.jpg";
import product3 from "@/assets/products/product-3.jpg";
import product4 from "@/assets/products/product-4.jpg";
import product5 from "@/assets/products/product-5.jpg";
import product6 from "@/assets/products/product-6.jpg";
import product7 from "@/assets/products/product-7.jpg";
import product8 from "@/assets/products/product-8.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  tag?: "new" | "sold-out";
  category: string;
  description?: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "The Ivory Silk Saree",
    price: 42500,
    image: product1,
    tag: "new",
    category: "sarees",
    description: "Handwoven silk saree with delicate gold zari work",
  },
  {
    id: "2",
    name: "The Noir Kurta Set",
    price: 18500,
    image: product2,
    category: "kurta-sets",
    description: "Contemporary black kurta with hand-embroidered details",
  },
  {
    id: "3",
    name: "The Beige Linen Co-ord",
    price: 14500,
    image: product3,
    tag: "new",
    category: "co-ords",
    description: "Relaxed linen palazzo set in natural beige",
  },
  {
    id: "4",
    name: "The Olive Anarkali",
    price: 32500,
    image: product4,
    category: "anarkalis",
    description: "Silk anarkali with subtle embroidery in olive green",
  },
  {
    id: "5",
    name: "The Rose Chanderi Kurta",
    price: 16500,
    image: product5,
    category: "kurtas",
    description: "Chanderi silk kurta with delicate gold work",
  },
  {
    id: "6",
    name: "The Ivory Lehenga Set",
    price: 85000,
    image: product6,
    tag: "sold-out",
    category: "lehengas",
    description: "Bridal lehenga with intricate hand embroidery",
  },
  {
    id: "7",
    name: "The Grey Block Print Set",
    price: 12500,
    image: product7,
    tag: "new",
    category: "co-ords",
    description: "Contemporary co-ord with traditional block printing",
  },
  {
    id: "8",
    name: "The Burgundy Velvet Jacket",
    price: 28500,
    image: product8,
    category: "jackets",
    description: "Luxurious velvet jacket with sherwani-inspired details",
  },
];

export const filterOptions = [
  {
    title: "Category",
    options: [
      { label: "All", value: "all" },
      { label: "Sarees", value: "sarees" },
      { label: "Kurta Sets", value: "kurta-sets" },
      { label: "Co-ords", value: "co-ords" },
      { label: "Anarkalis", value: "anarkalis" },
      { label: "Lehengas", value: "lehengas" },
    ],
  },
  {
    title: "Sort By",
    options: [
      { label: "Newest", value: "newest" },
      { label: "Price: Low to High", value: "price-asc" },
      { label: "Price: High to Low", value: "price-desc" },
    ],
  },
  {
    title: "Availability",
    options: [
      { label: "In Stock", value: "in-stock" },
      { label: "Include Sold Out", value: "all" },
    ],
  },
];
