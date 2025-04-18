import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { ContactMessage } from "@/lib/types";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";

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
    <Card className="blur-backdrop overflow-hidden shadow-md relative border-[#e8e8ed]/60">
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#0071e3]/5 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#0071e3]/5 rounded-full filter blur-3xl"></div>
      
      <CardContent className="p-8 relative z-10">
        <h3 className="text-2xl font-semibold mb-6 text-[#1d1d1f]">Get in touch</h3>
        
        {isSubmitted ? (
          <motion.div 
            className="py-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mx-auto w-16 h-16 bg-[#0071e3]/10 rounded-full flex items-center justify-center mb-6">
              <Check className="h-8 w-8 text-[#0071e3]" />
            </div>
            <h4 className="text-xl font-medium mb-3 text-[#1d1d1f]">Thank you!</h4>
            <p className="text-[#86868b] mb-6">
              Your message has been sent successfully. We'll be in touch with you shortly.
            </p>
            <Button 
              variant="outline" 
              className="rounded-full px-6 py-2.5 border-[#d2d2d7] hover:border-[#86868b] text-[#1d1d1f]"
              onClick={() => setIsSubmitted(false)}
            >
              Send another message
            </Button>
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
                      <Input 
                        {...field} 
                        className="apple-input h-11 bg-white/80 border-[#d2d2d7] rounded-lg focus:border-[#0071e3] focus-visible:ring-1 focus-visible:ring-[#0071e3]"
                        placeholder="John Appleseed"
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
                      <Input 
                        {...field} 
                        type="email" 
                        className="apple-input h-11 bg-white/80 border-[#d2d2d7] rounded-lg focus:border-[#0071e3] focus-visible:ring-1 focus-visible:ring-[#0071e3]"
                        placeholder="john@example.com"
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
                      <Textarea 
                        {...field} 
                        rows={4} 
                        className="apple-input bg-white/80 border-[#d2d2d7] rounded-lg focus:border-[#0071e3] focus-visible:ring-1 focus-visible:ring-[#0071e3] resize-none"
                        placeholder="I'd like to discuss a potential AI project..."
                      />
                    </FormControl>
                    <FormMessage className="text-[#ff3b30] text-xs" />
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit" 
                className="w-full group px-6 py-2.5 h-11 bg-[#0071e3] hover:bg-[#0077ed] text-white rounded-full font-medium transition-all duration-200 flex justify-center items-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </>
                )}
              </Button>
            </form>
          </Form>
        )}
      </CardContent>
    </Card>
  );
}
