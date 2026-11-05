import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import HighlightsBar from "./components/sections/HighlightsBar";
import Treatments from "./components/sections/Treatments";
import DoctorSection from "./components/sections/DoctorSection";
import Booking from "./components/booking/Booking";
import Faq from "./components/sections/Faq";
import Footer from "./components/sections/Footer";
import WhatsAppFloat from "./components/ui/WhatsAppFloat";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HighlightsBar />
        <Treatments />
        <DoctorSection />
        <Booking />
        <Faq />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
