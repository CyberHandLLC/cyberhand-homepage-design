
import { Laptop, Megaphone, Cloud, BrainCircuit } from "lucide-react";

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
}) => (
  <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
    <div className="bg-cyberhand-green bg-opacity-10 rounded-full p-4 inline-flex mb-4">
      <Icon className="h-8 w-8 text-cyberhand-green" />
    </div>
    <h3 className="text-xl font-montserrat font-semibold mb-2">{title}</h3>
    <p className="text-cyberhand-text-gray font-roboto">{description}</p>
  </div>
);

const ServicesHero = () => {
  const services = [
    {
      icon: Laptop,
      title: "Web Development",
      description: "Custom websites from one-page landing sites to e-commerce platforms, starting at $399."
    },
    {
      icon: Megaphone,
      title: "Marketing Services",
      description: "Boost your online presence with Google Ads, SEO, and social media management, starting at $49/month."
    },
    {
      icon: Cloud,
      title: "Cloud Hosting",
      description: "Reliable, scalable hosting solutions starting at $24.99/month."
    },
    {
      icon: BrainCircuit,
      title: "AI Integration",
      description: "Enhance your business with tailored AI solutions, starting at $499 setup."
    }
  ];

  return (
    <section className="w-full">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-cyberhand-text-black font-montserrat mb-4">Our Services</h2>
        <p className="text-cyberhand-text-gray font-roboto max-w-2xl mx-auto">
          Comprehensive digital solutions to power your business growth
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesHero;
