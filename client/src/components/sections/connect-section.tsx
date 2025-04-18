import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import ContactForm from "@/components/forms/contact-form";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import ErrorTest from "@/components/error-test";
import useErrorBoundary from "@/hooks/use-error-boundary";

export default function ConnectSection() {
  const { targetRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    onlyOnce: true,
  });
  
  // Use our custom error boundary hook
  const { ErrorBoundaryWrapper } = useErrorBoundary();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section 
      id="connect" 
      className={`py-32 bg-gray-50/50 dark:bg-gray-900/50 backdrop-blur-3xl section-fade-in ${isIntersecting ? 'visible' : ''} relative overflow-hidden`}
      ref={targetRef as React.RefObject<HTMLElement>}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-950 opacity-70"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 inline-block">
            <span className="relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                Connect
              </span>
              <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 to-transparent"></span>
            </span>
          </h2>
          <p className="text-2xl sm:text-3xl mb-4 text-gray-700 dark:text-gray-200 font-light">
            This isn't a pitch. It's an invitation.
          </p>
        </motion.div>
        
        <div className="md:grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="mb-16 md:mb-0"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h3 
              className="text-2xl font-semibold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300"
              variants={itemVariants}
            >
              Let's dream together
            </motion.h3>
            
            <div className="space-y-6 mb-10">
              {[
                "If you believe technology should elevate the human experience...",
                "If you seek inspiration, not just efficiency...",
                "If you're ready to dream bigger…",
                "If you want to explore the frontiers of possibility..."
              ].map((text, index) => (
                <motion.p 
                  key={index} 
                  className="text-lg text-gray-600 dark:text-gray-300 font-light leading-relaxed flex items-start"
                  variants={itemVariants}
                >
                  <span className="text-primary mr-3 text-lg font-medium">→</span>
                  {text}
                </motion.p>
              ))}
            </div>
            
            <motion.div variants={itemVariants}>
              <a 
                href="mailto:hi@dreamer.xyz" 
                className="text-xl text-primary hover:text-primary/80 transition-colors group inline-flex items-center"
              >
                hi@dreamer.xyz
                <ArrowUpRight className="ml-1 h-4 w-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
              </a>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 font-light">
                Let's begin a conversation
              </p>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }
            }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            {/* Wrap ContactForm in an error boundary */}
            <ErrorBoundaryWrapper>
              <ContactForm />
            </ErrorBoundaryWrapper>
            
            {/* Add the error test component to demonstrate error boundaries */}
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Error Boundary Demo</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                This component demonstrates how error boundaries prevent the entire app from crashing when errors occur.
              </p>
              <ErrorTest />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
