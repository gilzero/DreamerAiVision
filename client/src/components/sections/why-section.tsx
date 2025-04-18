import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

interface ReasonCardProps {
  title: string;
  description: string;
  index: number;
}

function ReasonCard({ title, description, index }: ReasonCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };
  
  const wordVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };
  
  // Split title into words for animation
  const titleWords = title.split(' ');
  
  return (
    <motion.div 
      className="blur-backdrop px-8 py-10 rounded-2xl transform transition-all duration-700 relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.7, 
          delay: index * 0.15,
          ease: [0.16, 1, 0.3, 1]
        }
      }}
      viewport={{ once: true, margin: "-50px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: isHovered 
          ? 'linear-gradient(145deg, rgba(255,255,255,0.85), rgba(255,255,255,0.95))' 
          : 'linear-gradient(145deg, rgba(255,255,255,0.75), rgba(255,255,255,0.85))'
      }}
    >
      {/* Number indicator with smooth animation */}
      <motion.div 
        className="w-14 h-14 rounded-full bg-[#0071e3]/10 flex items-center justify-center font-medium mb-6 text-[#0071e3] ml-0"
        animate={{ 
          scale: isHovered ? 1.1 : 1,
          backgroundColor: isHovered ? 'rgba(0, 113, 227, 0.15)' : 'rgba(0, 113, 227, 0.1)'
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.span
          className={`text-lg ${isHovered ? 'font-semibold' : 'font-medium'}`}
          animate={{ 
            scale: isHovered ? 1.1 : 1
          }}
          transition={{ duration: 0.3 }}
        >
          {index + 1}
        </motion.span>
      </motion.div>
      
      {/* Animated title with word-by-word reveal */}
      <motion.h3 
        className="text-2xl font-medium mb-4 text-[#1d1d1f]"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {titleWords.map((word, i) => (
          <motion.span 
            key={i} 
            className="inline-block mr-[0.3em]"
            variants={wordVariants}
          >
            {word}
          </motion.span>
        ))}
      </motion.h3>
      
      {/* Description with fade-in effect */}
      <motion.p 
        className="text-[#86868b] leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ 
          opacity: 1,
          transition: { 
            duration: 0.6, 
            delay: 0.3 + (index * 0.1),
            ease: [0.16, 1, 0.3, 1]
          }
        }}
        viewport={{ once: true }}
      >
        {description}
      </motion.p>
      
      {/* Subtle highlight animation on hover */}
      <motion.div 
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#0071e3] to-transparent rounded-bl-2xl"
        initial={{ width: 0 }}
        animate={{ width: isHovered ? '100%' : '0%' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      />
    </motion.div>
  );
}

export default function WhySection() {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Use the updated intersection observer with section ref
  const { isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    onlyOnce: true,
    ref: sectionRef
  });
  
  // Parallax effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
    layoutEffect: false // Prevent warning when ref is not yet hydrated
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -20]);
  
  // Text reveal animation
  const titleVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };
  
  const reasonsData = [
    {
      title: "Intelligence that creates rather than calculates",
      description: "Beyond computation lies creation - the ability to generate new ideas and perspectives that transcend their inputs."
    },
    {
      title: "Intelligence that inspires rather than automates",
      description: "AI should inspire human creativity, not replace it. Our approaches aim to elevate human potential."
    },
    {
      title: "Intelligence that dreams",
      description: "The ultimate frontier is AI that can imagine possibilities beyond its programming - intelligence that dreams."
    }
  ];

  return (
    <section 
      id="why" 
      ref={sectionRef}
      className={`py-24 md:py-32 bg-[#f5f5f7] section-fade-in ${isIntersecting ? 'visible' : ''} relative overflow-hidden`}
      style={{ position: 'relative' }} // Ensure position is set for scroll animations
    >
      {/* Animated background decorations */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <motion.div 
          className="absolute top-1/4 left-1/3 w-[80vh] h-[80vh] bg-[#0071e3]/[0.03] rounded-full filter blur-3xl"
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.08, 0.06, 0.08] 
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-[60vh] h-[60vh] bg-[#0071e3]/[0.03] rounded-full filter blur-3xl"
          animate={{ 
            scale: [1, 1.08, 1],
            opacity: [0.06, 0.04, 0.06] 
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 1
          }}
        />
      </motion.div>
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.015] z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Asymmetrical header layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-20">
          <motion.div 
            className="md:col-span-5 md:col-start-2"
            style={{ y: titleY }}
          >
            <motion.h2 
              className="text-5xl font-semibold tracking-tight mb-6 text-[#1d1d1f]"
              variants={titleVariants}
              initial="hidden"
              animate={isIntersecting ? "visible" : "hidden"}
            >
              <span className="inline-block relative">
                Why
                <motion.span 
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-[#0071e3] to-transparent"
                  initial={{ width: 0 }}
                  animate={{ width: isIntersecting ? '100%' : '0%' }}
                  transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                />
              </span>
            </motion.h2>
          </motion.div>
          
          <motion.div 
            className="md:col-span-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.p 
              className="text-2xl mb-4 text-[#1d1d1f] font-light heading-serif"
              variants={titleVariants}
              initial="hidden"
              animate={isIntersecting ? "visible" : "hidden"}
              transition={{ delay: 0.1 }}
            >
              We see artificial intelligence differently.
            </motion.p>
            <motion.p 
              className="text-lg text-[#86868b] leading-relaxed"
              variants={titleVariants}
              initial="hidden"
              animate={isIntersecting ? "visible" : "hidden"}
              transition={{ delay: 0.2 }}
            >
              Our vision extends beyond conventional AI. We believe in crafting intelligence that empowers 
              rather than replaces, that creates rather than mimics, and that dreams rather than predicts.
            </motion.p>
          </motion.div>
        </div>
        
        {/* Staggered grid layout with asymmetry */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {reasonsData.map((reason, index) => (
            <div 
              key={index}
              className={`
                ${index === 0 ? 'md:col-span-8 md:col-start-1' : ''}
                ${index === 1 ? 'md:col-span-7 md:col-start-6' : ''}
                ${index === 2 ? 'md:col-span-8 md:col-start-3' : ''}
              `}
            >
              <ReasonCard 
                index={index}
                title={reason.title} 
                description={reason.description} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
