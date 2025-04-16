
import { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import CaseStudies from '../components/CaseStudies';
import Advantages from '../components/Advantages';
import DemoSection from '../components/DemoSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Add the Voiceflow chat widget script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      (function(d, t) {
          var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
          v.onload = function() {
            window.voiceflow.chat.load({
              verify: { projectID: '67fcbf0e62f6849a97c87229' },
              url: 'https://general-runtime.voiceflow.com',
              versionID: 'production',
              voice: {
                url: "https://runtime-api.voiceflow.com"
              }
            });
          }
          v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
      })(document, 'script');
    `;
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="top" className="flex flex-col min-h-screen bg-gradient-to-br from-palhawk-dark-purple to-black text-white">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <CaseStudies />
        <Advantages />
        <DemoSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
