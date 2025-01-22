import Footer from "@/components/footer";
import MadeByMeFooter from "@/components/made-by-me-footer";
import { Services } from "@/components/services";
import { StickyNavbar } from "@/components/sticky-navbar";
import TestimonialCarousel from "@/components/testimonial";
import  HeroSection  from "@/components/hero-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <StickyNavbar />
      <HeroSection />
      {/* <Partners /> */}
      <section id="#services">
      <Services /> 
      </section>
      <TestimonialCarousel />
      <Footer />
      <MadeByMeFooter />
    </div>
  );
}
