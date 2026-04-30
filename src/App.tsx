import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import Programs from "./components/home/Programs";
import HowToApply from "./components/home/HowToApply";
import Stats from "./components/home/Stats";
import About from "./components/home/About";
import Contact from "./components/home/Contact";
import Footer from "./components/home/Footer";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Programs />
        <HowToApply />
        <About />
        <Contact />
      </main>
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
}

export default App;