
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = ({ onNavigate }: { onNavigate: (section: string) => void }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const handleNavClick = (section: string) => {
    onNavigate(section);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-[50px] md:h-[60px] bg-transparent z-50">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <div className="flex items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/6ea9a702-91a0-4ba2-883e-ea6db5a6a940.png" 
              alt="CyberHand Logo" 
              className="h-8 md:h-10 mr-2"
            />
            <span className="font-montserrat text-xl font-bold text-white">CyberHand</span>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-6 text-white/70">
            <button
              className="text-white/90 hover:text-white transition-colors text-sm"
              onClick={() => handleNavClick("Services")}
            >
              ALL SERVICES
            </button>
            
            <button
              className="hover:text-white transition-colors text-sm"
              onClick={() => handleNavClick("Services")}
            >
              GOOGLE ADS
            </button>
            
            <button
              className="hover:text-white transition-colors text-sm"
              onClick={() => handleNavClick("Services")}
            >
              META ADS
            </button>
            
            <button
              className="hover:text-white transition-colors text-sm"
              onClick={() => handleNavClick("Services")}
            >
              AMAZON ADS
            </button>
          </div>
          
          <button
            className="text-white/90 hover:text-white transition-colors text-sm"
            onClick={() => handleNavClick("Our Work")}
          >
            VIEW PORTFOLIO
          </button>
        </nav>

        {/* Get Started Button - Desktop */}
        <div className="hidden md:block">
          <Button 
            variant="ghost"
            className="text-white hover:text-white hover:bg-white/10 font-medium"
            onClick={() => {}}
          >
            MENU
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="text-white"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1a3a4a]/90 backdrop-blur-md absolute top-[50px] left-0 right-0 shadow-md z-50 border-t border-white/10">
          <div className="px-4 py-2 space-y-3">
            {["ALL SERVICES", "GOOGLE ADS", "META ADS", "AMAZON ADS", "VIEW PORTFOLIO"].map((item) => (
              <button
                key={item}
                className="block w-full text-left py-2 text-white/80 hover:text-white transition-colors"
                onClick={() => handleNavClick(item === "ALL SERVICES" ? "Services" : item === "VIEW PORTFOLIO" ? "Our Work" : "Services")}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
