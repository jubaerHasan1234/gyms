"use client";
import React, { useState } from "react";
import { ProductItem } from "./types";
import { PRODUCTS } from "./productsData";
import { ProductsSectionHeader } from "./ProductsSectionHeader";
import { ProductCard } from "./ProductCard";

export type { ProductItem };
export { PRODUCTS };

export interface OurProductsSectionProps {
  className?: string;
}

export const OurProductsSection: React.FC<OurProductsSectionProps> = ({
  className = "",
}) => {
  const [addedIds, setAddedIds] = useState<number[]>([]);

  const handleAddProduct = (id: number) => {
    setAddedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section
      id="products"
      className={`w-full pt-2 sm:pt-3 md:pt-4 pb-6 sm:pb-10 md:pb-14 px-4 sm:px-6 md:px-8 lg:px-10 select-none relative scroll-mt-6 ${className}`}
    >
      {/* 1. Header with Title and Subtitle */}
      <ProductsSectionHeader />

      {/* 2. Responsive Product Grid:
             - Mobile Screen: 1 product per row
             - Tablet Screen: 2 products per row
             - Desktop Screen: 3 products per row
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
        {PRODUCTS.map((prod) => (
          <ProductCard
            key={prod.id}
            product={prod}
            isAdded={addedIds.includes(prod.id)}
            onToggleAdd={handleAddProduct}
          />
        ))}
      </div>
    </section>
  );
};

export default OurProductsSection;
