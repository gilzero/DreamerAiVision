import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface ValueCardProps {
  quote: string;
  index: number;
}

function ValueCard({ quote, index }: ValueCardProps) {
  const [_isVisible, setIsVisible] = useState(false);
  const quoteRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3, rootMargin: "-50px" }
    );
    
    if (quoteRef.current) {
      observer.observe(quoteRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <motion.div 
      ref={quoteRef}
      className="quote-container blur-backdrop p-8 hover-scale relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.6, 
          delay: index * 0.1,
          ease: [0.16, 1, 0.3, 1]
        }
      }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <span className="quote-mark">"</span>
      <p className="text-lg text-center text-[#1d1d1f] font-light italic heading-serif relative z-10">
        {quote.replace(/"/g, '')}
      </p>
    </motion.div>
  );
}

interface ApproachStepProps {
  number: string;
  title: string;
  description: string;
  index: number;
}

function ApproachStep({ number, title, description, index }: ApproachStepProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      className="text-center relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.7, 
          delay: index * 0.15,
          ease: [0.16, 1, 0.3, 1]
        }
      }}
      viewport={{ once: true, margin: "-100px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div 
        className="w-20 h-20 bg-[#0071e3]/10 rounded-full flex items-center justify-center mx-auto mb-6 relative"
        animate={{
          boxShadow: isHovered 
            ? '0 0 0 2px rgba(0, 113, 227, 0.2)' 
            : '0 0 0 0px rgba(0, 113, 227, 0)',
          scale: isHovered ? 1.05 : 1
        }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.span 
          className="text-2xl font-semibold text-[#0071e3]"
          animate={{ 
            scale: isHovered ? 1.1 : 1
          }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {number}
        </motion.span>
        
        {/* Subtle highlight effect */}
        <motion.div 
          className="absolute inset-0 rounded-full bg-gradient-to-b from-white/40 to-transparent opacity-0"
          animate={{ 
            opacity: isHovered ? 0.5 : 0
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
      
      <motion.h4 
        className="text-xl font-medium mb-3 text-[#1d1d1f]"
        animate={{ 
          color: isHovered ? '#0071e3' : '#1d1d1f' 
        }}
        transition={{ duration: 0.3 }}
      >
        {title}
      </motion.h4>
      
      <p className="text-[#86868b] leading-relaxed text-sm">
        {description}
      </p>
    </motion.div>
  );
}

export default function WhoSection() {
  const { targetRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    onlyOnce: true,
  });

  const values = [
    { quote: "\"Technology should elevate humanity, not replace it.\"" },
    { quote: "\"Simplicity is the ultimate sophistication.\"" },
    { quote: "\"The best intelligence amplifies human creativity rather than mimicking it.\"" },
    { quote: "\"The most important innovations connect rather than separate.\"" }
  ];

  const approachSteps = [
    {
      number: "1",
      title: "Understanding",
      description: "We begin by understanding not just what you do, but why you do it."
    },
    {
      number: "2",
      title: "Reimagining",
      description: "Then we reimagine it from first principles—challenging every assumption and convention."
    },
    {
      number: "3",
      title: "Creating",
      description: "What emerges isn't an improvement on what exists. It's an entirely new possibility."
    },
    {
      number: "4",
      title: "Delivering",
      description: "Each solution is uniquely crafted for its purpose. Each is a work of both technology and art."
    }
  ];

  return (
    <section 
      id="who" 
      className={`py-32 section-fade-in ${isIntersecting ? 'visible' : ''} relative overflow-hidden`}
      ref={targetRef as React.RefObject<HTMLElement>}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 opacity-50"></div>
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
      
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
                Who We Are
              </span>
              <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 to-transparent"></span>
            </span>
          </h2>
          <p className="text-2xl sm:text-3xl mb-4 text-gray-700 dark:text-gray-200 font-light">
            A collective of dreamers and doers.
          </p>
        </motion.div>
        
        <div className="mb-24">
          <motion.p 
            className="text-xl text-center max-w-3xl mx-auto mb-16 text-gray-600 dark:text-gray-300 font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            We are a small collective of designers, engineers, scientists and artists who believe 
            that artificial intelligence should be as beautiful as it is powerful.
          </motion.p>
          
          <div className="grid md:grid-cols-3 gap-12 mt-16">
            {[
              {
                title: "Our Scale",
                items: [
                  "We don't scale by growing bigger.",
                  "We scale by thinking deeper.",
                  "No project is too small nor too big."
                ]
              },
              {
                title: "Our Relationships",
                items: [
                  "Every client relationship is personal.",
                  "Every solution is crafted, not manufactured.",
                  "Every project is a journey of discovery."
                ]
              },
              {
                title: "Our Rule of Thumb",
                items: [
                  "Rather than fixating on benchmarks, we adhere to a single guiding principle: \"it just works\"."
                ]
              }
            ].map((group, groupIndex) => (
              <motion.div 
                key={groupIndex}
                className="apple-card p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    duration: 0.7, 
                    delay: groupIndex * 0.15,
                    ease: [0.16, 1, 0.3, 1]
                  }
                }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h3 className="text-xl font-semibold mb-6 text-primary">{group.title}</h3>
                <div className="space-y-3">
                  {group.items.map((item, index) => (
                    <p key={index} className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {item}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="mt-20 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
            }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center"
          >
            <h3 className="text-3xl font-semibold mb-6 text-center text-[#1d1d1f]">
              Our Philosophy
            </h3>
            <p className="text-xl text-center mb-12 text-[#86868b] font-light max-w-2xl mx-auto">
              We believe in creating technology that adapts to the human experience.
            </p>
          </motion.div>
          
          <motion.div 
            className="quote-container relative max-w-3xl mx-auto mb-16 px-12 py-8 blur-backdrop rounded-3xl"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ 
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="quote-mark absolute top-4 left-8 text-[#0071e3]/10 heading-serif">"</span>
            <p className="text-2xl italic mb-5 text-[#1d1d1f] font-light leading-relaxed heading-serif">
              All fixed set patterns are incapable of adaptability or pliability. 
              The truth is outside of all fixed patterns.
            </p>
            <span className="text-[#86868b] text-sm block text-right pr-8">— Bruce Lee</span>
            
            {/* Subtle gradient accent */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0071e3]/30 to-transparent rounded-l-3xl"></div>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {values.map((value, index) => (
              <ValueCard key={index} index={index} quote={value.quote} />
            ))}
          </div>
        </div>
        
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
            }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center"
          >
            <h3 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
              Our Approach
            </h3>
            <p className="text-xl text-center mb-16 text-gray-600 dark:text-gray-300 font-light max-w-3xl mx-auto">
              We work with organizations courageous enough to ask 'What if?' — then patient enough to discover the answer.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {approachSteps.map((step, index) => (
              <ApproachStep 
                key={index}
                index={index}
                number={step.number} 
                title={step.title} 
                description={step.description} 
              />
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="text-2xl italic text-gray-700 dark:text-gray-200 font-light">
              "Everything you can dream of, you can ship it."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
