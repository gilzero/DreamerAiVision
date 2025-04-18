import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { appleEasing } from "@/styles/typography";
import { AppleButton } from "@/components/ui/apple-button";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: appleEasing
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 md:py-24">
      {/* Subtle gradient background - Apple-inspired */}
      <div className="absolute inset-0 bg-gradient-to-br from-apple-gray-50 via-white to-apple-gray-50"></div>
      
      {/* Background decorative elements with Apple-inspired subtle gradients */}
      <div className="absolute top-1/4 -left-20 w-[80vh] h-[80vh] bg-apple-blue-light/[0.03] rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-20 w-[70vh] h-[70vh] bg-apple-blue-light/[0.03] rounded-full filter blur-3xl"></div>
      <div className="absolute top-1/2 left-1/3 w-[50vh] h-[50vh] bg-apple-accent-orange/[0.02] rounded-full filter blur-3xl"></div>
      
      {/* Centered content - resembling the screenshot layout */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center">
        <motion.div 
          className="flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main title */}
          <motion.h1 
            className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight mb-8 sm:mb-10 text-apple-gray-500 leading-tight"
            variants={itemVariants}
          >
            Dreamer AI Studios
          </motion.h1>
          
          {/* Tagline with colored words */}
          <motion.p 
            className="text-xl sm:text-2xl mb-8 text-apple-gray-500 font-light max-w-3xl mx-auto"
            variants={itemVariants}
          >
            The intersection of{" "}
            <motion.span 
              className="relative inline-block text-apple-blue-primary font-normal"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <span className="relative z-10">imagination</span>
              <span className="absolute inset-0 bg-apple-blue-light/20 rounded-md -z-10 blur-[8px] opacity-70"></span>
            </motion.span>{" "}
            and{" "}
            <motion.span 
              className="relative inline-block text-apple-accent-orange font-normal"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <span className="relative z-10">intelligence</span>
              <span className="absolute inset-0 bg-apple-accent-orange/20 rounded-md -z-10 blur-[8px] opacity-70"></span>
            </motion.span>
          </motion.p>
          
          {/* Subtitle */}
          <motion.p 
            className="text-lg mb-12 sm:mb-16 text-apple-gray-300 font-light max-w-2xl mx-auto px-4"
            variants={itemVariants}
          >
            We don't just build AI. We imagine what could be, then make it real.
          </motion.p>
          
          {/* Apple-styled call to action buttons */}
          <motion.div
            className="flex flex-wrap gap-5 justify-center mb-24 sm:mb-32"
            variants={itemVariants}
          >
            <AppleButton
              variant="primary"
              size="lg"
              onClick={() => document.getElementById('connect')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get in Touch
            </AppleButton>
            <AppleButton
              variant="secondary"
              size="lg"
              onClick={() => document.getElementById('imagine')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </AppleButton>
          </motion.div>
          
          {/* Animated scroll indicator */}
          <motion.div
            className={cn(
              "absolute bottom-12 sm:bottom-16 left-1/2 transform -translate-x-1/2",
              "w-12 h-12 flex items-center justify-center"
            )}
            initial={{ opacity: 0.6, y: 0 }}
            animate={{ 
              opacity: [0.6, 1, 0.6],
              y: [0, 8, 0]
            }}
            transition={{ 
              duration: 2.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut"
            }}
          >
            <a 
              href="#imagine" 
              className="flex flex-col items-center justify-center p-3 rounded-full
                        text-apple-gray-300 hover:text-apple-blue-primary 
                        transition-colors duration-300 hover:bg-white/50"
              aria-label="Scroll to next section"
            >
              <ChevronDown className="h-7 w-7" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
