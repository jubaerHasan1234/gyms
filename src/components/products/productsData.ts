import { ProductItem } from "./types";

// Imported product images
import mintDarkImg from "../../assets/images/mint_dark_choc_1790758788483.jpg";
import mintBarImg from "../../assets/images/mint_bar_green_1790758818267.jpg";
import brokenChocImg from "../../assets/images/broken_choc_pink_1790758842063.jpg";
import orangeDarkImg from "../../assets/images/orange_dark_choc_1790758867028.jpg";
import mintRibbedImg from "../../assets/images/mint_chocolate_bar_1790758888858.jpg";
import whiteCashewImg from "../../assets/images/white_choc_cashew_1790758905121.jpg";

export const PRODUCTS: ProductItem[] = [
  {
    id: 1,
    title: "Mint Dark Protein Chocolate",
    price: "₹399.00",
    rating: 5,
    image: mintDarkImg,
    alt: "Mint Dark Chocolate Squares",
  },
  {
    id: 2,
    title: "Crunchy Mint Green Bar",
    price: "₹399.00",
    rating: 5,
    image: mintBarImg,
    alt: "Mint Dark Chocolate Bar",
  },
  {
    id: 3,
    title: "Artisan Broken Dark Chunks",
    price: "₹399.00",
    rating: 5,
    image: brokenChocImg,
    alt: "Broken Dark Chocolate Chunks",
  },
  {
    id: 4,
    title: "Orange Dark Energy Chocolate",
    price: "₹399.00",
    rating: 5,
    image: orangeDarkImg,
    alt: "Orange Stacked Chocolate",
  },
  {
    id: 5,
    title: "Ribbed Double Mint Delight",
    price: "₹399.00",
    rating: 5,
    image: mintRibbedImg,
    alt: "Mint Ribbed Chocolate Bar",
  },
  {
    id: 6,
    title: "White Chocolate Roasted Cashew",
    price: "₹399.00",
    rating: 5,
    image: whiteCashewImg,
    alt: "White Chocolate Cashew Blocks",
  },
];
