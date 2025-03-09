
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-5 px-6 md:px-12 transition-all duration-500",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="text-xl font-serif font-medium tracking-tight transition-all hover:opacity-80"
        >
          Aastha Mehdiratta
        </Link>
        
        <div className="hidden md:flex space-x-8">
          <a href="#projects" className="line-hover text-sm font-medium">Projects</a>
          <a href="#about" className="line-hover text-sm font-medium">About</a>
          <a href="#contact" className="line-hover text-sm font-medium">Contact</a>
        </div>
        
        <button 
          className="md:hidden flex flex-col space-y-1.5"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={cn(
            "w-6 h-0.5 bg-current transition-all", 
            mobileMenuOpen && "translate-y-2 rotate-45"
          )}></span>
          <span className={cn(
            "w-6 h-0.5 bg-current transition-all", 
            mobileMenuOpen && "opacity-0"
          )}></span>
          <span className={cn(
            "w-6 h-0.5 bg-current transition-all", 
            mobileMenuOpen && "-translate-y-2 -rotate-45"
          )}></span>
        </button>
      </div>
      
      {/* Mobile menu */}
      <div className={cn(
        "fixed inset-0 top-16 bg-white z-40 pt-10 px-6 transition-all duration-500",
        mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        <div className="flex flex-col space-y-6 items-center text-lg">
          <a 
            href="#projects" 
            className="py-2 px-4" 
            onClick={() => setMobileMenuOpen(false)}
          >
            Projects
          </a>
          <a 
            href="#about" 
            className="py-2 px-4" 
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="#contact" 
            className="py-2 px-4" 
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
