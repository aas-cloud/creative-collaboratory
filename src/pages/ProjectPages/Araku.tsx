
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ArakuProject = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Reveal animations on scroll
  useEffect(() => {
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
    <div>
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10">
            <Link 
              to="/#projects" 
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Projects
            </Link>
            
            <h1 className="text-3xl md:text-5xl font-serif font-medium mb-6 reveal">Araku Coffee | Branding</h1>
            
            <div className="flex flex-wrap gap-3 mb-8 reveal stagger-1">
              <span className="inline-block px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground">Branding</span>
              <span className="inline-block px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground">Logo Design</span>
              <span className="inline-block px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground">Packaging</span>
            </div>
          </div>
          
          <div className="relative mb-16 reveal stagger-2">
            <div className="aspect-[16/9] bg-muted rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/ebc115e1-483b-42cf-9185-31eb45b574cb.png" 
                alt="Araku Coffee Branding" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2 reveal stagger-3">
              <h2 className="text-2xl font-serif font-medium mb-6">Project Overview</h2>
              <p className="text-muted-foreground mb-6">
                Araku Coffee is a premium coffee brand with a commitment to sustainability and quality. The branding project aimed to reflect their unique identity and values while creating a distinctive visual language.
              </p>
              <p className="text-muted-foreground mb-6">
                The project encompassed a comprehensive brand identity system including logo design, packaging, color palette development, typography selection, and brand guidelines that would resonate with their target audience.
              </p>
              <p className="text-muted-foreground">
                The design approach focused on combining contemporary aesthetics with organic elements that represent the coffee's origin and the brand's sustainable practices.
              </p>
            </div>
            
            <div className="reveal stagger-4">
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-4">Project Details</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Client</span>
                    <span className="font-medium">Araku Coffee</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Timeline</span>
                    <span className="font-medium">3 months</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Year</span>
                    <span className="font-medium">2022</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Category</span>
                    <span className="font-medium">Branding</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Role</span>
                    <span className="font-medium">Lead Designer</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 reveal stagger-5">
            <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
              <img 
                src="https://static.wixstatic.com/media/ba664b_58b5b44b5cb14bc08a5df625a982fbf4~mv2.jpg/v1/fill/w_925,h_659,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ba664b_58b5b44b5cb14bc08a5df625a982fbf4~mv2.jpg" 
                alt="Araku coffee packaging" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
              <img 
                src="https://static.wixstatic.com/media/ba664b_88e9c9fa64804bd7a9ec2d63fd7d1fc4~mv2.jpg/v1/fill/w_925,h_659,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ba664b_88e9c9fa64804bd7a9ec2d63fd7d1fc4~mv2.jpg" 
                alt="Araku branding materials" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="mb-16 reveal stagger-6">
            <h2 className="text-2xl font-serif font-medium mb-6">The Process</h2>
            <p className="text-muted-foreground mb-6">
              The project began with an extensive research phase that involved understanding Araku Coffee's unique story, values, and market positioning. This included analyzing competitors and identifying opportunities to create a distinctive brand identity.
            </p>
            <p className="text-muted-foreground mb-6">
              Following the research, multiple design concepts were developed and refined based on client feedback. The selected direction emphasizes clean, modern aesthetics with organic elements that highlight the brand's connection to nature and sustainability.
            </p>
            <p className="text-muted-foreground">
              The final deliverables included a comprehensive brand identity system with logo variations, packaging designs, typography guidelines, and a color palette that reflects the premium nature of the product while connecting to its origins.
            </p>
          </div>
          
          <div className="aspect-[21/9] bg-muted rounded-lg overflow-hidden mb-16 reveal stagger-7">
            <img 
              src="/lovable-uploads/ebc115e1-483b-42cf-9185-31eb45b574cb.png" 
              alt="Araku coffee branding showcase" 
              className="w-full h-full object-contain"
            />
          </div>
          
          <div className="text-center reveal stagger-8">
            <h2 className="text-2xl font-serif font-medium mb-6">Next Project</h2>
            <div className="inline-block">
              <Link 
                to="/project/project-2"
                className="group inline-flex items-center space-x-2 text-lg hover:text-primary transition-colors"
              >
                <span>Mobile App UI/UX</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ArakuProject;
