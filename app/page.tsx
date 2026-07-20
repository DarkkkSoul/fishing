import About from "@/components/About";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Sponsors from "@/components/Sponsors";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <Sponsors />
      <About />
      <Products />
      <Testimonials />
    </div>
  );
}
