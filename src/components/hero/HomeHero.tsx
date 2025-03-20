
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HomeHero = () => {
  return (
    <div className="relative w-full h-full flex items-center">
      {/* Content container */}
      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Main text content */}
        <div className="px-4 md:px-8 lg:px-12 flex flex-col space-y-6">
          <div className="flex">
            <a href="#" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-6 py-2 text-sm text-white hover:bg-white/20 transition-colors">
              SCHEDULE A CALL
            </a>
          </div>
          
          <div className="flex items-center mb-6">
            <img 
              src="/lovable-uploads/fb33df85-354d-4442-b02f-d1e6ce32fe98.png" 
              alt="CyberHand Icon" 
              className="h-14 md:h-20 mr-4"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Digital<br />
              Creative<br />
              Solutions
            </h1>
          </div>
          
          <p className="text-lg md:text-xl text-white/90 font-light max-w-md">
            Our focus is leveraging cutting-edge technology that delivers targeted solutions, increased efficiency, and measurable ROI for your business.
          </p>
          
          <div className="pt-4">
            <Button 
              className="bg-[#10B981] text-white hover:bg-[#10B981]/90 rounded-full px-8 py-6 text-base flex items-center gap-2 h-auto"
              onClick={() => {}}
            >
              Get Started
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        {/* Right side - Floating cards */}
        <div className="hidden lg:flex flex-col gap-6 items-end px-12">
          {/* First card - Stats */}
          <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 w-full max-w-md border border-[#10B981]/30 shadow-xl transform hover:-translate-y-1 transition-transform duration-300">
            <div className="flex items-center space-x-4">
              <div className="bg-[#10B981]/20 rounded-lg p-3">
                <img 
                  src="/lovable-uploads/fb33df85-354d-4442-b02f-d1e6ce32fe98.png" 
                  alt="CyberHand Icon" 
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div className="text-white">
                <h3 className="text-lg font-semibold">Drive More Innovation</h3>
                <p className="text-sm text-white/70">With AI-Powered Solutions</p>
              </div>
            </div>
          </div>
          
          {/* Second card - Blog */}
          <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-xl transform hover:-translate-y-1 transition-transform duration-300">
            <div className="flex items-start">
              <div className="flex-1">
                <div className="flex items-center mb-3">
                  <span className="bg-[#10B981] h-2 w-2 rounded-full mr-2"></span>
                  <span className="text-sm font-medium text-gray-600">Blog</span>
                </div>
                <div className="relative w-full h-36 rounded-lg mb-3 overflow-hidden bg-gray-200">
                  <img 
                    src="/lovable-uploads/30350bba-90dc-46b7-be65-6012c9a6f63c.png" 
                    alt="Technology background" 
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/fb33df85-354d-4442-b02f-d1e6ce32fe98.png" 
                      alt="CyberHand Icon" 
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-800">Maximizing ROI with AI integration: Proven strategies for business growth</h3>
              </div>
            </div>
            <div className="flex justify-between items-center mt-4">
              <button className="bg-[#10B981] text-white px-4 py-1 rounded-full text-sm font-medium">
                Read
              </button>
              <div className="text-sm text-gray-500">01 / 05</div>
            </div>
            <div className="flex items-center mt-2 text-xs text-gray-500">
              <span className="mr-2">AI Integration</span>
              <span>5 min read</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
