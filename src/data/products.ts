import perfume1 from "@/assets/products/perfume-1.jpg";
import perfume2 from "@/assets/products/perfume-2.jpg";
import perfume3 from "@/assets/products/perfume-3.jpg";
import perfume4 from "@/assets/products/perfume-4.jpg";
import perfume5 from "@/assets/products/perfume-5.jpg";
import perfume6 from "@/assets/products/perfume-6.jpg";
import perfume7 from "@/assets/products/perfume-7.jpg";
import perfume8 from "@/assets/products/perfume-8.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  tag?: "new" | "sold-out" | "bestseller";
  category: string;
  description: string;
  notes: {
    top: string[];
    heart: string[];
    base: string[];
  };
  size: string;
  concentration: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Amber Elixir",
    price: 12500,
    image: perfume1,
    tag: "new",
    category: "oriental",
    description: "A luxurious amber fragrance with golden warmth. This opulent scent opens with sparkling citrus before revealing a heart of precious amber, enriched by vanilla and sandalwood.",
    notes: {
      top: ["Bergamot", "Pink Pepper", "Saffron"],
      heart: ["Amber", "Jasmine", "Rose"],
      base: ["Sandalwood", "Vanilla", "Musk"],
    },
    size: "100ml",
    concentration: "Eau de Parfum",
  },
  {
    id: "2",
    name: "Noir Absolute",
    price: 15500,
    image: perfume2,
    category: "woody",
    description: "A bold and mysterious fragrance for the modern connoisseur. Dark, sensual, and utterly captivating with notes of oud and leather wrapped in smoky incense.",
    notes: {
      top: ["Black Pepper", "Cardamom", "Bergamot"],
      heart: ["Oud", "Leather", "Incense"],
      base: ["Vetiver", "Amber", "Musk"],
    },
    size: "100ml",
    concentration: "Extrait de Parfum",
  },
  {
    id: "3",
    name: "Rose Pétale",
    price: 9500,
    image: perfume3,
    tag: "new",
    category: "floral",
    description: "A romantic ode to the queen of flowers. Fresh Bulgarian roses dance with dewy petals and a whisper of peony, creating an enchanting feminine signature.",
    notes: {
      top: ["Pink Pepper", "Lychee", "Bergamot"],
      heart: ["Bulgarian Rose", "Peony", "Magnolia"],
      base: ["White Musk", "Cedar", "Ambrette"],
    },
    size: "75ml",
    concentration: "Eau de Parfum",
  },
  {
    id: "4",
    name: "Blanc Absolu",
    price: 18500,
    image: perfume4,
    category: "fresh",
    description: "Minimalist luxury in a bottle. A clean, sophisticated scent that celebrates purity with crisp white flowers, soft musks, and a subtle woody dry-down.",
    notes: {
      top: ["Aldehydes", "Green Apple", "Bergamot"],
      heart: ["White Flowers", "Iris", "Lily of the Valley"],
      base: ["White Musk", "Cashmere Wood", "Ambergris"],
    },
    size: "100ml",
    concentration: "Eau de Parfum",
  },
  {
    id: "5",
    name: "Oud Royale",
    price: 28500,
    image: perfume5,
    category: "oriental",
    description: "The essence of Arabian luxury. Rare oud wood meets precious saffron and Bulgarian rose in this opulent, long-lasting fragrance fit for royalty.",
    notes: {
      top: ["Saffron", "Cinnamon", "Cardamom"],
      heart: ["Oud", "Bulgarian Rose", "Orris"],
      base: ["Amber", "Sandalwood", "Musk"],
    },
    size: "50ml",
    concentration: "Parfum",
  },
  {
    id: "6",
    name: "Citrus Verbena",
    price: 7500,
    image: perfume6,
    tag: "sold-out",
    category: "fresh",
    description: "A vibrant burst of Mediterranean sunshine. Zesty Italian lemons and fresh verbena create an invigorating scent that captures summer in a bottle.",
    notes: {
      top: ["Lemon", "Lime", "Grapefruit"],
      heart: ["Verbena", "Green Tea", "Basil"],
      base: ["White Cedar", "Musk", "Vetiver"],
    },
    size: "100ml",
    concentration: "Eau de Toilette",
  },
  {
    id: "7",
    name: "Velvet Orchid",
    price: 14500,
    image: perfume7,
    tag: "new",
    category: "floral",
    description: "A seductive evening fragrance with mysterious depth. Dark orchid blooms unfold against a backdrop of velvet plum and intoxicating ylang-ylang.",
    notes: {
      top: ["Plum", "Rum", "Bergamot"],
      heart: ["Black Orchid", "Ylang-Ylang", "Jasmine"],
      base: ["Dark Chocolate", "Patchouli", "Vanilla"],
    },
    size: "75ml",
    concentration: "Eau de Parfum",
  },
  {
    id: "8",
    name: "Aqua Marine",
    price: 8500,
    image: perfume8,
    category: "fresh",
    description: "The essence of ocean breeze and coastal freshness. Cool aquatic notes blend with sea salt and driftwood for an effortlessly clean signature.",
    notes: {
      top: ["Sea Salt", "Bergamot", "Grapefruit"],
      heart: ["Marine Accord", "Lotus", "Water Lily"],
      base: ["Driftwood", "White Musk", "Ambergris"],
    },
    size: "100ml",
    concentration: "Eau de Toilette",
  },
];

export const filterOptions = [
  {
    title: "Category",
    options: [
      { label: "All", value: "all" },
      { label: "Oriental", value: "oriental" },
      { label: "Woody", value: "woody" },
      { label: "Floral", value: "floral" },
      { label: "Fresh", value: "fresh" },
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
    title: "Concentration",
    options: [
      { label: "All", value: "all" },
      { label: "Parfum", value: "parfum" },
      { label: "Eau de Parfum", value: "edp" },
      { label: "Eau de Toilette", value: "edt" },
    ],
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};
