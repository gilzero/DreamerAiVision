import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Palette, Smile, Cloud } from "lucide-react";
import { motion } from "framer-motion";

interface ApproachCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

function ApproachCard({ title, description, icon, index }: ApproachCardProps) {
  return (
    <motion.div 
      className="apple-card rounded-3xl p-8 text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.8, 
          delay: index * 0.15,
          ease: [0.16, 1, 0.3, 1]
        }
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>
    </motion.div>
  );
}

export default function HowSection() {
  const { targetRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    onlyOnce: true,
  });

  const approaches = [
    {
      title: "Artistry",
      description: "We approach AI with the sensibility of artists, not just engineers. Every interaction is considered. Every interface is intuitive. Every experience is meaningful.",
      icon: <Palette className="h-12 w-12 text-primary" />
    },
    {
      title: "Joy",
      description: "Technology should bring joy, not just utility. We design experiences that delight and inspire, not just solve problems.",
      icon: <Smile className="h-12 w-12 text-primary" />
    },
    {
      title: "Invisible",
      description: "The most powerful technology disappears. Our solutions work like thought itself—present when needed, invisible when not, always in service of human intent.",
      icon: <Cloud className="h-12 w-12 text-primary" />
    }
  ];

  return (
    <section 
      id="how" 
      className={`py-32 section-fade-in ${isIntersecting ? 'visible' : ''} relative overflow-hidden`}
      ref={targetRef as React.RefObject<HTMLElement>}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 opacity-50"></div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1.5 } }}
        viewport={{ once: true }}
        className="absolute inset-0"
      >
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
      </motion.div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-20"
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
                How
              </span>
              <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 to-transparent"></span>
            </span>
          </h2>
          <p className="text-2xl sm:text-3xl mb-4 text-gray-700 dark:text-gray-200 font-light">
            We create technology that feels natural, intuitive, and human.
          </p>
          <p className="text-xl italic text-gray-600 dark:text-gray-300 font-light">
            Where engineering meets art, technology becomes experience.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {approaches.map((approach, index) => (
            <ApproachCard 
              key={index} 
              index={index}
              title={approach.title} 
              description={approach.description} 
              icon={approach.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
