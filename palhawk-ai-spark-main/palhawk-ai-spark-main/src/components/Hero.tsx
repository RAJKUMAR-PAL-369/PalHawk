
import { ArrowDownCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-24 pb-10 flex items-center overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-palhawk-dark-purple to-black -z-10" />
      <div className="absolute inset-0 bg-dots opacity-20 -z-10" />
      <div className="absolute top-40 -right-20 w-72 h-72 rounded-full bg-palhawk-blue opacity-10 blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 -left-20 w-80 h-80 rounded-full bg-palhawk-purple opacity-10 blur-3xl animate-pulse-slow" />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              <span className="text-gradient">Your 24/7 AI Sales Assistant.</span>
              <span className="text-white block mt-2">Powered by Conversation.</span>
            </h1>
            
            <p className="text-lg text-gray-200 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              What if your website had a team member who never sleeps, never misses a lead, 
              and always says the right thing? That's exactly what Palhawk AI agents are built 
              to be—tireless digital assistants who engage every visitor, qualify them, collect 
              their details, and schedule appointments… automatically.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <a href="#contact" className="btn-primary">
                Get Your Custom AI Agent
              </a>
              <a href="#demo" className="btn-secondary">
                See It In Action
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="glass-card p-6 md:p-10 ml-0 md:ml-10 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="relative">
                <div className="absolute -top-14 -right-14 bg-palhawk-blue rounded-full w-28 h-28 blur-2xl opacity-30" />
                <div className="absolute -bottom-10 -left-10 bg-palhawk-purple rounded-full w-24 h-24 blur-2xl opacity-30" />
                
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white">Experience the AI agent</h3>
                <p className="text-gray-200 mb-6">
                  Click the chat button in the corner to interact with our AI agent and see how it can 
                  help your business convert more leads into appointments.
                </p>
                
                <div className="flex items-center space-x-2 text-palhawk-blue">
                  <ArrowDownCircle className="animate-bounce" />
                  <span>Try it now</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#benefits" className="text-white/70 hover:text-white">
          <ArrowDownCircle size={36} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
