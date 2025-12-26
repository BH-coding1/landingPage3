import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { DashboardPreview } from "@/components/DashboardPreview";

export default function Home() {
  return (
    <div className="hero-gradient">
      <Navbar />
      <Hero />
      
    </div>
  );
}
