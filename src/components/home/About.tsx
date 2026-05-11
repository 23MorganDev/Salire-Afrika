import { motion } from "framer-motion";
import { Shield, Home, Users, Utensils } from "lucide-react";

const About = () => {
  const benefits = [
    {
      title: "Safe Accommodation",
      description: "Stay in our secure, vetted volunteer guesthouses with 24/7 security and comfortable amenities.",
      icon: <Home className="h-8 w-8 text-emerald-600" />
    },
    {
      title: "Cultural Immersion",
      description: "Experience the real Laikipia, Kenya through community events, language lessons, and weekend excursions.",
      icon: <Users className="h-8 w-8 text-emerald-600" />
    },
    {
      title: "Full Support",
      description: "Our local team provides airport pickup, orientation, and 24/7 in-country support for your peace of mind.",
      icon: <Shield className="h-8 w-8 text-emerald-600" />
    },
    {
      title: "Local Meals",
      description: "Enjoy nutritious, authentic Kenyan meals prepared daily by our local catering team.",
      icon: <Utensils className="h-8 w-8 text-emerald-600" />
    }
  ];

  const team = [
    {
      name: "Pauline W. Njiru",
      role: "Founder",
      image: "https://storage.googleapis.com/dala-prod-public-storage/attachments/b51397a8-5aff-4f34-8617-20fb234d9db9/1777448974980_Pauline_W._Njiru.jpg"
    },
    {
      name: 'Julius Githimi "Uncle J"',
      role: "Founder",
      image: "https://storage.googleapis.com/dala-prod-public-storage/attachments/b51397a8-5aff-4f34-8617-20fb234d9db9/1778519778477_Uncle_J.jpg"
    },
    {
      name: "Michael Kinyua",
      role: "Founder",
      image: "https://storage.googleapis.com/dala-prod-public-storage/attachments/b51397a8-5aff-4f34-8617-20fb234d9db9/1777450775746_Michael_Kinyua_co-founder.jpg"
    }
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-emerald-600 font-semibold tracking-wide uppercase text-sm mb-3">About Salire Afrika</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              A Mission to Empower <br className="hidden md:block" /> and Bridge Cultures
            </h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Founded in Laikipia, Kenya, Salire Afrika serves as a bridge between global volunteers and impactful local initiatives. We believe that sustainable development is best achieved through collaboration, education, and mutual respect.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our "paid volunteering" model ensures that every dollar contributes directly to the local economy, host organizations, and the maintenance of high-quality support services for our volunteers. Our volunteering programs duration ranges from 1 week up to 20 weeks.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-emerald-50 px-4 py-2 rounded-full text-emerald-700 font-medium border border-emerald-100">
                8+ Years Experience
              </div>
              <div className="bg-emerald-50 px-4 py-2 rounded-full text-emerald-700 font-medium border border-emerald-100">
                100% Local Kenyan Team
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/5a366f72-6596-4492-9b99-13345df78f3e/volunteer-house-bf348c76-1777275591831.webp"
                alt="Volunteer Community"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent" />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl hidden md:block max-w-xs border border-slate-100">
              <p className="text-4xl font-bold text-emerald-600 mb-2">100%</p>
              <p className="text-slate-900 font-bold mb-1">Authentic Kenyan Experience</p>
              <p className="text-slate-500 text-sm">Every program is managed by locals who know the community best.</p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100"
            >
              <div className="mb-6">{benefit.icon}</div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h4>
              <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Team Section */}
        <div className="pt-16 border-t border-slate-100">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-emerald-600 font-semibold tracking-wide uppercase text-sm mb-3">Our Leadership</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Meet Our Team</h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Dedicated professionals committed to making a difference in the Laikipia community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-3xl aspect-square shadow-lg mb-6 bg-slate-100 flex items-center justify-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/5 to-transparent pointer-events-none" />
                </div>
                <div className="text-center">
                  <h4 className="text-2xl font-bold text-slate-900 mb-1">{member.name}</h4>
                  <p className="text-emerald-600 font-medium">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
