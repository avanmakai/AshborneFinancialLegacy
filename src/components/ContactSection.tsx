import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    shortTermGoals: "",
    longTermGoals: "",
    cashFlowOverview: "",
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

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: [
            formData.shortTermGoals && `Short-Term Financial Goals:\n${formData.shortTermGoals}`,
            formData.longTermGoals && `Long-Term Generational Wealth Goals:\n${formData.longTermGoals}`,
            formData.cashFlowOverview && `Current Cash Flow Overview:\n${formData.cashFlowOverview}`,
          ]
            .filter(Boolean)
            .join("\n\n") || "No additional details provided.",
        },
      });

      if (error) throw error;

      setIsSuccess(true);
      setFormData({ name: "", email: "", phone: "", shortTermGoals: "", longTermGoals: "", cashFlowOverview: "" });
      toast({ title: "Request sent successfully!", description: "We'll be in touch shortly." });
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      console.error(err);
      toast({ title: "Something went wrong", description: "Please try again later.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const textareaClasses =
    "flex w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm resize-none";

  return (
    <section id="contact-form" className="section-padding bg-background">
      <div className="container-max max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-sm font-semibold text-gold uppercase tracking-widest">
            Get Started
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-bold text-foreground">
            Take the First Step
          </h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Fill out the form below to request your introductory 1-on-1 coaching session.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-card rounded-2xl p-8 shadow-lg border border-gold/20 space-y-5"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
              Full Name <span className="text-destructive">*</span>
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
              Email Address <span className="text-destructive">*</span>
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

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
              Phone Number <span className="text-destructive">*</span>
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="(555) 123-4567"
              value={formData.phone}
              onChange={handleChange}
              required
              maxLength={20}
            />
          </div>

          <div>
            <label htmlFor="shortTermGoals" className="block text-sm font-medium text-foreground mb-1.5">
              Short-Term Financial Goals
            </label>
            <textarea
              id="shortTermGoals"
              name="shortTermGoals"
              rows={3}
              placeholder="What financial goals do you want to achieve in the near future?"
              value={formData.shortTermGoals}
              onChange={handleChange}
              maxLength={1000}
              className={textareaClasses}
            />
          </div>

          <div>
            <label htmlFor="longTermGoals" className="block text-sm font-medium text-foreground mb-1.5">
              Long-Term Generational Wealth Goals
            </label>
            <textarea
              id="longTermGoals"
              name="longTermGoals"
              rows={3}
              placeholder="What does building generational wealth look like for you?"
              value={formData.longTermGoals}
              onChange={handleChange}
              maxLength={1000}
              className={textareaClasses}
            />
          </div>

          <div>
            <label htmlFor="cashFlowOverview" className="block text-sm font-medium text-foreground mb-1.5">
              Current Cash Flow Overview{" "}
              <span className="text-muted-foreground font-normal">(Optional)</span>
            </label>
            <textarea
              id="cashFlowOverview"
              name="cashFlowOverview"
              rows={3}
              placeholder="Brief summary of your income vs. debt…"
              value={formData.cashFlowOverview}
              onChange={handleChange}
              maxLength={1000}
              className={textareaClasses}
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gold text-accent-foreground hover:bg-gold/90 h-12 text-base font-semibold"
          >
            {isSubmitting ? (
              "Sending…"
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Request Your Coaching Session
              </>
            )}
          </Button>

          {isSuccess && (
            <p className="text-sm text-center text-accent font-medium">
              ✓ Your request has been sent. We'll be in touch shortly!
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
