
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const PackageCard = ({ 
  title, 
  description, 
  price, 
  monthly,
  features,
  highlighted = false
}: { 
  title: string; 
  description: string;
  price: string;
  monthly: string;
  features: string[];
  highlighted?: boolean;
}) => (
  <div className={`rounded-lg p-6 transition-all ${
    highlighted 
      ? "bg-gradient-to-br from-cyberhand-green/10 to-cyberhand-green/5 border border-cyberhand-green/20" 
      : "bg-white border border-gray-200"
  }`}>
    <h3 className="text-xl font-montserrat font-semibold mb-2">{title}</h3>
    <p className="text-cyberhand-text-gray font-roboto text-sm mb-4 h-24">{description}</p>
    
    <div className="mb-6">
      <div className="flex items-end">
        <span className="text-3xl font-bold font-montserrat">{price}</span>
        {monthly && <span className="text-cyberhand-text-gray ml-2">+ {monthly}/month</span>}
      </div>
    </div>
    
    <ul className="space-y-2 mb-6">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <Check className="h-5 w-5 text-cyberhand-green shrink-0 mr-2 mt-0.5" />
          <span className="text-sm">{feature}</span>
        </li>
      ))}
    </ul>
    
    <Button className={`w-full ${
      highlighted 
        ? "bg-cyberhand-green hover:bg-cyberhand-green-light" 
        : "bg-gray-900 hover:bg-gray-800"
    } text-white font-medium rounded-md`}>
      Get Started
    </Button>
  </div>
);

const PackagesHero = () => {
  const packages = [
    {
      title: "Starter Package",
      description: "Ideal for startups. Includes a one-page site, business hosting, domain, SSL, and 1 content piece/month.",
      price: "$499",
      monthly: "$49",
      features: [
        "One-page website",
        "Business hosting",
        "Domain registration",
        "SSL certificate",
        "1 content piece/month"
      ]
    },
    {
      title: "Pro Package",
      description: "For growing businesses. Up to 5 pages, SEO, 2 content pieces/month.",
      price: "$799",
      monthly: "$149",
      features: [
        "Up to 5 pages",
        "SEO optimization",
        "Business hosting",
        "Domain & SSL",
        "2 content pieces/month"
      ],
      highlighted: true
    },
    {
      title: "Business Package",
      description: "For established businesses. Up to 15 pages, SEO, Google Ads, 4 content pieces/month.",
      price: "$999",
      monthly: "$199",
      features: [
        "Up to 15 pages",
        "Full SEO suite",
        "Google Ads management",
        "Premium hosting",
        "4 content pieces/month"
      ]
    },
    {
      title: "Enterprise Package",
      description: "For large businesses. Up to 40 pages with e-commerce, AI integration, full marketing suite.",
      price: "Custom",
      monthly: "$399",
      features: [
        "Up to 40 pages",
        "E-commerce functionality",
        "AI integration",
        "Full marketing suite",
        "Dedicated support"
      ]
    }
  ];

  return (
    <section className="w-full">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-cyberhand-text-black font-montserrat mb-4">
          Packages for Every Business
        </h2>
        <p className="text-cyberhand-text-gray font-roboto max-w-2xl mx-auto">
          Choose the perfect package to boost your digital presence
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {packages.map((pkg, index) => (
          <PackageCard
            key={index}
            title={pkg.title}
            description={pkg.description}
            price={pkg.price}
            monthly={pkg.monthly}
            features={pkg.features}
            highlighted={pkg.highlighted}
          />
        ))}
      </div>
    </section>
  );
};

export default PackagesHero;
