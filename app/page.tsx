import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import GalleryGrid from '@/components/GalleryGrid';
import FeaturedCollections from '@/components/FeaturedCollections';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-cream">
      <Header />
      <HeroSection />
      <GalleryGrid />
      <FeaturedCollections />
      <AboutSection />
      <Footer />
    </main>
  );
}
