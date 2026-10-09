import React from "react";
import { Star } from "lucide-react";

export interface ProductStarRatingProps {
  count?: number;
}

export const ProductStarRating: React.FC<ProductStarRatingProps> = ({ count = 5 }) => {
  return (
    <div className="flex items-center gap-0.5 flex-shrink-0">
      {[...Array(count)].map((_, i) => (
        <Star
          key={i}
          className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-[#47B727] text-[#47B727]"
        />
      ))}
    </div>
  );
};

export default ProductStarRating;
