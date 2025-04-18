import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

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
      className={`py-24 md:py-32 overflow-hidden bg-white section-fade-in ${isIntersecting ? 'visible' : ''}`}
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
              className="text-5xl sm:text-6xl font-semibold tracking-tight mb-8 text-[#1d1d1f]"
              variants={itemVariants}
            >
              <span className="inline-block relative">
                Imagine
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-[#0071e3] to-transparent transform origin-left transition-all duration-300 ease-out"></span>
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-xl leading-relaxed mb-10 text-[#86868b] font-light max-w-lg"
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
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div
                className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex items-center justify-center"
                transition={{ duration: 0.5 }}
              >
                <motion.img 
                  src="/logo.png" 
                  alt="Dreamer AI Studios logo" 
                  className="w-full h-full object-contain transition-all duration-700 ease-out transform bg-transparent"
                  animate={{
                    scale: isHovered ? 1.05 : 1,
                    y: [0, -10, 0, -5, 0], // Gentle flying motion
                  }}
                  transition={{
                    duration: 4,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "loop"
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
            className="quote-container relative mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="quote-mark heading-serif">"</span>
            <p className="text-2xl sm:text-3xl italic text-[#1d1d1f] mb-4 font-light leading-relaxed heading-serif pl-8 max-w-2xl">
              Logic will get you from A to B. Imagination will take you everywhere.
            </p>
            <span className="text-[#86868b] text-sm font-medium pl-8">— Albert Einstein</span>
          </motion.div>
          
          {/* Final thought - staggered animation */}
          <motion.div 
            className="space-y-4 max-w-3xl blur-backdrop p-8 rounded-3xl ml-0 md:-ml-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.p 
              className="text-xl text-[#86868b] font-light"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              At Dreamer, we start by asking
            </motion.p>
            <motion.p 
              className="text-3xl sm:text-4xl font-medium text-[#1d1d1f] heading-serif"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              viewport={{ once: true }}
            >
              What if your perceived limitations aren't reality?
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
