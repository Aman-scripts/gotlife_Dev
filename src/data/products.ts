// Men's Fragrances
// GOT BLACK ATTIRE
import blackAttire1 from "@/assets/products/Mens/GOT BLACK ATTIRE FOR HIM IMAGES/first.png";
import blackAttire2 from "@/assets/products/Mens/GOT BLACK ATTIRE FOR HIM IMAGES/second.jpg";
import blackAttire3 from "@/assets/products/Mens/GOT BLACK ATTIRE FOR HIM IMAGES/third.jpg";
import blackAttire4 from "@/assets/products/Mens/GOT BLACK ATTIRE FOR HIM IMAGES/fourth.jpg";
import blackAttire5 from "@/assets/products/Mens/GOT BLACK ATTIRE FOR HIM IMAGES/fifth.jpg";

// GOT DIVINE
import divine1 from "@/assets/products/Mens/GOT DIVINE FOR HIM IMAGES/first.jpg";
import divine2 from "@/assets/products/Mens/GOT DIVINE FOR HIM IMAGES/second.JPG";
import divine3 from "@/assets/products/Mens/GOT DIVINE FOR HIM IMAGES/third.JPG";
import divine4 from "@/assets/products/Mens/GOT DIVINE FOR HIM IMAGES/fourth.jpg";
import divine5 from "@/assets/products/Mens/GOT DIVINE FOR HIM IMAGES/fifth.jpg";

// GOT LEGEND
import legend1 from "@/assets/products/Mens/GOT LEGEDN FOR HIM IMAGES/first.jpg";
import legend2 from "@/assets/products/Mens/GOT LEGEDN FOR HIM IMAGES/second.jpg";
import legend3 from "@/assets/products/Mens/GOT LEGEDN FOR HIM IMAGES/third.jpg";
import legend4 from "@/assets/products/Mens/GOT LEGEDN FOR HIM IMAGES/fourth.jpg";
import legend5 from "@/assets/products/Mens/GOT LEGEDN FOR HIM IMAGES/fifth.jpg";

// GOT SUPREME
import supreme1 from "@/assets/products/Mens/GOT SUPREME FOR HIM IMAGES/first.jpg";
import supreme2 from "@/assets/products/Mens/GOT SUPREME FOR HIM IMAGES/second.jpg";
import supreme3 from "@/assets/products/Mens/GOT SUPREME FOR HIM IMAGES/third.JPG";
import supreme4 from "@/assets/products/Mens/GOT SUPREME FOR HIM IMAGES/fourth.jpg";
import supreme5 from "@/assets/products/Mens/GOT SUPREME FOR HIM IMAGES/fifth.jpg";

// Women's Fragrances
// GOT ESSENCE
import essence1 from "@/assets/products/Womens/GOT ESSENCE FOR HER IMAGES/first.jpg";
import essence2 from "@/assets/products/Womens/GOT ESSENCE FOR HER IMAGES/second.jpg";
import essence3 from "@/assets/products/Womens/GOT ESSENCE FOR HER IMAGES/third.jpg";
import essence4 from "@/assets/products/Womens/GOT ESSENCE FOR HER IMAGES/fourth.jpg";
import essence5 from "@/assets/products/Womens/GOT ESSENCE FOR HER IMAGES/fifth.jpg";

// GOT ILLUSION
import illusion1 from "@/assets/products/Womens/GOT ILLUSION FOR HER IMAGES/first.jpg";
import illusion2 from "@/assets/products/Womens/GOT ILLUSION FOR HER IMAGES/second.jpg";
import illusion3 from "@/assets/products/Womens/GOT ILLUSION FOR HER IMAGES/third.jpg";
import illusion4 from "@/assets/products/Womens/GOT ILLUSION FOR HER IMAGES/fourth.jpg";

// GOT LONDON BLUSH
import londonBlush1 from "@/assets/products/Womens/GOT LONDON BLUSH FOR HER IMAGES/first.JPG";
import londonBlush2 from "@/assets/products/Womens/GOT LONDON BLUSH FOR HER IMAGES/second.JPG";
import londonBlush3 from "@/assets/products/Womens/GOT LONDON BLUSH FOR HER IMAGES/third.JPG";
import londonBlush4 from "@/assets/products/Womens/GOT LONDON BLUSH FOR HER IMAGES/fourth.JPG";
import londonBlush5 from "@/assets/products/Womens/GOT LONDON BLUSH FOR HER IMAGES/fifth.JPG";

