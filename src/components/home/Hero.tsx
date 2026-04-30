import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/5a366f72-6596-4492-9b99-13345df78f3e/hero-volunteers-a2800ca2-1777275592145.webp"
          alt="Volunteers in Laikipia, Kenya"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-emerald-600/20 text-emerald-400 text-sm font-semibold mb-6 border border-emerald-500/30">
              Welcome to Salire Afrika
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Transform Lives While <span className="text-emerald-400">Discovering Laikipia, Kenya</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-2xl">
              Join Salire Afrika for a life-changing volunteering experience. 
              Support Teaching/Education, Empower Women & Girls, Medical Outreach, Special Needs, Animal Welfare, Climate Change, resilience and carbon crediting, Coding and A.I, Spin & Knit 
              in the heart of East Africa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white h-14 px-8 text-lg">
                Explore Programs <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white/30 bg-white/10 hover:bg-white/20 backdrop-blur-sm h-14 px-8 text-lg">
                Our Mission
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-white/90">
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                <span>Safe & Secure Accommodation</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                <span>Authentic Cultural Immersion</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                <span>Impact-Driven Local Programs</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                <span>Professional Local Support 24/7</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default Hero;