import { ArrowUpCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="pt-16 pb-8 relative">
      <div className="absolute inset-0 bg-palhawk-dark-purple -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-12 pb-12 border-b border-white/10">
          <div className="mb-8 md:mb-0">
            <img 
              src="/lovable-uploads/ac048456-3d9a-4210-abb6-c60763920690.png" 
              alt="PalHawk AI" 
              className="h-12 mb-4"
            />
            <p className="text-gray-300 max-w-xs">
              Your 24/7 AI Sales Assistant. Powered by conversation, driven by results.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#benefits" className="text-gray-300 hover:text-palhawk-blue transition-colors">
                    Benefits
                  </a>
                </li>
                <li>
                  <a href="#case-studies" className="text-gray-300 hover:text-palhawk-blue transition-colors">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#advantages" className="text-gray-300 hover:text-palhawk-blue transition-colors">
                    AI vs Human Agents
                  </a>
                </li>
                <li>
                  <a href="#demo" className="text-gray-300 hover:text-palhawk-blue transition-colors">
                    Demo
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-3">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:palhawkai@gmail.com" className="text-gray-300 hover:text-palhawk-blue transition-colors">
                    palhawkai@gmail.com
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/918538031328" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-palhawk-blue transition-colors">
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-white font-semibold mb-3">Our Services</h3>
              <ul className="space-y-2">
                <li className="text-gray-300">Custom AI Agents</li>
                <li className="text-gray-300">Lead Qualification</li>
                <li className="text-gray-300">Appointment Setting</li>
                <li className="text-gray-300">Spreadsheet Automation</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} PalHawk AI. All rights reserved.
          </p>
          
          <a 
            href="#top" 
            className="flex items-center text-palhawk-blue hover:text-palhawk-purple transition-colors"
          >
            <span className="mr-2">Back to top</span>
            <ArrowUpCircle size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
