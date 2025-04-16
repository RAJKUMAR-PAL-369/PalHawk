
import { CheckCircle } from 'lucide-react';

const Advantages = () => {
  const advantages = [
    {
      human: "Limited working hours",
      ai: "Available 24/7/365, never sick or on vacation",
    },
    {
      human: "Variable performance based on mood and energy",
      ai: "Consistent performance and messaging",
    },
    {
      human: "Can handle one conversation at a time",
      ai: "Can handle unlimited conversations simultaneously",
    },
    {
      human: "Knowledge limited to training and experience",
      ai: "Access to entire knowledge base instantly",
    },
    {
      human: "Salary, benefits, training costs",
      ai: "Fixed monthly cost with no overheads",
    },
    {
      human: "Manual data entry prone to errors",
      ai: "Automatic and accurate data collection",
    }
  ];

  return (
    <section id="advantages" className="py-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-section-gradient -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AI Agents vs <span className="text-gradient">Human Agents</span>
          </h2>
          <p className="text-gray-700 text-lg">
            Discover why businesses are increasingly turning to AI-powered agents for 
            lead generation and customer engagement.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="glass-card overflow-hidden rounded-2xl">
            {/* Table header */}
            <div className="grid grid-cols-3 text-center p-4 border-b border-white/10">
              <div className="font-semibold text-white">Comparison Point</div>
              <div className="font-semibold text-white">Human Agents</div>
              <div className="font-semibold text-palhawk-blue">AI Agents</div>
            </div>
            
            {/* Table body */}
            <div className="divide-y divide-white/10">
              {advantages.map((item, index) => (
                <div key={index} className="grid grid-cols-3 p-4 items-center hover:bg-white/5 transition-colors">
                  <div className="text-sm md:text-base text-white font-medium col-span-3 md:col-span-1 mb-2 md:mb-0">
                    {index === 0 && "Working Hours"}
                    {index === 1 && "Performance"}
                    {index === 2 && "Capacity"}
                    {index === 3 && "Knowledge"}
                    {index === 4 && "Cost"}
                    {index === 5 && "Data Entry"}
                  </div>
                  <div className="text-sm md:text-base text-gray-300 px-3 col-span-3 md:col-span-1 mb-2 md:mb-0 flex items-center">
                    <span className="w-3 h-3 rounded-full bg-red-500 inline-block mr-2"></span>
                    {item.human}
                  </div>
                  <div className="text-sm md:text-base text-palhawk-blue px-3 col-span-3 md:col-span-1 flex items-center">
                    <CheckCircle className="text-palhawk-blue mr-2 flex-shrink-0" size={16} />
                    {item.ai}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
              While human agents bring valuable empathy and creativity to complex situations, 
              AI agents excel at consistent, scalable, and cost-effective lead generation and qualification.
            </p>
            <a href="#contact" className="btn-primary inline-block">
              Get Started With AI Agents
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
