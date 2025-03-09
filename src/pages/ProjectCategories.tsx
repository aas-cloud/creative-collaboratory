
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Project } from '@/components/ProjectCard';
import { Link } from 'react-router-dom';

// Project data separated by categories
const designProjects: Project[] = [
  {
    id: "araku",
    title: "Araku Coffee | Branding",
    description: "A comprehensive brand identity system for Araku Coffee, focusing on sustainability and premium aesthetics.",
    imageUrl: "https://static.wixstatic.com/media/ba664b_3c03aa5a64f44ed79dba9c17d3082a8f~mv2.png/v1/fill/w_2308,h_1318,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/ba664b_3c03aa5a64f44ed79dba9c17d3082a8f~mv2.png",
    category: "Branding",
    tags: ["Branding", "Logo Design", "Packaging"],
    year: "2022"
  },
  {
    id: "zine",
    title: "Zine | Editorial Design",
    description: "A creative editorial design project showcasing modern typography and layout techniques for print media.",
    imageUrl: "https://static.wixstatic.com/media/ba664b_8839b87c9e8a4b19965d835402d8b6e4~mv2.jpg/v1/fill/w_1519,h_867,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ba664b_8839b87c9e8a4b19965d835402d8b6e4~mv2.jpg",
    category: "Editorial",
    tags: ["Editorial", "Print Design", "Typography"],
    year: "2022"
  },
  {
    id: "museum-emotions",
    title: "Museum of Emotions | Exhibition",
    description: "An immersive exhibition design that explores human emotions through interactive installations and visual storytelling.",
    imageUrl: "https://static.wixstatic.com/media/ba664b_f73a6d45a4a746e89b9a6519b5b3af55~mv2.jpg/v1/fill/w_980,h_551,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ba664b_f73a6d45a4a746e89b9a6519b5b3af55~mv2.jpg",
    category: "Exhibition",
    tags: ["Exhibition", "Interactive", "Experience Design"],
    year: "2023"
  },
];

const internshipProjects: Project[] = [
  {
    id: "project-1",
    title: "Brand Identity Design",
    description: "A comprehensive brand identity system for a modern fashion label.",
    imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1920",
    category: "Branding",
    tags: ["Branding", "Logo Design", "Identity"],
    year: "2023"
  },
  {
    id: "project-2",
    title: "Mobile App UI/UX",
    description: "User experience and interface design for a health and wellness mobile application.",
    imageUrl: "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&q=80&w=1920",
    category: "UI/UX",
    tags: ["Mobile", "UI Design", "User Experience"],
    year: "2023"
  },
];

const ProjectCategories = () => {
  const [activeTab, setActiveTab] = useState('design');

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
          <div className="mb-16 text-center">
            <h1 className="text-3xl md:text-5xl font-serif font-medium mb-6 reveal">Projects Portfolio</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto reveal stagger-1">
              A comprehensive collection of my work across various disciplines, 
              including personal design projects and professional internship experiences.
            </p>
          </div>
          
          <div className="flex justify-center mb-12 reveal stagger-2">
            <div className="inline-flex rounded-md border border-border p-1">
              <button
                onClick={() => setActiveTab('design')}
                className={`px-6 py-2 rounded-md text-sm transition-all ${
                  activeTab === 'design' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
                }`}
              >
                Design Projects
              </button>
              <button
                onClick={() => setActiveTab('internship')}
                className={`px-6 py-2 rounded-md text-sm transition-all ${
                  activeTab === 'internship' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
                }`}
              >
                Internships
              </button>
            </div>
          </div>
          
          {activeTab === 'design' && (
            <div className="space-y-20 reveal stagger-3">
              <h2 className="text-2xl font-serif font-medium mb-8">Final Design Projects</h2>
              
              {designProjects.map((project, index) => (
                <div key={project.id} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                  <div className={`order-2 lg:order-${index % 2 + 1}`}>
                    <span className="inline-block text-sm text-muted-foreground mb-2">{project.category}</span>
                    <h3 className="text-2xl font-serif font-medium mb-4">{project.title}</h3>
                    <p className="text-muted-foreground mb-6">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, i) => (
                        <span 
                          key={i} 
                          className="inline-block px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link 
                      to={`/project/${project.id}`}
                      className="inline-flex items-center text-sm hover:text-primary group transition-colors"
                    >
                      <span>View Project</span>
                      <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                  <div className={`order-1 lg:order-${2 - index % 2}`}>
                    <div className="rounded-lg overflow-hidden">
                      <img 
                        src={project.imageUrl} 
                        alt={project.title}
                        className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {activeTab === 'internship' && (
            <div className="space-y-20 reveal stagger-3">
              <h2 className="text-2xl font-serif font-medium mb-8">Internship Experience</h2>
              
              {internshipProjects.map((project, index) => (
                <div key={project.id} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                  <div className={`order-2 lg:order-${index % 2 + 1}`}>
                    <span className="inline-block text-sm text-muted-foreground mb-2">{project.category}</span>
                    <h3 className="text-2xl font-serif font-medium mb-4">{project.title}</h3>
                    <p className="text-muted-foreground mb-6">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, i) => (
                        <span 
                          key={i} 
                          className="inline-block px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link 
                      to={`/project/${project.id}`}
                      className="inline-flex items-center text-sm hover:text-primary group transition-colors"
                    >
                      <span>View Project</span>
                      <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                  <div className={`order-1 lg:order-${2 - index % 2}`}>
                    <div className="rounded-lg overflow-hidden">
                      <img 
                        src={project.imageUrl} 
                        alt={project.title}
                        className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectCategories;
