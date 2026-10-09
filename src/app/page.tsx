import { HeroSection } from '@/components/hero/HeroSection';
import { ProductDropletsOverlay } from '@/components/products/ProductDropletsOverlay';
import { OurProductsSection } from '@/components/products/OurProductsSection';
import { TrainLikeChampionSection } from '@/components/training/TrainLikeChampionSection';
import { ClientsSayingSection } from '@/components/testimonials/ClientsSayingSection';
import { NewsletterSection } from '@/components/newsletter/NewsletterSection';
import { FooterSection } from '@/components/footer/FooterSection';

export default function HomePage() {
  return (
    <div id="home" className="min-h-screen bg-[#ffffff] flex flex-col items-center">
      {/* Main Canvas Container */}
      <main className="w-full max-w-[1480px] p-3 sm:p-6 lg:p-8 mx-auto flex flex-col">
        {/* Responsive Hero Section */}
        <div className="w-full overflow-hidden bg-white">
          <HeroSection />
        </div>

        {/* ProductDropletsOverlay component directly above Our Products Section */}
        <div className="w-full relative bg-white select-none pointer-events-none">
          <ProductDropletsOverlay />
        </div>

        {/* Our Products Section */}
        <div id="products" className="w-full bg-white m-0 p-0 scroll-mt-6">
          <OurProductsSection />
        </div>

        {/* Train Like a Champion Section */}
        <div id="training" className="w-full bg-white m-0 p-0 scroll-mt-6">
          <TrainLikeChampionSection />
        </div>

        {/* What Our Clients Are Saying Testimonials Section */}
        <div id="testimonials" className="w-full bg-white m-0 p-0 scroll-mt-6">
          <ClientsSayingSection />
        </div>

        {/* Subscribe to our Newsletter Section */}
        <div id="newsletter" className="w-full bg-white m-0 p-0 scroll-mt-6">
          <NewsletterSection />
        </div>

        {/* Modern Attractive Footer Section */}
        <div id="contact-footer" className="w-full bg-white m-0 p-0 mt-4 sm:mt-8">
          <FooterSection />
        </div>
      </main>
    </div>
  );
}
