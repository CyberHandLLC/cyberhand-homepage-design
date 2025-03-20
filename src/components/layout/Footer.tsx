
const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 h-[50px] md:h-[60px] bg-transparent z-50">
      <div className="container mx-auto px-4 h-full flex flex-col md:flex-row items-center justify-between text-white/60">
        <div className="text-sm font-roboto">
          © 2025 CyberHand. All Rights Reserved.
        </div>
        <div className="flex space-x-4 text-sm font-roboto">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
