import { useState, useEffect, useRef, Suspense, lazy } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero-section";
import MobileMenu from "@/components/layout/mobile-menu";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { useIsMobile } from "@/hooks/use-mobile";
import ErrorBoundary from "@/components/error-boundary";

// Lazy load non-critical sections
const ImagineSection = lazy(() => import("@/components/sections/imagine-section"));
const WhySection = lazy(() => import("@/components/sections/why-section"));
const HowSection = lazy(() => import("@/components/sections/how-section"));
const CreateSection = lazy(() => import("@/components/sections/create-section"));
const WhoSection = lazy(() => import("@/components/sections/who-section"));
const ConnectSection = lazy(() => import("@/components/sections/connect-section"));

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const progressRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  const sections = [
    "home",
    "imagine",
    "why",
    "how",
    "create",
    "who",
    "connect",
  ];
  
  const activeSection = useScrollSpy(sections, { offset: 100 });

  // Handle scroll progress indicator
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = (currentScroll / totalScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Handle scroll to section when clicking on dots
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ErrorBoundary>
      {/* Scroll progress indicator */}
      <div 
        ref={progressRef}
        className="scroll-progress" 
        style={{ width: `${scrollProgress}%` }}
      />
      
      <ErrorBoundary>
        <Header 
          activeSection={activeSection} 
          onMobileMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
        />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <MobileMenu 
          isOpen={mobileMenuOpen} 
          onClose={() => setMobileMenuOpen(false)} 
        />
      </ErrorBoundary>
      
      {/* Scroll indicator dots - hidden on mobile */}
      {!isMobile && (
        <div className="scroll-indicator hidden lg:flex">
          {sections.map((section) => (
            <button
              key={section}
              className={`scroll-dot ${activeSection === section ? 'active' : ''}`}
              onClick={() => scrollToSection(section)}
              aria-label={`Scroll to ${section} section`}
            />
          ))}
        </div>
      )}
      
      <main>
        {/* Hero section is critical for initial render, so not lazy-loaded */}
        <ErrorBoundary>
          <HeroSection />
        </ErrorBoundary>
        
        {/* Lazy-loaded sections wrapped in Suspense with fallback */}
        <Suspense fallback={
          <div className="section-loading-placeholder flex items-center justify-center py-24 bg-apple-gray-50">
            <div className="animate-pulse text-apple-blue-primary text-xl">Loading...</div>
          </div>
        }>
          <ErrorBoundary>
            <ImagineSection />
          </ErrorBoundary>
          
          <ErrorBoundary>
            <WhySection />
          </ErrorBoundary>
          
          <ErrorBoundary>
            <HowSection />
          </ErrorBoundary>
          
          <ErrorBoundary>
            <CreateSection />
          </ErrorBoundary>
          
          <ErrorBoundary>
            <WhoSection />
          </ErrorBoundary>
          
          <ErrorBoundary>
            <ConnectSection />
          </ErrorBoundary>
        </Suspense>
      </main>
      
      <ErrorBoundary>
        <Footer />
      </ErrorBoundary>
    </ErrorBoundary>
  );
}

export default App;
