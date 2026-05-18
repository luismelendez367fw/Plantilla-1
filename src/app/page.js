import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import Features from "@/components/Features";
import BrandGallery from "@/components/BrandGallery";
import Pricing from "@/components/Pricing";
import EventsSection from "@/components/EventsSection";
import StoreSection from "@/components/StoreSection";
import BookingSection from "@/components/BookingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <main className="section-paper">
        <AboutSection />
        <Features />
        <BrandGallery />
        <Pricing />
        <EventsSection />
        <StoreSection />
        <BookingSection />
        <TestimonialsSection />
        <BlogSection />
        <FAQ />
        <ContactForm />
      </main>
      <Footer className="section-paper border-t border-carbon/10" />
    </>
  );
}
