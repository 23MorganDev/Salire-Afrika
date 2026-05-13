import { motion } from "framer-motion";
import {
  PawPrint,
  BookOpen,
  Leaf,
  Code2,
  Stethoscope,
  HeartHandshake,
  HandHeart,
  Scissors
} from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const programs = [
  {
    title: "Teaching/Education",
    description: "Assist in local primary and secondary schools to improve literacy, support teachers, and provide academic mentorship to students in Laikipia.",
    icon: <BookOpen className="h-6 w-6" />,
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/5a366f72-6596-4492-9b99-13345df78f3e/teaching-education-kenya-volunteer-f1cb69fc-1777276765230.webp",
    color: "bg-blue-500",
    tag: "Education"
  },
  {
    title: "Empower Women & Girls",
    description: "Participate in mentorship programs, reproductive health workshops, and leadership training designed to break cultural barriers and empower the next generation.",
    icon: <HeartHandshake className="h-6 w-6" />,
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/5a366f72-6596-4492-9b99-13345df78f3e/empower-women-girls-kenya-volunteer-1b735b45-1777276765730.webp",
    color: "bg-pink-500",
    tag: "Empowerment"
  },
  {
    title: "Medical Outreach",
    description: "Support healthcare professionals in providing essential medical services, community health screenings, and hygiene education to rural settlements.",
    icon: <Stethoscope className="h-6 w-6" />,
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/5a366f72-6596-4492-9b99-13345df78f3e/medical-outreach-kenya-volunteer-c74db19d-1777276764857.webp",
    color: "bg-red-500",
    tag: "Healthcare"
  },
  {
    title: "Special Needs",
    description: "Provide dedicated care and inclusive educational support for children and adults with disabilities in community-run specialized centers.",
    icon: <HandHeart className="h-6 w-6" />,
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/5a366f72-6596-4492-9b99-13345df78f3e/special-needs-kenya-volunteer-aab37c75-1777276765242.webp",
    color: "bg-indigo-500",
    tag: "Inclusion"
  },
  {
    title: "Animal Welfare",
    description: "Volunteer with wildlife conservancies and community vet clinics to protect endangered species and improve the health of local community livestock.",
    icon: <PawPrint className="h-6 w-6" />,
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/5a366f72-6596-4492-9b99-13345df78f3e/animal-welfare-kenya-343f4875-1777276204040.webp",
    color: "bg-orange-500",
    tag: "Wildlife"
  },
  {
    title: "Climate Change & Resilience",
    description: "Contribute to reforestation, carbon crediting initiatives, and sustainable farming practices to build environmental resilience in the highlands of Laikipia, Kenya.",
    icon: <Leaf className="h-6 w-6" />,
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/5a366f72-6596-4492-9b99-13345df78f3e/climate-change-resilience-kenya-2692bd4c-1777276764057.webp",
    color: "bg-emerald-500",
    tag: "Environment"
  },
  {
    title: "Coding and A.I",
    description: "Introduce students to the future of technology through coding workshops, AI concepts, and digital literacy training in rural schools and tech hubs.",
    icon: <Code2 className="h-6 w-6" />,
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/5a366f72-6596-4492-9b99-13345df78f3e/coding-ai-kenya-volunteer-facf5469-1777276765673.webp",
    color: "bg-purple-500",
    tag: "Technology"
  },
  {
    title: "Spin & Knit",
    description: "Collaborate with local women's groups to process raw sheep wool into handmade carpets and textiles using traditional looming and knitting techniques.",
    icon: <Scissors className="h-6 w-6" />,
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/5a366f72-6596-4492-9b99-13345df78f3e/spin---knit-program-1a5025e6-1777276205948.webp",
    color: "bg-teal-500",
    tag: "Artisan"
  }
];

const Programs = () => {
  return (
    <section id="programs" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-emerald-600 font-semibold tracking-wide uppercase text-sm mb-3">Our Programs</h2>
            <p className="mt-2 text-3xl md:text-4xl font-extrabold text-slate-900 sm:text-4xl">
              Make Your Mark in Laikipia
            </p>
            <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
              Choose from our diverse range of volunteer programs designed to create sustainable impact in Kenyan communities.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden bg-white flex flex-col">
                <div className="relative h-48 overflow-hidden shrink-0">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className={`${program.color} text-white border-none shadow-sm`}>
                      {program.tag}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <div className={`w-10 h-10 rounded-lg ${program.color} flex items-center justify-center text-white mb-3 shadow-lg shadow-black/5`}>
                    {program.icon}
                  </div>
                  <CardTitle className="text-lg font-bold text-slate-900">{program.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription className="text-slate-600 text-sm leading-relaxed">
                    {program.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 p-0 h-auto font-semibold group/btn">
                    Join Program <span className="ml-1 group-hover/btn:translate-x-1 transition-transform">→</span>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
