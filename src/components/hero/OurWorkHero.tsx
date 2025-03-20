
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const WorkCard = ({ 
  image, 
  title, 
  category 
}: { 
  image: string; 
  title: string; 
  category: string;
}) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
    <div className="aspect-video bg-gray-200 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 flex items-end">
        <div className="p-6 text-white">
          <h3 className="text-xl font-montserrat font-semibold">{title}</h3>
          <p className="text-sm opacity-80">{category}</p>
        </div>
      </div>
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  </div>
);

const OurWorkHero = () => {
  const [activeFilter, setActiveFilter] = useState("All Work");
  
  const filters = [
    { label: "All Work", count: 20 },
    { label: "Web Development", count: 10 },
    { label: "Marketing", count: 5 },
    { label: "AI Integration", count: 5 }
  ];
  
  const projects = [
    {
      image: "/placeholder.svg",
      title: "E-commerce Platform",
      category: "Web Development"
    },
    {
      image: "/placeholder.svg",
      title: "SEO Campaign",
      category: "Marketing"
    },
    {
      image: "/placeholder.svg",
      title: "AI Chatbot Integration",
      category: "AI Integration"
    }
  ];

  return (
    <section className="w-full">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-cyberhand-text-black font-montserrat mb-4 lg:mb-0">
          Our Work
        </h2>
        
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter.label}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                activeFilter === filter.label
                  ? "bg-cyberhand-yellow text-black"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => setActiveFilter(filter.label)}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {projects.map((project, index) => (
          <WorkCard
            key={index}
            image={project.image}
            title={project.title}
            category={project.category}
          />
        ))}
      </div>
      
      <div className="flex justify-end">
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-gray-200 hover:bg-gray-300 border-none"
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Previous projects</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-cyberhand-yellow hover:bg-cyberhand-yellow/80 border-none"
          >
            <ChevronRight className="h-5 w-5" />
            <span className="sr-only">Next projects</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OurWorkHero;
