import About from "@/components/About";
import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Sponsors from "@/components/Sponsors";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/utils/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <Sponsors />
      <About />
      <Products />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
