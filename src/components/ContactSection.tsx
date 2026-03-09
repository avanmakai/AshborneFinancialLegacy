import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke(
        "send-contact-email",
        { body: formData }
      );

      if (error) throw error;

      setIsSuccess(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      toast({ title: "Message sent successfully!", description: "We'll get back to you soon." });

      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      console.error(err);
      toast({ title: "Something went wrong", description: "Please try again later.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="bg-secondary">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left – copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              Get in Touch
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-3">
              Ready to Start Your <span className="text-gold-gradient">Financial Journey</span>?
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-md">
              Fill out the form and one of our financial strategists will reach
              out within 24 hours to discuss how we can help you eliminate debt
              and build lasting wealth.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Free initial consultation",
                "No obligation — just honest guidance",
                "Personalized strategy for your situation",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-foreground/80 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right – form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-card rounded-2xl p-8 shadow-lg border border-border space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                  Name <span className="text-destructive">*</span>
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  maxLength={100}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                  Email <span className="text-destructive">*</span>
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  maxLength={255}
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
                Phone <span className="text-muted-foreground">(optional)</span>
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="(555) 123-4567"
                value={formData.phone}
                onChange={handleChange}
                maxLength={20}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                Message <span className="text-destructive">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell us about your financial goals…"
                value={formData.message}
                onChange={handleChange}
                required
                maxLength={1000}
                className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-12 text-base font-semibold"
            >
              {isSubmitting ? (
                "Sending…"
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </>
              )}
            </Button>

            {isSuccess && (
              <p className="text-sm text-center text-accent font-medium">
                ✓ Your message has been sent. We'll be in touch shortly!
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
