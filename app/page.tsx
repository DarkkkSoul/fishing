import About from "@/components/About";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Sponsors from "@/components/Sponsors";

export default function Home() {
  return (
    <div>
      <Hero />
      <Sponsors />
      <About />
      <Products />
    </div>
  );
}
