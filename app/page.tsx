import { Benefits } from "./ui/home/benefits-section";
import { Features } from "./ui/home/features-section";
import { Hero } from "./ui/home/hero-section";
import { Testimonials } from "./ui/home/testimonials-section";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Benefits />
      <Testimonials />
    </main>
  );
}
