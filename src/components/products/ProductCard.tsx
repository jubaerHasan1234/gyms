"use client";
import React, { useState } from "react";
import { Plus, Check, Dumbbell } from "lucide-react";
import { ProductItem } from "./types";
import { ProductStarRating } from "./ProductStarRating";

export interface ProductCardProps {
  product: ProductItem;
  isAdded: boolean;
  onToggleAdd: (id: number) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isAdded,
  onToggleAdd,
}) => {
  const [imgError, setImgError] = useState(false);
  const imgSrc = typeof product.image === "string" ? product.image : product.image?.src || product.image;

  return (
    <div
      className="group bg-black rounded-[24px] sm:rounded-[28px] md:rounded-[32px] p-3.5 sm:p-4 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 w-full border border-white/5"
    >
      {/* Image Container with smooth rounded corners */}
      <div className="w-full aspect-square rounded-[18px] sm:rounded-[22px] md:rounded-[26px] overflow-hidden bg-neutral-900 relative flex items-center justify-center">
        {!imgError && imgSrc ? (
          <img
            src={imgSrc}
            alt={product.alt || product.title}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-800 text-neutral-400 p-4 text-center">
            <Dumbbell className="w-10 h-10 text-[#71AC16] mb-2" />
            <span className="text-xs font-medium text-neutral-300">{product.title}</span>
          </div>
        )}
      </div>

      {/* Product Info Footer inside black card */}
      <div className="pt-3 sm:pt-3.5 pb-1 px-1 sm:px-1.5 flex items-center justify-between gap-2">
        <div className="flex flex-col gap-0.5 min-w-0 flex-1">
          <h3 className="text-white text-sm sm:text-base font-semibold tracking-tight truncate">
            {product.title}
          </h3>
          <div className="flex items-center gap-2 mt-0.5 flex-wrap">
            <span className="text-white font-bold text-base sm:text-lg tracking-tight whitespace-nowrap tabular-nums">
              {product.price}
            </span>
            {/* 5 Green Stars */}
            <ProductStarRating count={product.rating} />
          </div>
        </div>

        {/* Bright Green Plus / Added Button */}
        <button
          type="button"
          onClick={() => onToggleAdd(product.id)}
          aria-label={isAdded ? `Remove ${product.title} from cart` : `Add ${product.title} to cart`}
          className={`w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all cursor-pointer select-none active:scale-90 ${
            isAdded
              ? "bg-[#358a1c] text-white"
              : "bg-[#49B829] hover:bg-[#52ce2e] text-white shadow-md shadow-green-900/30"
          }`}
        >
          {isAdded ? (
            <Check className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-[2.5]" />
          ) : (
            <Plus className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-[2.5]" />
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
