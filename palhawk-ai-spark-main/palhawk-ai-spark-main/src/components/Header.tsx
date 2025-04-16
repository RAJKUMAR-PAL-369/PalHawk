
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav py-2' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/ac048456-3d9a-4210-abb6-c60763920690.png" 
            alt="PalHawk AI" 
            className="h-12 md:h-14"
          />
        </div>
        
        <div className="hidden md:flex space-x-8 items-center">
          <nav className="flex space-x-6">
            <a href="#benefits" className="text-white hover:text-palhawk-purple transition-colors">Benefits</a>
            <a href="#case-studies" className="text-white hover:text-palhawk-purple transition-colors">Case Studies</a>
            <a href="#advantages" className="text-white hover:text-palhawk-purple transition-colors">Advantages</a>
            <a href="#contact" className="text-white hover:text-palhawk-purple transition-colors">Contact</a>
          </nav>
          <a 
            href="#contact" 
            className="btn-primary"
          >
            Get Started
          </a>
        </div>
        
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass-card py-4 animate-fade-in">
          <nav className="flex flex-col space-y-4 px-6">
            <a 
              href="#benefits" 
              className="text-white hover:text-palhawk-purple transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Benefits
            </a>
            <a 
              href="#case-studies" 
              className="text-white hover:text-palhawk-purple transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Case Studies
            </a>
            <a 
              href="#advantages" 
              className="text-white hover:text-palhawk-purple transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Advantages
            </a>
            <a 
              href="#contact" 
              className="text-white hover:text-palhawk-purple transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <a 
              href="#contact" 
              className="btn-primary w-full text-center mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
