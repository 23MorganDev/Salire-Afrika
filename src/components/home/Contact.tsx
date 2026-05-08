import { useState } from "react"
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Instagram, Twitter, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";


const Contact = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Convert FormData to a plain JSON object
    const data = Object.fromEntries(formData.entries());

    // Attach Web3Forms access key and config
    const payload = {
      ...data,
      access_key: "53073008-a68b-43dc-b605-3be051ca5bbc",
      subject: "New Application from Salire Afrika Website",
      from_name: "Salire Afrika Contact Form",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      // Add this line temporarily 👇
      console.log("Web3Forms response:", result);

      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-emerald-600 font-semibold tracking-wide uppercase text-sm mb-3">Get in Touch</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Start Your Journey With Salire Afrika
            </h3>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Have questions about our programs, accommodation, or the application process?
              Our team in Laikipia, Kenya is ready to help you plan your impactful stay.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="bg-emerald-50 p-3 rounded-lg text-emerald-600">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Phone & WhatsApp</p>
                  <p className="text-slate-600">+254 727 783 569</p>
                  <p className="text-slate-600">+254 759 77 54 73</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-emerald-50 p-3 rounded-lg text-emerald-600">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Email</p>
                  <p className="text-slate-600">info@salireafrika.or.ke</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-emerald-50 p-3 rounded-lg text-emerald-600">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Location</p>
                  <p className="text-slate-600">Laikipia, Kenya</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-emerald-600 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-emerald-600 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-emerald-600 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-100 shadow-xl shadow-black/5"
          >
            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    required
                    className="bg-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="bg-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="program">Program of Interest</Label>
                <select
                  id="program"
                  name="program"
                  className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option>Select a program</option>
                  <option>Animal Welfare</option>
                  <option>Child Welfare</option>
                  <option>Education: English & STEM</option>
                  <option>Girl Child Empowerment</option>
                  <option>Sports Empowerment</option>
                  <option>Community Outreach</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Your Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your interests and potential travel dates..."
                  className="min-h-[150px] bg-white"
                  required
                />
              </div>

              {/* Success message */}
              {status === "success" && (
                <div className="rounded-md bg-emerald-50 border border-emerald-200 p-4 text-emerald-700 text-sm">
                  ✅ Your application has been sent successfully! We'll be in touch soon.
                </div>
              )}

              {/* Error message */}
              {status === "error" && (
                <div className="rounded-md bg-red-50 border border-red-200 p-4 text-red-700 text-sm">
                  ❌ Something went wrong. Please try again or contact us directly.
                </div>
              )}

              <Button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white h-12 text-lg"
              >
                {status === "loading" ? "Sending..." : <>Send Application <Send className="ml-2 h-4 w-4" /></>}
              </Button>

            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;