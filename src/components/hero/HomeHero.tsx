
import { Button } from "@/components/ui/button";

const HomeHero = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between w-full h-full px-4 md:px-8">
      <div className="w-full lg:w-1/2 text-left mb-10 lg:mb-0">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black font-montserrat leading-tight mb-4">
          Your Digital Growth Partner
        </h1>
        <p className="text-xl md:text-2xl text-cyberhand-text-gray font-roboto mb-8">
          Scalable Web, Marketing, and AI Solutions for All Businesses
        </p>
        <Button className="bg-cyberhand-green hover:bg-cyberhand-green-light text-white px-8 py-6 rounded-md text-lg font-medium transform transition hover:scale-105">
          Get Started
        </Button>
      </div>
      <div className="w-full lg:w-1/2 relative">
        <div className="relative rounded-lg overflow-hidden p-8 lg:p-16 bg-gradient-to-br from-gray-100 to-white shadow-lg">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzcuNSAzNy41bDI1IDAgMCAxMjUgMTI1IDAgMCAyNSAxMjUgMCAwIDc1LTI1IDAgMCAxMi41LTEyNSAwIDAgMTIuNS0xMjUgMCAwLTI1TDEyLjUgMjYyLjUgMTIuNSAxMzcuNWwwLTEwMCAyNSAwem0wIDB6IiBzdHJva2U9IiM5OTkiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==')]"></div>
          <div className="relative z-10 flex flex-col gap-6">
            <div className="flex gap-4 items-center">
              <div className="bg-cyberhand-green bg-opacity-10 rounded-full p-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyberhand-green"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h10"/><path d="M7 12h10"/><path d="M7 17h10"/></svg>
              </div>
              <div>
                <h3 className="font-montserrat font-semibold text-lg">Web Development</h3>
                <p className="text-cyberhand-text-gray text-sm">Starting at $399</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="bg-blue-100 rounded-full p-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="m8 18 3-3-3-3"/><path d="m13 12 3-3-3-3"/><rect width="18" height="18" x="3" y="3" rx="2"/></svg>
              </div>
              <div>
                <h3 className="font-montserrat font-semibold text-lg">AI Integration</h3>
                <p className="text-cyberhand-text-gray text-sm">Starting at $499</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-4 -right-4 bg-white shadow-lg rounded-lg py-3 px-5 w-auto">
          <div className="flex items-center gap-2">
            <span className="text-5xl font-bold font-montserrat text-cyberhand-text-black">230+</span>
            <span className="text-sm text-cyberhand-text-gray leading-tight">companies<br/>trust us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
