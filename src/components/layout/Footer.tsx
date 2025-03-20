
const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 h-[50px] md:h-[60px] bg-transparent z-50">
      <div className="container mx-auto px-4 h-full flex flex-col md:flex-row items-center justify-between text-white/60">
        <div className="text-sm font-roboto flex items-center">
          <img 
            src="/lovable-uploads/fb33df85-354d-4442-b02f-d1e6ce32fe98.png" 
            alt="CyberHand Icon" 
            className="h-5 w-5 mr-2"
          />
          © 2025 CyberHand. All Rights Reserved.
        </div>
        <div className="flex space-x-4 text-sm font-roboto">
          <a href="#" className="hover:text-[#10B981] transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-[#10B981] transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
