
import { useState, useEffect } from 'react';
import ProjectCard, { Project } from './ProjectCard';

// Sample project data
const projectsData: Project[] = [
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
  {
    id: "project-3",
    title: "E-Commerce Website",
    description: "Complete redesign of an e-commerce platform focused on user conversion.",
    imageUrl: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?auto=format&fit=crop&q=80&w=1920",
    category: "Web Design",
    tags: ["Web Design", "E-commerce", "UI/UX"],
    year: "2022"
  },
  {
    id: "project-4",
    title: "Photography Exhibition",
    description: "Art direction and curation for a contemporary photography exhibition.",
    imageUrl: "https://images.unsplash.com/photo-1540304453527-62f979142a17?auto=format&fit=crop&q=80&w=1920",
    category: "Art Direction",
    tags: ["Art Direction", "Exhibition", "Photography"],
    year: "2022"
  }
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projectsData);
  const [visibleProjectCount, setVisibleProjectCount] = useState(4);
  
  const categories = ['All', ...Array.from(new Set(projectsData.map(project => project.category)))];

  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(projectsData.filter(project => project.category === activeFilter));
    }
  }, [activeFilter]);

  const loadMoreProjects = () => {
    setVisibleProjectCount(prev => Math.min(prev + 4, filteredProjects.length));
  };

  return (
    <section id="projects" className="py-20 md:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16">
          <span className="inline-block mb-3 text-sm font-medium tracking-widest uppercase reveal">
            Selected Work
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6 reveal stagger-1">
            Recent Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl reveal stagger-2">
            A collection of my recent design work across various disciplines and industries.
            Each project represents a unique challenge and solution.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 mb-10 reveal stagger-3">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                activeFilter === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.slice(0, visibleProjectCount).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {visibleProjectCount < filteredProjects.length && (
          <div className="mt-12 text-center">
            <button
              onClick={loadMoreProjects}
              className="px-6 py-3 border border-border rounded-full hover:bg-muted transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
