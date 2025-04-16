
import { useState } from 'react';
import { Building, ArrowRight } from 'lucide-react';

const CaseStudies = () => {
  const [activeCase, setActiveCase] = useState(0);
  
  const cases = [
    {
      company: "Klarna",
      title: "Revolutionizing Customer Service with AI Chatbots",
      content: "Klarna integrated an AI chatbot into its customer support framework, automating 70% of customer service inquiries. Within just one month, the chatbot managed 2.3 million conversations, reducing issue resolution time from 11 minutes to 2 minutes. This transformation is projected to contribute an estimated $40 million in profits within its first operational year.",
      source: "arsturn.com",
    },
    {
      company: "Verizon",
      title: "Boosting Sales with AI-Powered Chatbot Support",
      content: "Verizon implemented a Google AI chatbot assistant built on the Gemini model to support customer service agents in real time. The chatbot accesses over 15,000 internal documents to deliver instant, accurate answers, enabling agents to work faster and smarter. Since full deployment in January 2025, Verizon has reported a nearly 40% increase in sales.",
      source: "",
    },
    {
      company: "IndiGo Airlines",
      title: "Streamlining Support with AI Chatbots",
      content: "IndiGo partnered with Yellow.ai to deploy a multilingual AI chatbot that automates over 35 support use cases and 300 customer journeys. It provides 24/7 personalized assistance for booking, flight info, and refund queries. The solution improved customer satisfaction and dramatically reduced human workload.",
      source: "",
    },
    {
      company: "H&M",
      title: "Personalizing Online Shopping with AI Chatbots",
      content: "H&M introduced a chatbot to assist customers with product searches, outfit recommendations, and order tracking. The chatbot improved engagement, guided users through style-based selections, and boosted e-commerce conversion rates. It also eased pressure on customer service teams by handling common queries instantly.",
      source: "",
    },
    {
      company: "Marriott International",
      title: "Enhancing Guest Experience with Chatbots",
      content: "Marriott deployed a chatbot solution to manage reservations, answer FAQs, and support loyalty program interactions across its hotel brands. Guests receive 24/7 support, including personalized travel assistance, directly through chat interfaces. This led to higher satisfaction scores and operational efficiency across its global customer service teams.",
      source: "",
    }
  ];

  return (
    <section id="case-studies" className="py-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-palhawk-dark-purple bg-opacity-95 -z-10" />
      <div className="absolute inset-0 bg-dots opacity-5 -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Real Companies, <span className="text-gradient">Real Results</span>
          </h2>
          <p className="text-gray-300 text-lg">
            See how leading businesses are transforming their operations with AI chatbots.
            These case studies demonstrate the power of conversational AI in action.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Case studies navigation */}
          <div className="lg:w-1/3">
            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-6 text-white">Success Stories</h3>
              <div className="space-y-4">
                {cases.map((caseItem, index) => (
                  <button
                    key={index}
                    className={`flex items-center w-full text-left p-3 rounded-lg transition-all ${
                      activeCase === index 
                        ? 'bg-main-gradient text-white' 
                        : 'hover:bg-white/5 text-gray-300'
                    }`}
                    onClick={() => setActiveCase(index)}
                  >
                    <Building size={20} className="mr-3 flex-shrink-0" />
                    <span className="font-medium">{caseItem.company}</span>
                    {activeCase === index && (
                      <ArrowRight size={18} className="ml-auto flex-shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Case study details */}
          <div className="lg:w-2/3">
            <div className="glass-card p-8 h-full">
              <div className="animate-fade-in">
                <div className="mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                    {cases[activeCase].company}
                  </h3>
                  <h4 className="text-xl text-palhawk-blue mb-1">{cases[activeCase].title}</h4>
                  {cases[activeCase].source && (
                    <p className="text-sm text-gray-400">Source: {cases[activeCase].source}</p>
                  )}
                </div>
                
                <p className="text-gray-200 text-lg leading-relaxed mb-6">
                  {cases[activeCase].content}
                </p>
                
                <div className="mt-8">
                  <p className="text-palhawk-purple font-medium">
                    Could your business be the next success story? Get started with Palhawk AI today.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
