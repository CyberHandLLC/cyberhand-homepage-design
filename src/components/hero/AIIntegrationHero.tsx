
import { Button } from "@/components/ui/button";

const AIIntegrationHero = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12 w-full">
      <div className="w-full lg:w-1/2">
        <div className="flex items-center mb-6">
          <img 
            src="/lovable-uploads/fb33df85-354d-4442-b02f-d1e6ce32fe98.png" 
            alt="CyberHand Icon" 
            className="h-10 md:h-14 mr-4"
          />
          <h2 className="text-3xl md:text-4xl font-bold text-white font-montserrat">
            AI Integration Services
          </h2>
        </div>
        <p className="text-lg text-white/80 font-roboto mb-6">
          Transform your business with custom AI solutions, including chatbots, data analytics, and system integrations. Starting at $499 setup, with ongoing support at $399/month.
        </p>
        <p className="text-lg text-white/80 font-roboto mb-8">
          Contact us for a custom quote tailored to your needs.
        </p>
        <Button className="bg-[#10B981] text-white hover:bg-[#10B981]/90 font-medium rounded-md px-8 py-2">
          Learn More
        </Button>
      </div>
      
      <div className="w-full lg:w-1/2 bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-[#10B981]/20">
        <div className="relative aspect-square w-full max-w-md mx-auto">
          {/* Neural Network Visualization with CyberHand logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full">
              {/* Background image of the gears */}
              <div className="absolute inset-0 opacity-70">
                <img 
                  src="/lovable-uploads/30350bba-90dc-46b7-be65-6012c9a6f63c.png" 
                  alt="Technology Background" 
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* CyberHand icon overlay */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <img 
                  src="/lovable-uploads/fb33df85-354d-4442-b02f-d1e6ce32fe98.png" 
                  alt="CyberHand Icon" 
                  className="w-32 h-32 object-contain opacity-80"
                />
              </div>
              
              {/* Nodes and connections */}
              <div className="absolute w-4 h-4 bg-[#10B981] rounded-full top-1/4 left-1/4 animate-pulse"></div>
              <div className="absolute w-3 h-3 bg-[#10B981] rounded-full top-3/4 left-1/3 animate-pulse" style={{ animationDelay: "0.5s" }}></div>
              <div className="absolute w-5 h-5 bg-[#10B981] rounded-full top-1/2 left-3/4 animate-pulse" style={{ animationDelay: "0.7s" }}></div>
              <div className="absolute w-4 h-4 bg-[#10B981] rounded-full top-1/4 left-2/3 animate-pulse" style={{ animationDelay: "0.3s" }}></div>
              <div className="absolute w-3 h-3 bg-[#10B981] rounded-full top-3/4 left-3/4 animate-pulse" style={{ animationDelay: "0.9s" }}></div>
              
              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M25,25 L50,50" stroke="#10B981" strokeWidth="0.5" />
                <path d="M33,75 L50,50" stroke="#10B981" strokeWidth="0.5" />
                <path d="M75,25 L50,50" stroke="#10B981" strokeWidth="0.5" />
                <path d="M67,75 L50,50" stroke="#10B981" strokeWidth="0.5" />
              </svg>
              
              {/* Center circle outline */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-2 border-[#10B981] rounded-full opacity-30"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-[#10B981] rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIIntegrationHero;
