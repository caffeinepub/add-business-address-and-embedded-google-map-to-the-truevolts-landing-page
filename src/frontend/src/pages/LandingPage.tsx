import { useEffect } from 'react';
import Navbar from '../components/landing/Navbar';
import LandingSlider from '../components/landing/LandingSlider';
import HeroSection from '../components/landing/HeroSection';
import AboutSection from '../components/landing/AboutSection';
import ServicesSection from '../components/landing/ServicesSection';
import TrainingProgramsSection from '../components/landing/TrainingProgramsSection';
import GallerySection from '../components/landing/GallerySection';
import StudentReviewsSection from '../components/landing/StudentReviewsSection';
import ContactSection from '../components/landing/ContactSection';
import Footer from '../components/landing/Footer';
import WhatsAppFloatingButton from '../components/landing/WhatsAppFloatingButton';
import ScrollToHash from '../components/landing/ScrollToHash';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToHash />
      <Navbar />
      {/* Add top padding to account for fixed navbar (h-16 = 64px) plus spacing */}
      <div className="pt-16">
        <div className="pt-4 sm:pt-6 md:pt-8">
          <LandingSlider />
        </div>
      </div>
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TrainingProgramsSection />
        <GallerySection />
        <StudentReviewsSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}
