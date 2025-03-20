
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
    <header className="fixed top-0 left-0 right-0 h-[50px] md:h-[60px] bg-white z-50 shadow-sm">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <div className="flex items-center">
          {/* Logo */}
          <div className="text-xl font-bold text-black">
            <span className="font-montserrat">CyberHand</span>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {["Home", "Services", "AI Integration", "Our Work", "Packages", "Contact"].map((item) => (
            <button
              key={item}
              className="text-cyberhand-text-black hover:text-cyberhand-green transition-colors font-montserrat text-sm"
              onClick={() => handleNavClick(item)}
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Get Started Button - Desktop */}
        <div className="hidden md:block">
          <Button 
            className="bg-cyberhand-green hover:bg-cyberhand-green-light text-white font-medium rounded-full px-6"
            onClick={() => handleNavClick("Contact")}
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-[50px] left-0 right-0 shadow-md z-50">
          <div className="px-4 py-2 space-y-3">
            {["Home", "Services", "AI Integration", "Our Work", "Packages", "Contact"].map((item) => (
              <button
                key={item}
                className="block w-full text-left py-2 text-cyberhand-text-black hover:text-cyberhand-green transition-colors font-montserrat"
                onClick={() => handleNavClick(item)}
              >
                {item}
              </button>
            ))}
            <Button 
              className="w-full bg-cyberhand-green hover:bg-cyberhand-green-light text-white font-medium rounded-full mt-2"
              onClick={() => handleNavClick("Contact")}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
