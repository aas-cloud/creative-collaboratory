
import { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center px-6 py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
      </div>
      
      <div 
        ref={textRef}
        className="max-w-4xl mx-auto text-center z-10 pt-16"
      >
        <span className="inline-block mb-4 text-sm font-medium tracking-widest uppercase reveal">
          Portfolio
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium leading-tight mb-8 md:mb-10 reveal stagger-1">
          Creating thoughtful <br className="hidden md:block" /> 
          <span className="italic">experiences</span> through design
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 reveal stagger-2">
          I'm a designer who combines aesthetics with functionality to create memorable digital solutions.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 reveal stagger-3">
          <a 
            href="#projects" 
            className="px-8 py-3 bg-primary text-primary-foreground rounded-full transition-all hover:bg-primary/90 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            View Projects
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 border border-border rounded-full hover:bg-muted transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Get in Touch
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          className="w-6 h-6 text-muted-foreground" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
