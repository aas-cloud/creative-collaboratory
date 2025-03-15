
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const MuseumEmotionsProject = () => {
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
            
            <h1 className="text-3xl md:text-5xl font-serif font-medium mb-6 reveal">Museum of Emotions | Exhibition</h1>
            
            <div className="flex flex-wrap gap-3 mb-8 reveal stagger-1">
              <span className="inline-block px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground">Exhibition</span>
              <span className="inline-block px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground">Interactive</span>
              <span className="inline-block px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground">Experience Design</span>
            </div>
          </div>
          
          <div className="relative mb-16 reveal stagger-2">
            <div className="aspect-[16/9] bg-muted rounded-lg overflow-hidden">
              <img 
                src="https://static.wixstatic.com/media/ba664b_f73a6d45a4a746e89b9a6519b5b3af55~mv2.jpg/v1/fill/w_980,h_551,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ba664b_f73a6d45a4a746e89b9a6519b5b3af55~mv2.jpg" 
                alt="Museum of Emotions Exhibition" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2 reveal stagger-3">
              <h2 className="text-2xl font-serif font-medium mb-6">Project Overview</h2>
              <p className="text-muted-foreground mb-6">
                The Museum of Emotions is an immersive exhibition design that explores the spectrum of human emotions through interactive installations, sensory experiences, and thoughtful spatial design. The project aims to create a space where visitors can explore, identify, and understand different emotional states while creating meaningful interactions.
              </p>
              <p className="text-muted-foreground mb-6">
                Each room in the exhibition is dedicated to a specific emotion, featuring unique visual, auditory, and tactile elements that evoke and represent that particular feeling. From joy to melancholy, anger to serenity, the museum offers a journey through the complexity of human emotional experiences.
              </p>
              <p className="text-muted-foreground">
                The design process involved extensive research into emotional psychology, color theory, sensory design, and interactive technologies to create meaningful and impactful experiences for visitors of all ages, staying true to the belief that great design is about evoking emotions and creating meaningful interactions.
              </p>
            </div>
            
            <div className="reveal stagger-4">
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-4">Project Details</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Client</span>
                    <span className="font-medium">Cultural Arts Center</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Timeline</span>
                    <span className="font-medium">6 months</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Year</span>
                    <span className="font-medium">2023</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Category</span>
                    <span className="font-medium">Exhibition</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Role</span>
                    <span className="font-medium">Experience Designer</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 reveal stagger-5">
            <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
              <img 
                src="https://static.wixstatic.com/media/ba664b_f8c7daf9bee94bfb836ea0bde2faa891~mv2.jpg/v1/fill/w_925,h_751,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ba664b_f8c7daf9bee94bfb836ea0bde2faa891~mv2.jpg" 
                alt="Museum exhibit - Joy room" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
              <img 
                src="https://static.wixstatic.com/media/ba664b_60c6abf43dcd412b9e2d4b427c5fc14a~mv2.jpg/v1/fill/w_925,h_751,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ba664b_60c6abf43dcd412b9e2d4b427c5fc14a~mv2.jpg" 
                alt="Museum exhibit - Interactive display" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="mb-16 reveal stagger-6">
            <h2 className="text-2xl font-serif font-medium mb-6">The Process</h2>
            <p className="text-muted-foreground mb-6">
              The project began with extensive research into the psychology of emotions, studying how different design elements like color, sound, texture, and space can evoke specific emotional responses. This research-driven approach ensured that the exhibition would tell a compelling emotional story and create meaningful interactions.
            </p>
            <p className="text-muted-foreground mb-6">
              The conceptualization phase followed, where we mapped out the emotional journey and developed the narrative flow of the exhibition. Each room was carefully designed to create a distinct atmosphere related to its specific emotion, using appropriate colors, lighting, sounds, and interactive elements.
            </p>
            <p className="text-muted-foreground">
              The implementation phase involved collaborating with various specialists including lighting designers, sound engineers, interactive technology experts, and installation artists to bring the conceptual designs to life. Throughout the process, we conducted user testing to refine the experiences and ensure they effectively communicated the intended emotions.
            </p>
          </div>
          
          <div className="aspect-[21/9] bg-muted rounded-lg overflow-hidden mb-16 reveal stagger-7">
            <img 
              src="https://static.wixstatic.com/media/ba664b_10e29d4f7f3c4d3c90f95c3f6b673386~mv2.jpg/v1/fill/w_1899,h_809,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ba664b_10e29d4f7f3c4d3c90f95c3f6b673386~mv2.jpg" 
              alt="Full museum exhibition hall" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="text-center reveal stagger-8">
            <h2 className="text-2xl font-serif font-medium mb-6">Next Project</h2>
            <div className="inline-block">
              <Link 
                to="/project/araku"
                className="group inline-flex items-center space-x-2 text-lg hover:text-primary transition-colors"
              >
                <span>Araku Coffee | Branding</span>
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

export default MuseumEmotionsProject;
