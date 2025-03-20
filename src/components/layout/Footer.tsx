
const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 h-[50px] md:h-[60px] bg-white z-50 shadow-[0_-2px_4px_rgba(0,0,0,0.1)]">
      <div className="container mx-auto px-4 h-full flex flex-col md:flex-row items-center justify-between text-cyberhand-text-gray">
        <div className="text-sm font-roboto">
          © 2025 CyberHand. All Rights Reserved.
        </div>
        <div className="flex space-x-4 text-sm font-roboto">
          <a href="#" className="hover:text-cyberhand-green transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-cyberhand-green transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
