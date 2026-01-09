import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Features } from "@/components/Features";
import { GalleryPreview } from "@/components/GalleryPreview";
import { Testimonials } from "@/components/Testimonials";
import { Cta } from "@/components/Cta";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Features />
      <GalleryPreview />
      <Testimonials />
      <Cta />
      <ScrollToTop />
    </>
  );
}
