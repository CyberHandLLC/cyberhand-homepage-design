
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

// Import all hero sections
import HomeHero from "./HomeHero";
import ServicesHero from "./ServicesHero";
import AIIntegrationHero from "./AIIntegrationHero";
import OurWorkHero from "./OurWorkHero";
import PackagesHero from "./PackagesHero";
import ContactHero from "./ContactHero";

const SECTIONS = [
  { id: "Home", component: HomeHero },
  { id: "Services", component: ServicesHero },
  { id: "AI Integration", component: AIIntegrationHero },
  { id: "Our Work", component: OurWorkHero },
  { id: "Packages", component: PackagesHero },
  { id: "Contact", component: ContactHero }
];

interface HeroSectionProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const HeroSection = ({ activeSection, onNavigate }: HeroSectionProps) => {
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  
  const activeIndex = SECTIONS.findIndex(section => section.id === activeSection);
  
  const navigatePrev = () => {
    if (activeIndex > 0) {
      onNavigate(SECTIONS[activeIndex - 1].id);
    }
  };
  
  const navigateNext = () => {
    if (activeIndex < SECTIONS.length - 1) {
      onNavigate(SECTIONS[activeIndex + 1].id);
    }
  };
  
  // Touch handlers for mobile swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };
  
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    
    // If the swipe is significant enough (50px)
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swipe left, go next
        navigateNext();
      } else {
        // Swipe right, go prev
        navigatePrev();
      }
    }
    
    setTouchStart(null);
  };
  
  // Find the active component to render
  const ActiveComponent = SECTIONS.find(section => section.id === activeSection)?.component || HomeHero;

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pt-[50px] pb-[50px] md:pt-[60px] md:pb-[60px] overflow-hidden bg-white"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative h-full w-full overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzcuNSAzNy41bDI1IDAgMCAxMjUgMTI1IDAgMCAyNSAxMjUgMCAwIDc1LTI1IDAgMCAxMi41LTEyNSAwIDAgMTIuNS0xMjUgMCAwLTI1TDEyLjUgMjYyLjUgMTIuNSAxMzcuNWwwLTEwMCAyNSAwem0wIDB6IiBzdHJva2U9IiM5OTkiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==')]"></div>
        
        {/* Content container */}
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative">
          <div className="w-full max-w-6xl animate-fade-in">
            <ActiveComponent />
          </div>
        </div>
        
        {/* Navigation arrows - hidden on mobile */}
        {!isMobile && (
          <>
            <Button
              variant="outline"
              size="icon"
              onClick={navigatePrev}
              disabled={activeIndex === 0}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full bg-gray-200 hover:bg-gray-300 border-none disabled:opacity-30"
              aria-label="Previous section"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              onClick={navigateNext}
              disabled={activeIndex === SECTIONS.length - 1}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full bg-cyberhand-yellow hover:bg-cyberhand-yellow/80 border-none disabled:opacity-30"
              aria-label="Next section"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </>
        )}
        
        {/* Section indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {SECTIONS.map((section, index) => (
            <button
              key={section.id}
              className={`w-2 h-2 rounded-full transition-all ${
                activeIndex === index 
                  ? "bg-cyberhand-green w-6" 
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => onNavigate(section.id)}
              aria-label={`Go to ${section.id} section`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
