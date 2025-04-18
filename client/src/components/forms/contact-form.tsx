import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { ContactMessage } from "@/lib/types";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { appleEasing } from "@/styles/typography";

// Import our new Apple-styled components
import { AppleCard } from "@/components/ui/apple-card";
import { AppleButton } from "@/components/ui/apple-button";
import { AppleInput } from "@/components/ui/apple-input";
import { AppleTextarea } from "@/components/ui/apple-textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    try {
      await apiRequest("POST", "/api/contact", values as ContactMessage);
      
      toast({
        title: "Message sent",
        description: "Thank you for reaching out. We'll be in touch soon!",
      });
      
      setIsSubmitted(true);
      form.reset();
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Your message could not be sent. Please try again later.",
        variant: "destructive",
      });
      console.error("Contact form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <AppleCard 
      variant="glass" 
      padding="lg" 
      hover="lift" 
      className="overflow-hidden relative"
    >
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-apple-blue-light rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-apple-blue-light rounded-full filter blur-3xl"></div>
      
      <div className="relative z-10">
        <h3 className="text-2xl font-semibold mb-6 text-apple-gray-500">Get in touch</h3>
        
        {isSubmitted ? (
          <motion.div 
            className="py-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: appleEasing }}
          >
            <div className="mx-auto w-16 h-16 bg-apple-blue-light rounded-full flex items-center justify-center mb-6 animate-pulse-slow">
              <Check className="h-8 w-8 text-apple-blue-primary" />
            </div>
            <h4 className="text-xl font-medium mb-3 text-apple-gray-500">Thank you!</h4>
            <p className="text-apple-gray-300 mb-6">
              Your message has been sent successfully. We'll be in touch with you shortly.
            </p>
            <AppleButton 
              variant="secondary" 
              size="md"
              onClick={() => setIsSubmitted(false)}
            >
              Send another message
            </AppleButton>
          </motion.div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#1d1d1f] text-sm font-medium">
                      Your name
                    </FormLabel>
                    <FormControl>
                      <AppleInput 
                        {...field} 
                        placeholder="John Appleseed"
                        error={form.formState.errors.name?.message}
                      />
                    </FormControl>
                    <FormMessage className="text-[#ff3b30] text-xs" />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#1d1d1f] text-sm font-medium">
                      Your email
                    </FormLabel>
                    <FormControl>
                      <AppleInput 
                        {...field} 
                        type="email" 
                        placeholder="john@example.com"
                        error={form.formState.errors.email?.message}
                      />
                    </FormControl>
                    <FormMessage className="text-[#ff3b30] text-xs" />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#1d1d1f] text-sm font-medium">
                      Your message
                    </FormLabel>
                    <FormControl>
                      <AppleTextarea 
                        {...field} 
                        rows={4} 
                        placeholder="I'd like to discuss a potential AI project..."
                        error={form.formState.errors.message?.message}
                      />
                    </FormControl>
                    <FormMessage className="text-[#ff3b30] text-xs" />
                  </FormItem>
                )}
              />
              
              <AppleButton 
                type="submit" 
                variant="primary"
                size="lg"
                fullWidth
                disabled={isSubmitting}
                className="group"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </>
                )}
              </AppleButton>
            </form>
          </Form>
        )}
      </div>
    </AppleCard>
  );
}
