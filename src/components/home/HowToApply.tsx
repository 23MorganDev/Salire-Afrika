import { motion } from "framer-motion";
import { Search, FileText, MessageSquare, ClipboardCheck, PlaneLanding, ArrowRight } from "lucide-react";

const HowToApply = () => {
  const steps = [
    {
      title: "Explore Programs",
      description: "Browse through our diverse volunteer programs in Laikipia and choose the one that aligns with your skills and passion.",
      icon: <Search className="h-8 w-8 text-emerald-600" />,
      color: "bg-emerald-50"
    },
    {
      title: "Complete Application Form",
      description: "Fill out our online application form with your details, preferred dates, and why you want to join our community.",
      icon: <FileText className="h-8 w-8 text-emerald-600" />,
      color: "bg-emerald-50"
    },
    {
      title: "Screening & Interview",
      description: "Our team will review your application and schedule a brief interview to ensure a great fit for both you and the program.",
      icon: <MessageSquare className="h-8 w-8 text-emerald-600" />,
      color: "bg-emerald-50"
    },
    {
      title: "Placement & Preparation",
      description: "Once accepted, we'll finalize your placement, discuss logistics, and provide you with a comprehensive pre-departure guide.",
      icon: <ClipboardCheck className="h-8 w-8 text-emerald-600" />,
      color: "bg-emerald-50"
    },
    {
      title: "Arrival & Orientation",
      description: "Fly to Kenya! We'll pick you up from the airport and provide a thorough orientation to settle you into your new home.",
      icon: <PlaneLanding className="h-8 w-8 text-emerald-600" />,
      color: "bg-emerald-50"
    }
  ];

  return (
    <section id="how-to-apply" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-emerald-600 font-semibold tracking-wide uppercase text-sm mb-3">Your Journey Starts Here</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">How to Apply</h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Follow these simple steps to begin your life-changing volunteering experience with Salire Afrika in Kenya.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-emerald-100 -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className={`w-20 h-20 rounded-2xl ${step.color} flex items-center justify-center mb-6 shadow-sm border border-emerald-100 group-hover:scale-110 transition-transform duration-300 relative bg-white`}>
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                    {index + 1}
                  </div>
                  {step.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {step.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {step.description}
                </p>
                {index < steps.length - 1 && (
                  <div className="lg:hidden mt-6 text-emerald-200">
                    <ArrowRight className="h-6 w-6 rotate-90 md:rotate-0 mx-auto" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 bg-emerald-600 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl shadow-emerald-600/20"
        >
          <h4 className="text-2xl md:text-3xl font-bold mb-4">Ready to Make an Impact?</h4>
          <p className="text-emerald-50 mb-8 max-w-xl mx-auto">
            Our team is here to guide you through every step of the process. Start your application today and join the Salire Afrika family.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-600 font-bold rounded-full hover:bg-emerald-50 transition-colors shadow-lg"
          >
            Start Your Application Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowToApply;