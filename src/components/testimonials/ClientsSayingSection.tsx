"use client";
import React from "react";
import { ClientLeftDropletGroup } from "./ClientLeftDropletGroup";
import { ClientRightDropletGroup } from "./ClientRightDropletGroup";
import { TestimonialCardData } from "./testimonialsData";
import { TESTIMONIALS } from "./testimonialsData";
import { ClientsSayingHeader } from "./ClientsSayingHeader";
import { TestimonialCard } from "./TestimonialCard";

export { ClientLeftDropletGroup, ClientRightDropletGroup };
export type { TestimonialCardData };

export interface ClientsSayingSectionProps {
  className?: string;
}

export const ClientsSayingSection: React.FC<ClientsSayingSectionProps> = ({
  className = "",
}) => {
  return (
    <section
      id="testimonials"
      className={`w-full pb-8 sm:pb-12 md:pb-16 select-none relative scroll-mt-6 ${className}`}
    >
      {/* 1. Header with Left and Right Droplets */}
      <ClientsSayingHeader />

      {/* 2. Light Grey Container with Rounded Corners */}
      <div className="w-full bg-[#ECEEF0] rounded-[24px] sm:rounded-[32px] md:rounded-[40px] lg:rounded-[44px] p-4 sm:p-6 md:p-8 lg:p-10 shadow-sm mt-3 sm:mt-4">
        {/* Responsive Grid of 6 Dark Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {TESTIMONIALS.map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSayingSection;
