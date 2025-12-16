import { LizHappyColorsSplash } from "@/components/LizHappyColorsSplash";
import FeaturedServices from "@/components/sections/FeaturedServices";
import Statement from "@/components/sections/Statement";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <LizHappyColorsSplash />
      <FeaturedServices />
      <Statement />
      <PortfolioPreview />
      <Testimonials />
    </div>
  );
}
