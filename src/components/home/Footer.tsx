import { Heart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const programs = [
    "Teaching/Education",
    "Empower Women & Girls",
    "Medical Outreach",
    "Special Needs",
    "Animal Welfare",
    "Climate Change & Resilience",
    "Coding and A.I",
    "Spin & Knit"
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-emerald-600 p-2 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                Salire<span className="text-emerald-500">Afrika</span>
              </span>
            </div>
            <p className="text-slate-400 max-w-sm mb-6 leading-relaxed text-sm">
              Salire Afrika is a Laikipia-based volunteer hosting organization dedicated to sustainable community development and cultural exchange.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Programs</h4>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program}>
                  <a 
                    href="#programs" 
                    className="hover:text-emerald-400 transition-colors text-sm"
                  >
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="hover:text-emerald-400 transition-colors text-sm">About Us</a></li>
              <li><a href="#how-to-apply" className="hover:text-emerald-400 transition-colors text-sm">How to Apply</a></li>
              <li><a href="#contact" className="hover:text-emerald-400 transition-colors text-sm">Contact</a></li>
              <li><a href="#contact" className="hover:text-emerald-400 transition-colors text-sm">Apply Now</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors text-sm">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <Mail className="h-5 w-5 text-emerald-500 shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="mailto:salireafrika@gmail.com" className="hover:text-white transition-colors">salireafrika@gmail.com</a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Phone className="h-5 w-5 text-emerald-500 shrink-0" />
                <div className="flex flex-col gap-1">
                  <span>+254 727 783 569</span>
                  <span>+254 759 77 54 73</span>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin className="h-5 w-5 text-emerald-500 shrink-0" />
                <span>Laikipia, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © {new Date().getFullYear()} Salire Afrika. All rights reserved. Based in Laikipia, Kenya.
          </p>
          <p className="text-sm text-slate-500 italic">
            Empowering communities, one volunteer at a time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;