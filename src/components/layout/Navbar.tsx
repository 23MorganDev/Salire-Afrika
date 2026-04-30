import { useState, useEffect } from "react";
import { Menu, X, Heart, Globe, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Programs", href: "#programs" },
    { name: "How to Apply", href: "#how-to-apply" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      {/* Top Info Bar - Desktop Only */}
      <div className={`hidden lg:block border-b transition-colors duration-300 ${
        scrolled ? "bg-slate-50/50 border-slate-200 text-slate-600" : "bg-black/20 border-white/10 text-white/90"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex justify-between items-center text-[11px] uppercase tracking-wider font-medium">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Globe className="h-3.5 w-3.5 text-emerald-500" />
                <span>
                  Join Salire Afrika for a life-changing volunteering experience. Support Teaching/Education, Empower Women & Girls, Medical Outreach, Special Needs, Animal Welfare, Climate Change, resilience and carbon crediting, Coding and A.I, Spin & Knit in the heart of East Africa.
                </span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-emerald-500" />
                <span>+254 727 783 569 / +254 759 77 54 73</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}>
          <div className="flex items-center gap-2">
            <div className="bg-emerald-600 p-2 rounded-lg">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <span className={`text-2xl font-bold tracking-tight ${scrolled ? "text-slate-900" : "text-white"}`}>
              Salire<span className="text-emerald-500">Afrika</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-emerald-500 ${
                  scrolled ? "text-slate-600" : "text-white/90"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a href="#how-to-apply">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white border-none shadow-lg shadow-emerald-600/20">
                Apply Now
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled ? "text-slate-900" : "text-white"}`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-4 pb-6 space-y-4">
            <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold border-b pb-2 mb-2">
              Our Volunteer Programs
            </div>
            <p className="text-xs text-slate-600 leading-relaxed italic">
              Join Salire Afrika for a life-changing volunteering experience. Support Teaching/Education, Empower Women & Girls, Medical Outreach, Special Needs, Animal Welfare, Climate Change, resilience and carbon crediting, Coding and A.I, Spin & Knit in the heart of East Africa.
            </p>
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-md transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pt-2">
              <a href="#how-to-apply" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-emerald-600 text-white shadow-md">Apply Now</Button>
              </a>
            </div>
            <div className="flex flex-col gap-2 pt-4 border-t text-[11px] text-slate-500">
              <div className="flex items-center gap-2">
                <Phone className="h-3 w-3 text-emerald-500" />
                <span>+254 727 783 569 / +254 759 77 54 73</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;