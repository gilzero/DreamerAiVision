import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { motion } from "framer-motion";

interface PillarCardProps {
  title: string;
  description: string;
  index: number;
}

function PillarCard({ title, description, index }: PillarCardProps) {
  return (
    <motion.div 
      className="apple-card hover-scale p-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.7, 
          delay: index * 0.1,
          ease: [0.16, 1, 0.3, 1]
        }
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="flex items-center mb-5">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 text-primary font-medium">
          {String.fromCharCode(65 + index)}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>
    </motion.div>
  );
}

export default function CreateSection() {
  const { targetRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    onlyOnce: true,
  });

  const pillars = [
    {
      title: "Agentic AI",
      description: "Engineered for Foresight. We've advanced beyond reactive computing. Our Agentic AI is designed to comprehend underlying intent and anticipate what's next. It doesn't merely process inputs; it perceives purpose and acts with proactive understanding."
    },
    {
      title: "Bespoke Intelligence",
      description: "Intelligence, Meticulously Crafted. We unlock intelligence tailored precisely to your unique challenges. We sculpt intelligent solutions that fit your domain. This isn't customization of existing systems; it's genesis of new computational possibilities."
    },
    {
      title: "Contextual AI",
      description: "Illuminating the Nuances. Intelligence without context is merely noise. True power comes from understanding context deeply enough to recognize when action is essential and when patience is warranted—whether through advanced RAG systems or long‑context LLMs."
    },
    {
      title: "Data Science with AI",
      description: "Revealing Clarity within Complexity. We unite human curiosity with the power of machine intelligence. This synergy transforms complex data into compelling narratives, uncovering deep patterns that inform strategy, empower decisions, and inspire meaningful action."
    }
  ];

  return (
    <section 
      id="create" 
      className={`py-32 bg-gray-50/50 dark:bg-gray-900/50 backdrop-blur-3xl section-fade-in ${isIntersecting ? 'visible' : ''} relative overflow-hidden`}
      ref={targetRef as React.RefObject<HTMLElement>}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-950 opacity-70"></div>
      <div className="absolute top-1/4 left-1/5 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
      
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
                Create
              </span>
              <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 to-transparent"></span>
            </span>
          </h2>
          <p className="text-2xl sm:text-3xl mb-4 text-gray-700 dark:text-gray-200 font-light">
            The four pillars of our solutions
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            How we deliver transcendent AI experiences that inspire, empower, and transform.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {pillars.map((pillar, index) => (
            <PillarCard 
              key={index}
              index={index}
              title={pillar.title} 
              description={pillar.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
