import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { appleEasing, applyTypography, typography } from "@/styles/typography";
import { AppleCard } from "@/components/ui/apple-card";
import { cn } from "@/lib/utils";

export default function ImagineSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Use intersection observer with the section ref
  const { isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    onlyOnce: true,
    root: null,
    rootMargin: "0px",
    ref: sectionRef
  });
  
  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
    layoutEffect: false // Prevent warning when ref is not yet hydrated
  });
  
  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  
  // Staggered text animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section 
      id="imagine" 
      ref={sectionRef}
      className={`py-24 md:py-32 overflow-hidden bg-apple-background-primary section-fade-in ${isIntersecting ? 'visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Asymmetrical layout using grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Intro text - spans 5 columns */}
          <motion.div 
            className="md:col-span-5 lg:col-span-5 order-2 md:order-1 z-10"
            style={{ y: textY }}
            variants={containerVariants}
            initial="hidden"
            animate={isIntersecting ? "visible" : "hidden"}
          >
            <motion.h2 
              className={applyTypography.heading.h1('mb-8 text-apple-gray-500')}
              variants={itemVariants}
            >
              <span className="inline-block relative">
                Imagine
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-apple-blue-primary to-transparent transform origin-left transition-all duration-300 ease-out"></span>
              </span>
            </motion.h2>
            
            <motion.p 
              className={cn(typography.body.large, 'mb-10 text-apple-gray-300 font-light max-w-lg')}
              variants={itemVariants}
            >
              Some see artificial intelligence as code and algorithms. We see it as the canvas for human potential.
            </motion.p>
          </motion.div>
          
          {/* Centered image with parallax - spans 7 columns and offset */}
          <div 
            className="md:col-span-7 lg:col-span-7 md:col-start-6 lg:col-start-6 order-1 md:order-2 relative z-0 mb-16 md:mb-0"
            ref={imageRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Background decoration removed for clean look */}
            
            {/* Image container */}
            <motion.div 
              className="relative z-10"
              style={{ y: imageY }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.8, ease: appleEasing }}
            >
              <motion.div
                className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex items-center justify-center"
                transition={{ duration: 0.5 }}
              >
                <motion.img 
                  src="/logo.png" 
                  alt="Dreamer AI Studios logo" 
                  className="w-full h-full object-contain transition-all duration-700 ease-out transform bg-transparent animate-float"
                  animate={{
                    scale: isHovered ? 1.05 : 1,
                    filter: isHovered ? 'drop-shadow(0 10px 15px rgba(0, 113, 227, 0.3))' : 'drop-shadow(0 5px 10px rgba(0, 113, 227, 0.1))',
                  }}
                  transition={{
                    duration: 0.8,
                    ease: appleEasing
                  }}
                />
              </motion.div>
              
              {/* Decorative elements removed for clean look */}
            </motion.div>
          </div>
        </div>
        
        {/* Quote and final text - full width with asymmetrical side padding */}
        <div className="md:ml-20 lg:ml-28 mt-20 md:mt-24 relative">
          {/* Quote */}
          <motion.div 
            className="relative mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: appleEasing }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <AppleCard 
              variant="glass" 
              padding="lg" 
              hover="lift"
              className="max-w-2xl"
            >
              <span className="text-4xl text-apple-blue-primary font-serif leading-none block mb-2">"</span>
              <p className={cn(typography.body.large, typography.serif, 'text-2xl sm:text-3xl italic text-apple-gray-500 mb-4 font-light leading-relaxed')}>
                Logic will get you from A to B. Imagination will take you everywhere.
              </p>
              <span className={cn(typography.body.small, 'text-apple-gray-300 font-medium')}>— Albert Einstein</span>
            </AppleCard>
          </motion.div>
          
          {/* Final thought - staggered animation */}
          <motion.div 
            className="space-y-4 max-w-3xl ml-0 md:-ml-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: appleEasing }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <AppleCard 
              variant="glass" 
              padding="lg" 
              hover="scale"
            >
            <motion.p 
              className={cn(typography.body.large, 'text-apple-gray-300 font-light')}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              At Dreamer, we start by asking
            </motion.p>
            <motion.p 
              className={cn(typography.heading.h2, typography.serif, 'text-apple-gray-500')}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              viewport={{ once: true }}
            >
              What if your perceived limitations aren't reality?
            </motion.p>
            </AppleCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
