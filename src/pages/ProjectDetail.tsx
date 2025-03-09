
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Project } from '@/components/ProjectCard';

// Sample project data (this would normally come from an API)
const projectsData: Project[] = [
  {
    id: "project-1",
    title: "Brand Identity Design",
    description: "A comprehensive brand identity system for a modern fashion label, focusing on minimalist aesthetics and versatile applications across digital and print media.",
    imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1920",
    category: "Branding",
    tags: ["Branding", "Logo Design", "Identity"],
    year: "2023"
  },
  {
    id: "project-2",
    title: "Mobile App UI/UX",
    description: "User experience and interface design for a health and wellness mobile application. The project involved extensive research, wireframing, prototyping, and usability testing.",
    imageUrl: "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&q=80&w=1920",
    category: "UI/UX",
    tags: ["Mobile", "UI Design", "User Experience"],
    year: "2023"
  },
  {
    id: "project-3",
    title: "E-Commerce Website",
    description: "Complete redesign of an e-commerce platform focused on user conversion. The project included a new visual language, simplified checkout process, and responsive design implementation.",
    imageUrl: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?auto=format&fit=crop&q=80&w=1920",
    category: "Web Design",
    tags: ["Web Design", "E-commerce", "UI/UX"],
    year: "2022"
  },
  {
    id: "project-4",
    title: "Photography Exhibition",
    description: "Art direction and curation for a contemporary photography exhibition. The project involved space design, visual narrative development, and promotional material creation.",
    imageUrl: "https://images.unsplash.com/photo-1540304453527-62f979142a17?auto=format&fit=crop&q=80&w=1920",
    category: "Art Direction",
    tags: ["Art Direction", "Exhibition", "Photography"],
    year: "2022"
  }
];

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Simulating API fetch with setTimeout
    setLoading(true);
    setTimeout(() => {
      const foundProject = projectsData.find(p => p.id === id) || null;
      setProject(foundProject);
      setLoading(false);
    }, 300);
  }, [id]);

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
  }, [loading]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6">
        <h1 className="text-2xl font-medium mb-4">Project not found</h1>
        <p className="text-muted-foreground mb-6">The project you are looking for doesn't exist or has been removed.</p>
        <Link 
          to="/" 
          className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    );
  }

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
            
            <h1 className="text-3xl md:text-5xl font-serif font-medium mb-6 reveal">{project.title}</h1>
            
            <div className="flex flex-wrap gap-3 mb-8 reveal stagger-1">
              {project.tags.map((tag, i) => (
                <span 
                  key={i} 
                  className="inline-block px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="relative mb-16 reveal stagger-2">
            <div 
              className={`aspect-[16/9] bg-muted rounded-lg overflow-hidden ${
                imageLoaded ? 'animate-image-fade' : ''
              }`}
            >
              {!imageLoaded && (
                <div className="absolute inset-0 bg-muted animate-pulse"></div>
              )}
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-full object-cover"
                onLoad={() => setImageLoaded(true)}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2 reveal stagger-3">
              <h2 className="text-2xl font-serif font-medium mb-6">Project Overview</h2>
              <p className="text-muted-foreground mb-6">
                {project.description} The project aimed to create a cohesive visual system that would resonate with the target audience while maintaining flexibility across various touchpoints.
              </p>
              <p className="text-muted-foreground mb-6">
                The design process involved extensive research into industry trends, competitor analysis, and target audience preferences. Multiple concepts were developed and refined based on client feedback and testing.
              </p>
              <p className="text-muted-foreground">
                The final deliverables included a comprehensive brand guidelines document, logo variations, color palette, typography specifications, and application examples across digital and print media.
              </p>
            </div>
            
            <div className="reveal stagger-4">
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-4">Project Details</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Client</span>
                    <span className="font-medium">Client Name</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Timeline</span>
                    <span className="font-medium">8 weeks</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Year</span>
                    <span className="font-medium">{project.year}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Category</span>
                    <span className="font-medium">{project.category}</span>
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
                src="https://images.unsplash.com/photo-1636633762833-5d1658f1e29b?auto=format&fit=crop&q=80&w=800" 
                alt="Project detail" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1586717799252-bd134ad00e26?auto=format&fit=crop&q=80&w=800" 
                alt="Project detail" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="mb-16 reveal stagger-6">
            <h2 className="text-2xl font-serif font-medium mb-6">The Process</h2>
            <p className="text-muted-foreground mb-6">
              The project began with a discovery phase, where we conducted stakeholder interviews and market research to understand the client's vision and industry landscape.
            </p>
            <p className="text-muted-foreground mb-6">
              Following the research phase, we developed concept directions that explored different visual approaches. After client feedback, we refined the chosen concept into a comprehensive design system.
            </p>
            <p className="text-muted-foreground">
              The implementation phase involved creating all necessary assets and guidelines for the client's team to successfully apply the new design system.
            </p>
          </div>
          
          <div className="aspect-[21/9] bg-muted rounded-lg overflow-hidden mb-16 reveal stagger-7">
            <img 
              src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=1920" 
              alt="Project showcase" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="text-center reveal stagger-8">
            <h2 className="text-2xl font-serif font-medium mb-6">Next Project</h2>
            <div className="inline-block">
              <Link 
                to={`/project/${projectsData.find(p => p.id !== id)?.id || ''}`}
                className="group inline-flex items-center space-x-2 text-lg hover:text-primary transition-colors"
              >
                <span>{projectsData.find(p => p.id !== id)?.title || 'View Projects'}</span>
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

export default ProjectDetail;
