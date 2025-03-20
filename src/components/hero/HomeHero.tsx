
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HomeHero = () => {
  return (
    <div className="relative w-full h-full flex items-center">
      {/* Gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a3a4a] to-[#0f172a] z-0" />
      
      {/* Content container */}
      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Main text content */}
        <div className="px-4 md:px-8 lg:px-12 flex flex-col space-y-6">
          <div className="flex">
            <a href="#" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-6 py-2 text-sm text-white hover:bg-white/20 transition-colors">
              SCHEDULE A CALL
            </a>
          </div>
          
          <p className="text-lg md:text-xl text-white/90 font-light max-w-md mt-4">
            Our focus is leveraging PPC ads that deliver targeted traffic, increased conversions, and measurable ROI for your online storefront.
          </p>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Next-Generation<br />
            Cutting-Edge<br />
            Digital Creative
          </h1>
          
          <div className="pt-4">
            <Button 
              className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-6 text-base flex items-center gap-2 h-auto"
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
          <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 w-full max-w-md border border-white/10 shadow-xl transform hover:-translate-y-1 transition-transform duration-300">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-900/30 rounded-lg p-3">
                <img 
                  src="/lovable-uploads/78b2a460-f295-441a-ad77-b9b282b561ee.png" 
                  alt="Stats graph" 
                  className="w-32 h-24 object-cover rounded opacity-0"
                />
              </div>
              <div className="text-white">
                <h3 className="text-lg font-semibold">Drive More Traffic</h3>
                <p className="text-sm text-white/70">And Product Sales</p>
              </div>
            </div>
          </div>
          
          {/* Second card - Blog */}
          <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-xl transform hover:-translate-y-1 transition-transform duration-300">
            <div className="flex items-start">
              <div className="flex-1">
                <div className="flex items-center mb-3">
                  <span className="bg-yellow-400 h-2 w-2 rounded-full mr-2"></span>
                  <span className="text-sm font-medium text-gray-600">Blog</span>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                  alt="Office space" 
                  className="w-full h-36 object-cover rounded-lg mb-3"
                />
                <h3 className="text-lg font-bold text-gray-800">Maximizing ROI with PPC campaigns: Proven strategies for achieving success</h3>
              </div>
            </div>
            <div className="flex justify-between items-center mt-4">
              <button className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-medium">
                Read
              </button>
              <div className="text-sm text-gray-500">01 / 05</div>
            </div>
            <div className="flex items-center mt-2 text-xs text-gray-500">
              <span className="mr-2">PPC</span>
              <span>5 min read</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
