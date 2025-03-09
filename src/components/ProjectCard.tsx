
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
      className={`project-card bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        transition: `all 0.8s cubic-bezier(0.45, 0, 0.55, 1) ${index * 0.1}s`
      }}
    >
      <Link to={`/project/${project.id}`}>
        <div className="project-image-container relative aspect-[16/9]">
          {imageRef.current?.complete ? null : (
            <div className="absolute inset-0 bg-muted animate-pulse"></div>
          )}
          <img
            ref={imageRef}
            src={project.imageUrl}
            alt={project.title}
            className="project-image w-full h-full object-cover"
            onLoad={() => {
              if (imageRef.current) {
                imageRef.current.classList.add('animate-image-fade');
              }
            }}
          />
        </div>
        <div className="p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-serif font-medium line-clamp-1">{project.title}</h3>
            <span className="text-sm text-muted-foreground">{project.year}</span>
          </div>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 project-tags">
            {project.tags.map((tag, i) => (
              <span 
                key={i} 
                className="inline-block px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
