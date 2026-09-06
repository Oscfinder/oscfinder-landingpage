import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import ContactForm from "./components/ContactForm";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import DemoVideo from "./components/DemoVideo";

export default function LandingPage() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <Problem />
      <Features preview />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <ContactForm />
      {/* <FinalCTA /> */}
      <DemoVideo />
      <Footer />
    
    </main>
  );
}
