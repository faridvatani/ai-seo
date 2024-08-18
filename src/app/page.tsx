import { Features } from "@/sections/Features";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <LogoTicker />
      <Features />
    </main>
  );
}
