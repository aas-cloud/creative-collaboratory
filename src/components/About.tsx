
import { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.reveal');
            elements.forEach((el, i) => {
              setTimeout(() => {
                el.classList.add('active');
              }, i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-28 px-6 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="space-y-8">
            <div>
              <span className="inline-block mb-3 text-sm font-medium tracking-widest uppercase reveal">
                About Me
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6 reveal stagger-1">
                Designer & Creative Thinker
              </h2>
              <p className="text-muted-foreground mb-4 reveal stagger-2">
                I'm a multidisciplinary designer with over 5 years of experience creating thoughtful digital experiences. My approach combines strategic thinking with aesthetic sensitivity.
              </p>
              <p className="text-muted-foreground mb-6 reveal stagger-3">
                Through my work, I aim to create designs that are not only visually compelling but also meaningful and functional. I believe in the power of design to solve problems and improve lives.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 reveal stagger-3">
              <div>
                <h3 className="text-lg font-medium mb-3">Education</h3>
                <ul className="space-y-3">
                  <li className="text-sm">
                    <div className="font-medium">MFA in Design</div>
                    <div className="text-muted-foreground">Rhode Island School of Design</div>
                  </li>
                  <li className="text-sm">
                    <div className="font-medium">BFA in Visual Communication</div>
                    <div className="text-muted-foreground">School of Visual Arts</div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">Experience</h3>
                <ul className="space-y-3">
                  <li className="text-sm">
                    <div className="font-medium">Senior Designer</div>
                    <div className="text-muted-foreground">Creative Studio, 2020-Present</div>
                  </li>
                  <li className="text-sm">
                    <div className="font-medium">Visual Designer</div>
                    <div className="text-muted-foreground">Design Agency, 2018-2020</div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="pt-4 reveal stagger-3">
              <h3 className="text-lg font-medium mb-3">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {["UI/UX Design", "Brand Identity", "Typography", "Art Direction", "Design Systems", "User Research", "Visual Design", "Prototyping"].map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1.5 bg-white rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/5] bg-white/50 rounded-lg overflow-hidden reveal stagger-1">
              <img 
                src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=1920" 
                alt="Designer at work" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-28 h-28 md:w-40 md:h-40 bg-primary/10 rounded-full z-0 reveal stagger-2"></div>
            <div className="absolute -top-6 -left-6 w-20 h-20 md:w-32 md:h-32 border border-primary/20 rounded-full z-0 reveal stagger-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
