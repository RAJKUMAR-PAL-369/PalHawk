
const DemoSection = () => {
  return (
    <section id="demo" className="py-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-palhawk-dark-purple bg-opacity-95 -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            🔍 See It in Action—<span className="text-gradient">Right Now</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Instead of reading more, experience the AI yourself.
            The Palhawk AI agent is live on this page, ready to guide you, answer questions, 
            and give you a glimpse of what it can do for your business.
          </p>
        </div>
        
        <div className="glass-card p-8 max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <div className="aspect-video rounded-lg bg-black/30 flex items-center justify-center mb-4 overflow-hidden relative">
                <div className="absolute inset-0 bg-palhawk-blue opacity-20 animate-pulse-slow"></div>
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-4-4a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-2.293 2.293a1 1 0 101.414 1.414l4-4a1 1 0 000-1.414z" clipRule="evenodd"></path>
                  </svg>
                </div>
              </div>
              <p className="text-gray-400 text-sm text-center">Demo video (coming soon)</p>
            </div>
            
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold mb-4 text-white">Try it yourself!</h3>
              <p className="text-gray-200 mb-6">
                Tap on the chat button on the bottom right corner of this page to interact with our AI agent.
                See how it handles inquiries, qualifies leads, and can schedule appointments.
              </p>
              
              <div className="p-4 bg-white/10 rounded-lg border border-white/20">
                <p className="text-gray-200 font-medium mb-2">You can ask the agent about:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>How PalHawk AI agents work</li>
                  <li>Pricing and implementation details</li>
                  <li>Customization options for your business</li>
                  <li>Schedule a demo or consultation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
