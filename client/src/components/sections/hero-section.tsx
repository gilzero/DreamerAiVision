import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

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
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f5f5f7] via-[#f8f8fa] to-[#f0f0f2]"></div>
      
      {/* Background decorative elements that resemble the screenshot */}
      <div className="absolute top-1/4 -left-20 w-[80vh] h-[80vh] bg-[#0071e3]/[0.02] rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-20 w-[70vh] h-[70vh] bg-[#0071e3]/[0.02] rounded-full filter blur-3xl"></div>
      <div className="absolute top-1/2 left-1/3 w-[50vh] h-[50vh] bg-[#fd8230]/[0.01] rounded-full filter blur-3xl"></div>
      
      {/* Centered content - resembling the screenshot layout */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div 
          className="flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main title */}
          <motion.h1 
            className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight mb-6 text-[#1d1d1f]"
            variants={itemVariants}
          >
            Dreamer AI Studios
          </motion.h1>
          
          {/* Tagline with colored words */}
          <motion.p 
            className="text-xl sm:text-2xl mb-6 text-[#1d1d1f] font-light"
            variants={itemVariants}
          >
            The intersection of <span className="text-[#0071e3] font-normal">imagination</span> and <span className="text-[#fd7e14] font-normal">intelligence</span>
          </motion.p>
          
          {/* Subtitle */}
          <motion.p 
            className="text-lg mb-20 text-[#86868b] font-light max-w-2xl"
            variants={itemVariants}
          >
            We don't just build AI. We imagine what could be, then make it real.
          </motion.p>
          
          {/* Animated scroll indicator */}
          <motion.div
            className="absolute bottom-12"
            initial={{ opacity: 0.6, y: 0 }}
            animate={{ 
              opacity: [0.6, 1, 0.6],
              y: [0, 5, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut"
            }}
          >
            <a href="#imagine" className="flex flex-col items-center text-[#86868b] hover:text-[#0071e3] transition-colors duration-300">
              <ChevronDown className="h-6 w-6 mb-1" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
