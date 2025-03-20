
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, Mail, Phone } from "lucide-react";

const ContactHero = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
    // Reset form
    setFormData({ name: "", email: "", message: "" });
    // Show success message
    alert("Thanks for your message! We'll be in touch soon.");
  };

  return (
    <section className="flex flex-col lg:flex-row items-start space-y-12 lg:space-y-0 lg:space-x-12 w-full">
      <div className="w-full lg:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold text-cyberhand-text-black font-montserrat mb-4">
          Get in Touch
        </h2>
        <p className="text-lg text-cyberhand-text-gray font-roboto mb-8">
          Let's discuss how CyberHand can help your business grow.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyberhand-green"
              placeholder="Your name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyberhand-green"
              placeholder="your@email.com"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyberhand-green"
              placeholder="How can we help you?"
            />
          </div>
          
          <Button 
            type="submit" 
            className="bg-cyberhand-green hover:bg-cyberhand-green-light text-white font-medium rounded-md px-8 py-2 w-full md:w-auto"
          >
            Submit
          </Button>
        </form>
      </div>
      
      <div className="w-full lg:w-1/2 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-8">
        <h3 className="text-xl font-montserrat font-semibold mb-6">
          Other Ways to Connect
        </h3>
        
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="bg-cyberhand-green bg-opacity-10 rounded-full p-3 mr-4">
              <Mail className="h-6 w-6 text-cyberhand-green" />
            </div>
            <div>
              <h4 className="font-medium mb-1">Email Us</h4>
              <p className="text-cyberhand-text-gray">info@cyberhand.com</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-cyberhand-green bg-opacity-10 rounded-full p-3 mr-4">
              <Phone className="h-6 w-6 text-cyberhand-green" />
            </div>
            <div>
              <h4 className="font-medium mb-1">Call Us</h4>
              <p className="text-cyberhand-text-gray">(123) 456-7890</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-cyberhand-green bg-opacity-10 rounded-full p-3 mr-4">
              <MessageSquare className="h-6 w-6 text-cyberhand-green" />
            </div>
            <div>
              <h4 className="font-medium mb-1">Live Chat</h4>
              <p className="text-cyberhand-text-gray">Available Mon-Fri, 9AM-5PM EST</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
