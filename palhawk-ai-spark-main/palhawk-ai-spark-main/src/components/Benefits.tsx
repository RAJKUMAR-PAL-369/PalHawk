
import { Brain, Calendar, MessageSquare, Database } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Brain className="h-10 w-10 text-palhawk-purple" />,
      title: "Intelligent Conversations",
      description: "Engage intelligently with every website visitor—no scripts, no generic replies",
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-palhawk-blue" />,
      title: "Lead Qualification",
      description: "Ask qualifying questions tailored to your service or product",
    },
    {
      icon: <Database className="h-10 w-10 text-palhawk-pink" />,
      title: "Automated Data Collection",
      description: "Log responses directly into an integrated spreadsheet for your team",
    },
    {
      icon: <Calendar className="h-10 w-10 text-palhawk-light-blue" />,
      title: "Calendar Integration",
      description: "Sync with your calendar and book appointments automatically",
    },
  ];

  return (
    <section id="benefits" className="py-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-section-gradient -z-10" />
      <div className="absolute inset-0 bg-grid -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🧠 Why Palhawk AI Agents Are a <span className="text-gradient">Game-Changer</span>
          </h2>
          <p className="text-gray-700 text-lg">
            Our agents aren't basic chatbots. They're advanced conversational AI assistants, 
            designed to transform your lead generation and appointment setting.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="glass-card p-6 hover-scale"
              style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
            >
              <div className="mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-200 mb-6 max-w-3xl mx-auto">
            These agents are custom-built using the most advanced technological tools. 
            Giving you the power of enterprise automation—without enterprise pricing.
          </p>
          <a href="#contact" className="btn-primary inline-block">
            Get Your Custom Agent
          </a>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
