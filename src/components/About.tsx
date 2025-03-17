
import { useEffect, useRef } from 'react';
import { GraduationCap, Briefcase, Code, Palette, BookText } from 'lucide-react';

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
              <h2 className="text-3xl md:text-4xl font-light uppercase tracking-wider mb-6 reveal stagger-1">
                Designer & Creative Thinker
              </h2>
              <p className="text-muted-foreground mb-4 reveal stagger-2">
                I'm a passionate designer and creative thinker, always looking for ways to merge storytelling with functionality. Whether it's crafting immersive packaging experiences for brands like Araku Coffee, refining digital interfaces, or building engaging learning environments, I believe that great design isn't just about aesthetics—it's about evoking emotions and creating meaningful interactions.
              </p>
              <p className="text-muted-foreground mb-6 reveal stagger-3">
                I thrive at the intersection of culture, sustainability, and innovation. My approach to design is deeply research-driven, ensuring that every project I work on tells a story. Whether it's integrating tribal heritage into modern branding or leveraging eco-friendly materials like water-soluble paper for conscious packaging solutions, I aim to push the boundaries of design while staying true to its roots.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal stagger-3">
              <div className="bg-white/50 p-5 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-medium">Education</h3>
                </div>
                <ul className="space-y-3">
                  <li className="text-sm">
                    <div className="font-medium">Graphics and communication, B.Des</div>
                    <div className="text-muted-foreground">The Design Village</div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/50 p-5 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Briefcase className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-medium">Experience</h3>
                </div>
                <ul className="space-y-3">
                  <li className="text-sm">
                    <div className="font-medium">IIT Guwahati & Learnhill Technologies</div>
                    <div className="text-muted-foreground">Gamifying Curriculums</div>
                  </li>
                  <li className="text-sm">
                    <div className="font-medium">Volunteer in Auroville</div>
                    <div className="text-muted-foreground">Nandanam and Oli School</div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6 reveal stagger-3">
              <div className="bg-white/50 p-5 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Palette className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-medium">Design Skills</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["UI/UX Design", "Brand Identity", "Typography", "Art Direction", "Design Systems", "User Research", "Sustainable Design", "Packaging", "Cultural Design", "Exhibition Design", "Storytelling"].map((skill, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1.5 bg-white rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-white/50 p-5 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Code className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-medium">Software Skills</h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {[
                    { name: "Photoshop", level: 90 },
                    { name: "Illustrator", level: 85 },
                    { name: "InDesign", level: 80 },
                    { name: "Figma", level: 95 },
                    { name: "After Effects", level: 75 },
                    { name: "Blender", level: 60 },
                    { name: "Premiere Pro", level: 70 },
                    { name: "XD", level: 85 }
                  ].map((software, index) => (
                    <div key={index} className="flex flex-col">
                      <span className="text-sm font-medium mb-1">{software.name}</span>
                      <div className="h-2 bg-white/50 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary rounded-full"
                          style={{ width: `${software.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
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
