
import { Button } from "@/components/ui/button";

const AIIntegrationHero = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12 w-full">
      <div className="w-full lg:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold text-cyberhand-text-black font-montserrat mb-4">
          AI Integration Services
        </h2>
        <p className="text-lg text-cyberhand-text-gray font-roboto mb-6">
          Transform your business with custom AI solutions, including chatbots, data analytics, and system integrations. Starting at $499 setup, with ongoing support at $399/month.
        </p>
        <p className="text-lg text-cyberhand-text-gray font-roboto mb-8">
          Contact us for a custom quote tailored to your needs.
        </p>
        <Button className="bg-cyberhand-green hover:bg-cyberhand-green-light text-white font-medium rounded-md px-8 py-2">
          Learn More
        </Button>
      </div>
      
      <div className="w-full lg:w-1/2 bg-gradient-to-br from-cyberhand-green/5 to-cyberhand-green/20 rounded-lg p-8">
        <div className="relative aspect-square w-full max-w-md mx-auto">
          {/* Neural Network Visualization */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full">
              {/* Nodes and connections */}
              <div className="absolute w-4 h-4 bg-cyberhand-green rounded-full top-1/4 left-1/4 animate-pulse"></div>
              <div className="absolute w-3 h-3 bg-cyberhand-green rounded-full top-3/4 left-1/3 animate-pulse" style={{ animationDelay: "0.5s" }}></div>
              <div className="absolute w-5 h-5 bg-cyberhand-green rounded-full top-1/2 left-1/2 animate-pulse" style={{ animationDelay: "0.7s" }}></div>
              <div className="absolute w-4 h-4 bg-cyberhand-green rounded-full top-1/4 left-3/4 animate-pulse" style={{ animationDelay: "0.3s" }}></div>
              <div className="absolute w-3 h-3 bg-cyberhand-green rounded-full top-3/4 left-2/3 animate-pulse" style={{ animationDelay: "0.9s" }}></div>
              
              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M25,25 L50,50" stroke="#10B981" strokeWidth="0.5" />
                <path d="M33,75 L50,50" stroke="#10B981" strokeWidth="0.5" />
                <path d="M75,25 L50,50" stroke="#10B981" strokeWidth="0.5" />
                <path d="M67,75 L50,50" stroke="#10B981" strokeWidth="0.5" />
              </svg>
              
              {/* Center brain outline */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-cyberhand-green rounded-full opacity-30"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-cyberhand-green rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIIntegrationHero;
