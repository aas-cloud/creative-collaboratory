import { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { Link } from 'react-router-dom';
import projectsData from '@/data/projectsData';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [visibleProjectCount, setVisibleProjectCount] = useState(6);
  const [isInView, setIsInView] = useState(false);
  
  const categories = ['All', ...Array.from(new Set(projectsData.map(project => project.category)))];

  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(projectsData.filter(project => project.category === activeFilter));
    }
    setVisibleProjectCount(6);
  }, [activeFilter]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('projects-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const loadMoreProjects = () => {
    setVisibleProjectCount(prev => Math.min(prev + 3, filteredProjects.length));
  };

  return (
    <section id="projects" className="py-20 md:py-28 px-6 projects-parallax" data-speed="0.05">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16">
          <span className={`inline-block mb-3 text-sm font-medium tracking-widest uppercase reveal ${isInView ? 'active' : ''}`}>
            Selected Work
          </span>
          <h2 className={`text-3xl md:text-4xl font-century font-medium mb-6 reveal stagger-1 ${isInView ? 'active' : ''}`}>
            Recent Projects
          </h2>
          <p className={`text-muted-foreground max-w-2xl reveal stagger-2 ${isInView ? 'active' : ''}`}>
            A collection of my recent design work across various disciplines and industries.
            Each project represents a unique challenge and solution.
          </p>
        </div>

        <div className={`flex flex-wrap gap-4 mb-10 reveal stagger-3 ${isInView ? 'active' : ''}`}>
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm transition-all hover:scale-105 ${
                activeFilter === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 grid-animation">
          {filteredProjects.slice(0, visibleProjectCount).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {visibleProjectCount < filteredProjects.length && (
          <div className="mt-16 text-center">
            <button
              onClick={loadMoreProjects}
              className="px-6 py-3 border border-border rounded-full hover:bg-muted transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 group hover:scale-105"
            >
              <span className="flex items-center gap-2">
                Load More
                <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </span>
            </button>
          </div>
        )}
        
        <div className="mt-16 text-center">
          <Link 
            to="/projects" 
            className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 group hover:scale-105"
          >
            <span>View All Projects</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
