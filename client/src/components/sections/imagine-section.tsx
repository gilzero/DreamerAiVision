import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { motion, useScroll, useTransform, useAnimation, Variant } from "framer-motion";
import { useRef, useEffect } from "react";
import { appleEasing, applyTypography, typography } from "@/styles/typography";
import { AppleCard } from "@/components/ui/apple-card";
import { cn } from "@/lib/utils";

// Animation constants
const ANIMATION_CONFIG = {
  text: {
    container: {
      hidden: { opacity: 0 } as Variant,
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.08,
          delayChildren: 0.3
        }
      } as Variant
    },
    item: {
      hidden: { opacity: 0, y: 20 } as Variant,
      visible: { 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1]
        }
      } as Variant
    }
  },
  image: {
    float: {
      y: [0, -8, 0, 8, 0],
      transition: {
        duration: 8,
        times: [0, 0.25, 0.5, 0.75, 1],
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop" as const // Type assertion to make TypeScript recognize this as a literal
      }
    }
  },
  quote: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: 0.2, ease: appleEasing }
  },
  finalThought: {
    container: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6, delay: 0.3, ease: appleEasing }
    },
    intro: {
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.4, delay: 0.4 }
    },
    question: {
      initial: { opacity: 0, y: 15 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5, delay: 0.5 }
    }
  }
};

// Sub-components for better organization
type FloatingImageProps = {
  controls: ReturnType<typeof useAnimation>;
};

const FloatingImage = ({ controls }: FloatingImageProps) => (
  <div className="relative z-10">
    <motion.div 
      className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex items-center justify-center"
      animate={controls}
    >
      <img 
        src="/logo.png" 
        alt="Dreamer AI Studios logo" 
        className="w-full h-full object-contain bg-transparent"
        style={{
          filter: 'drop-shadow(0 4px 6px rgba(0, 113, 227, 0.1))'
        }}
      />
    </motion.div>
  </div>
);

type QuoteCardProps = {
  quote: string;
  attribution: string;
};

const QuoteCard = ({ quote, attribution }: QuoteCardProps) => (
  <motion.div 
    className="relative mb-16"
    {...ANIMATION_CONFIG.quote}
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
        {quote}
      </p>
      <span className={cn(typography.body.small, 'text-apple-gray-300 font-medium')}>{attribution}</span>
    </AppleCard>
  </motion.div>
);

/**
 * ImagineSection Component
 * 
 * A visually engaging section that showcases the Dreamer AI vision
 * with subtle animations and thoughtful typography.
 */
export default function ImagineSection() {
  // Refs for animations and intersection detection
  const sectionRef = useRef<HTMLElement>(null);
  const imageControls = useAnimation();
  
  // Detect when section enters viewport
  const { isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    onlyOnce: true,
    root: null,
    rootMargin: "0px",
    ref: sectionRef
  });
  
  // Subtle scroll effect for text only
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
    layoutEffect: false
  });
  
  const textY = useTransform(scrollYProgress, [0, 1], [0, -15]);
  
  // Initialize floating animation
  useEffect(() => {
    const startFloatingAnimation = async () => {
      await imageControls.start(ANIMATION_CONFIG.image.float);
    };
    
    startFloatingAnimation();
  }, [imageControls]);

  return (
    <section 
      id="imagine" 
      ref={sectionRef}
      className={`py-24 md:py-32 overflow-hidden bg-apple-background-primary section-fade-in ${isIntersecting ? 'visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Text column */}
          <motion.div 
            className="md:col-span-5 lg:col-span-5 order-2 md:order-1 z-10"
            style={{ y: textY }}
            variants={ANIMATION_CONFIG.text.container}
            initial="hidden"
            animate={isIntersecting ? "visible" : "hidden"}
          >
            <motion.h2 
              className={applyTypography.heading.h1('mb-8 text-apple-gray-500')}
              variants={ANIMATION_CONFIG.text.item}
            >
              <span className="inline-block relative">
                Imagine
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-apple-blue-primary to-transparent transform origin-left transition-all duration-300 ease-out"></span>
              </span>
            </motion.h2>
            
            <motion.p 
              className={cn(typography.body.large, 'mb-10 text-apple-gray-300 font-light max-w-lg')}
              variants={ANIMATION_CONFIG.text.item}
            >
              Some see artificial intelligence as code and algorithms. We see it as the canvas for human potential.
            </motion.p>
          </motion.div>
          
          {/* Image column */}
          <div className="md:col-span-7 lg:col-span-7 md:col-start-6 lg:col-start-6 order-1 md:order-2 relative z-0 mb-16 md:mb-0">
            <FloatingImage controls={imageControls} />
          </div>
        </div>
        
        {/* Quote and final thoughts section */}
        <div className="md:ml-20 lg:ml-28 mt-20 md:mt-24 relative">
          {/* Quote */}
          <QuoteCard 
            quote="Logic will get you from A to B. Imagination will take you everywhere." 
            attribution="— Albert Einstein" 
          />
          
          {/* Final thought */}
          <motion.div 
            className="space-y-4 max-w-3xl ml-0 md:-ml-10"
            {...ANIMATION_CONFIG.finalThought.container}
            viewport={{ once: true, margin: "-100px" }}
          >
            <AppleCard 
              variant="glass" 
              padding="lg" 
              hover="scale"
            >
              <motion.p 
                className={cn(typography.body.large, 'text-apple-gray-300 font-light')}
                {...ANIMATION_CONFIG.finalThought.intro}
                viewport={{ once: true }}
              >
                At Dreamer, we start by asking
              </motion.p>
              <motion.p 
                className={cn(typography.heading.h2, typography.serif, 'text-apple-gray-500')}
                {...ANIMATION_CONFIG.finalThought.question}
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