// GOT LUSH AURA
import lushAura1 from "@/assets/products/Womens/GOT LUSH AURA FOR HER IMAGES/first.JPG";
import lushAura2 from "@/assets/products/Womens/GOT LUSH AURA FOR HER IMAGES/second.png";
import lushAura3 from "@/assets/products/Womens/GOT LUSH AURA FOR HER IMAGES/third.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  images: string[];
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
  // Men's Collection
  {
    id: "m1",
    name: "Black Attire",
    price: 3499,
    image: blackAttire1,
    images: [blackAttire1, blackAttire2, blackAttire3, blackAttire4, blackAttire5],
    tag: "bestseller",
    category: "Mens",
    description: "A sophisticated and powerful fragrance for the modern man. Black Attire exudes confidence with its deep, smoky notes and a hint of mysterious elegance.",
    notes: {
      top: ["Bergamot", "Pink Pepper"],
      heart: ["Leather", "Patchouli"],
      base: ["Amber", "Oakmoss"],
    },
    size: "100ml",
    concentration: "Eau de Parfum",
  },
  {
    id: "m2",
    name: "Divine",
    price: 3299,
    image: divine1,
    images: [divine1, divine2, divine3, divine4, divine5],
    category: "Mens",
    description: "Experience a scent that transcends the ordinary. Divine is a celestial blend of fresh citrus and sacred woods, perfect for the man who seeks a higher standard.",
    notes: {
      top: ["Grapefruit", "Sea Notes"],
      heart: ["Jasmine", "Bay Leaf"],
      base: ["Guaiac Wood", "Ambergris"],
    },
    size: "100ml",
    concentration: "Eau de Parfum",
  },
  {
    id: "m3",
    name: "Legend",
    price: 3699,
    image: legend1,
    images: [legend1, legend2, legend3, legend4, legend5],
    tag: "new",
    category: "Mens",
    description: "Some are born, others are made. Legend represents the timeless appeal of strength and charisma, combining classic fougere elements with a modern twist.",
    notes: {
      top: ["Lavender", "Pineapple"],
      heart: ["Red Apple", "Dried Fruits"],
      base: ["Sandalwood", "Tonka Bean"],
    },
    size: "100ml",
    concentration: "Eau de Parfum",
  },
  {
    id: "m4",
    name: "Supreme",
    price: 3899,
    image: supreme1,
    images: [supreme1, supreme2, supreme3, supreme4, supreme5],
    category: "Mens",
    description: "The pinnacle of masculinity. Supreme is an intense, long-lasting fragrance that commands attention with its rich spicy heart and warm woody base.",
    notes: {
      top: ["Cardamom", "Cinnamon"],
      heart: ["Incense", "Cedarwood"],
      base: ["Vanilla", "Tobacco"],
    },
    size: "100ml",
    concentration: "Parfum",
  },
  // Women's Collection
  {
    id: "w1",
    name: "Essence",
    price: 2999,
    image: essence1,
    images: [essence1, essence2, essence3, essence4, essence5],
    tag: "new",
    category: "Womens",
    description: "Pure grace in a bottle. Essence captures the delicate beauty of blooming flowers and the softness of light, creating a signature that is both timeless and modern.",
    notes: {
      top: ["Neroli", "Mandarin"],
      heart: ["Tuberose", "Orange Blossom"],
      base: ["White Musk", "Cedar"],
    },
    size: "100ml",
    concentration: "Eau de Parfum",
  },
  {
    id: "w2",
    name: "Illusion",
    price: 3199,
    image: illusion1,
    images: [illusion1, illusion2, illusion3, illusion4],
    category: "Womens",
    description: "A captivating play of light and shadow. Illusion is a mysterious fragrance that keeps them guessing, with its enchanting blend of sweet fruits and dark florals.",
    notes: {
      top: ["Pear", "Blackcurrant"],
      heart: ["Iris", "Praline"],
      base: ["Patchouli", "Vanilla"],
    },
    size: "100ml",
    concentration: "Eau de Parfum",
  },
  {
    id: "w3",
    name: "London Blush",
    price: 3399,
    image: londonBlush1,
    images: [londonBlush1, londonBlush2, londonBlush3, londonBlush4, londonBlush5],
    tag: "bestseller",
    category: "Womens",
    description: "Chic, vibrant, and utterly British. London Blush captures the energy of the city with its sparkling citrus opening and a romantic heart of English roses.",
    notes: {
      top: ["Lemon", "Red Fruits"],
      heart: ["Rose", "Peony"],
      base: ["Amber", "Musk"],
    },
    size: "100ml",
    concentration: "Eau de Parfum",
  },
  {
    id: "w4",
    name: "Lush Aura",
    price: 3599,
    image: lushAura1,
    images: [lushAura1, lushAura2, lushAura3],
    category: "Womens",
    description: "Radiate beauty with every step. Lush Aura is an intoxicating fragrance that surrounds you with a veil of exotic blooms and warm, golden undertones.",
    notes: {
      top: ["Mango", "Grapefruit"],
      heart: ["Jasmine", "Lotus"],
      base: ["Sandalwood", "Ambergris"],
    },
    size: "100ml",
    concentration: "Parfum",
  },
];

export const filterOptions = [
  {
    title: "Category",
    options: [
      { label: "All", value: "all" },
      { label: "Men", value: "Mens" },
      { label: "Women", value: "Womens" },
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
    ],
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};
