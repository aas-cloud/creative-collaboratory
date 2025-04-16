
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  tags: string[];
  year: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(cardRef.current!);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`project-card bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        transition: `all 0.9s cubic-bezier(0.45, 0, 0.55, 1) ${index * 0.15}s`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/project/${project.id}`}>
        <div className="project-image-container relative aspect-[16/10] overflow-hidden">
          {imageRef.current?.complete ? null : (
            <div className="absolute inset-0 bg-muted animate-pulse"></div>
          )}
          <img
            ref={imageRef}
            src={project.imageUrl}
            alt={project.title}
            className={`project-image w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
            onLoad={() => {
              if (imageRef.current) {
                imageRef.current.classList.add('animate-image-fade');
              }
            }}
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-black/40 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
          
          <div className={`absolute bottom-0 left-0 right-0 p-4 transform transition-transform duration-500 ${isHovered ? 'translate-y-0' : 'translate-y-full'}`}>
            <span className="text-xs text-white/90 font-medium tracking-wider uppercase bg-black/30 px-2 py-1 rounded backdrop-blur-sm">
              {project.category}
            </span>
          </div>
        </div>
        <div className="p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-serif font-medium line-clamp-1 hover:text-primary transition-colors">{project.title}</h3>
            <span className="text-sm text-muted-foreground">{project.year}</span>
          </div>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 project-tags">
            {project.tags.map((tag, i) => (
              <span 
                key={i} 
                className="inline-block px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className={`mt-4 overflow-hidden ${isHovered ? 'opacity-100' : 'opacity-0'}`} 
               style={{ transition: 'opacity 0.3s ease' }}>
            <span className="inline-flex items-center text-sm font-medium text-primary animated-underline">
              View Project
              <svg className={`ml-1 w-4 h-4 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} 
                   fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
