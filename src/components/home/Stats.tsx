import { motion } from "framer-motion";
import { Users, Home, Globe2, Award } from "lucide-react";

const stats = [
  { label: "Volunteers Hosted", value: "500+", icon: <Users className="h-6 w-6" /> },
  { label: "Communities Supported", value: "25+", icon: <Globe2 className="h-6 w-6" /> },
  { label: "Partner Organizations", value: "15+", icon: <Home className="h-6 w-6" /> },
  { label: "Years of Impact", value: "8+", icon: <Award className="h-6 w-6" /> },
];

const Stats = () => {
  return (
    <section className="py-20 bg-emerald-900 text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-emerald-800 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-emerald-800 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-emerald-800/50 p-3 rounded-2xl border border-emerald-700/50">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
              <div className="text-emerald-200 text-sm md:text-base font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;