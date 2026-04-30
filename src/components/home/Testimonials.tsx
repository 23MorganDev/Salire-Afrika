import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    country: "United Kingdom",
    program: "Teaching Program",
    quote: "My time with Salire Afrika was truly life-changing. The support from the local team in Laikipia was incredible, and I felt like I was making a real impact in the classroom every day.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/5a366f72-6596-4492-9b99-13345df78f3e/sarah-jenkins-testimonial-7f225960-1777449870783.webp",
    rating: 5
  },
  {
    name: "Mark van der Berg",
    country: "Netherlands",
    program: "Medical Outreach",
    quote: "The medical outreach program is exceptionally well-organized. I was able to use my skills to help communities that rarely see a doctor. An eye-opening and rewarding experience.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/5a366f72-6596-4492-9b99-13345df78f3e/mark-van-der-berg-testimonial-e524b38e-1777449870679.webp",
    rating: 5
  },
  {
    name: "Chloe Dubois",
    country: "France",
    program: "Women Empowerment",
    quote: "Empowering women and girls in Laikipia was a dream come true. Salire Afrika provides a safe and immersive environment to really connect with the local culture.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/5a366f72-6596-4492-9b99-13345df78f3e/chloe-dubois-testimonial-f7672e93-1777449870199.webp",
    rating: 5
  },
  {
    name: "James Wilson",
    country: "USA",
    program: "Coding & A.I",
    quote: "Teaching A.I. and coding to the youth in Kenya was fantastic. The students are so eager to learn. Salire Afrika's vision for the future of the community is inspiring.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/5a366f72-6596-4492-9b99-13345df78f3e/james-wilson-testimonial-a6989aa7-1777449870112.webp",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-emerald-600 font-semibold tracking-wide uppercase text-sm mb-3">Volunteer Stories</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Our Volunteers Say</h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Real experiences from people who have joined our programs and made a difference in Laikipia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <Quote className="h-8 w-8 text-emerald-100 mb-4" />
              <p className="text-slate-600 mb-8 italic flex-grow">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{testimonial.name}</h4>
                  <p className="text-emerald-600 text-xs font-medium">{testimonial.country}</p>
                  <p className="text-slate-400 text-[10px] uppercase tracking-wider">{testimonial.program}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;