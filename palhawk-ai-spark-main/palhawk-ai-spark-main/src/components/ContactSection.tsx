
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-section-gradient -z-10" />
      <div className="absolute inset-0 bg-grid -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to <span className="text-gradient">Transform</span> Your Business?
          </h2>
          <p className="text-gray-700 text-lg">
            Get in touch to learn how a custom PalHawk AI agent can help your business
            convert more leads and set more appointments, 24/7.
          </p>
        </div>
        
        <div className="flex justify-center max-w-5xl mx-auto">
          <div className="w-full lg:w-1/2">
            <div className="glass-card p-8 h-full">
              <h3 className="text-xl font-semibold mb-6 text-white">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-palhawk-blue mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <a 
                      href="mailto:palhawkai@gmail.com" 
                      className="text-gray-300 hover:text-palhawk-blue transition-colors"
                    >
                      palhawkai@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-palhawk-blue mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-white">WhatsApp</p>
                    <a 
                      href="https://wa.me/918538031328" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-palhawk-blue transition-colors"
                    >
                      +91 8538031328
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-palhawk-blue mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-white">Location</p>
                    <p className="text-gray-300">
                      Haringhata, Nadia 741249<br />
                      West Bengal, India
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-gray-200 mb-4">
                  Let's discuss how a custom AI agent can help your business grow.
                </p>
                <a 
                  href="https://wa.me/918538031328" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary inline-flex items-center"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Contact via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
