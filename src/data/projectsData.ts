
import { Project } from '@/components/ProjectCard';

// Sample project data
const projectsData: Project[] = [
  {
    id: "araku",
    title: "Araku Coffee | Branding",
    description: "A comprehensive brand identity system for Araku Coffee, focusing on sustainability and premium aesthetics.",
    imageUrl: "/lovable-uploads/ebc115e1-483b-42cf-9185-31eb45b574cb.png",
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
  {
    id: "mobile-app",
    title: "Mobile App UI/UX",
    description: "User experience and interface design for a health and wellness mobile application.",
    imageUrl: "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&q=80&w=1920",
    category: "UI/UX",
    tags: ["Mobile", "UI Design", "User Experience"],
    year: "2023"
  },
  {
    id: "ecommerce",
    title: "E-Commerce Website",
    description: "Complete redesign of an e-commerce platform focused on user conversion.",
    imageUrl: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?auto=format&fit=crop&q=80&w=1920",
    category: "Web Design",
    tags: ["Web Design", "E-commerce", "UI/UX"],
    year: "2022"
  },
  {
    id: "photography",
    title: "Photography Exhibition",
    description: "Art direction and curation for a contemporary photography exhibition.",
    imageUrl: "https://images.unsplash.com/photo-1540304453527-62f979142a17?auto=format&fit=crop&q=80&w=1920",
    category: "Art Direction",
    tags: ["Art Direction", "Exhibition", "Photography"],
    year: "2022"
  },
  {
    id: "expressive-typography",
    title: "Expressive Typography | Editorial",
    description: "A typographic exploration using bold, expressive lettering to convey emotion and narrative through text design.",
    imageUrl: "https://static.wixstatic.com/media/ba664b_a05e3e3b6e6e4b70b7a4f6eea9b69655~mv2.jpg/v1/fill/w_940,h_625,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ba664b_a05e3e3b6e6e4b70b7a4f6eea9b69655~mv2.jpg",
    category: "Typography",
    tags: ["Typography", "Editorial", "Design"],
    year: "2022"
  },
  {
    id: "travel-guide",
    title: "Travel Guide | Publication",
    description: "A beautifully designed travel guide that showcases destinations through clean typography and immersive imagery.",
    imageUrl: "https://static.wixstatic.com/media/ba664b_51d9d05ab1a949adb4710d6bc35222b2~mv2.jpg/v1/fill/w_940,h_625,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ba664b_51d9d05ab1a949adb4710d6bc35222b2~mv2.jpg",
    category: "Publication",
    tags: ["Publication", "Travel", "Editorial Design"],
    year: "2022"
  },
  {
    id: "kone-branding",
    title: "KONE | Brand Identity",
    description: "A minimalist, modern brand identity design that balances sophistication with accessibility for a global audience.",
    imageUrl: "https://static.wixstatic.com/media/ba664b_f5699dd95cef4f74b7c50a2f1a408640~mv2.jpg/v1/fill/w_940,h_625,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ba664b_f5699dd95cef4f74b7c50a2f1a408640~mv2.jpg",
    category: "Branding",
    tags: ["Branding", "Logo Design", "Identity"],
    year: "2023"
  },
  {
    id: "packaging-design",
    title: "Packaging Design | FMCG",
    description: "Creative packaging solution for a premium food product that emphasizes sustainability and visual appeal.",
    imageUrl: "https://static.wixstatic.com/media/ba664b_312e01b8978d493db65e1a71ae51a855~mv2.jpg/v1/fill/w_940,h_625,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ba664b_312e01b8978d493db65e1a71ae51a855~mv2.jpg",
    category: "Packaging",
    tags: ["Packaging", "FMCG", "Sustainable Design"],
    year: "2023"
  },
  {
    id: "ux-research",
    title: "UX Research | Digital Service",
    description: "Comprehensive user research study that informed the redesign of a digital service platform for improved accessibility.",
    imageUrl: "https://static.wixstatic.com/media/ba664b_6d4a0fba841242ee856346f15fbe94af~mv2.jpg/v1/fill/w_940,h_625,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ba664b_6d4a0fba841242ee856346f15fbe94af~mv2.jpg",
    category: "UX Research",
    tags: ["UX Research", "Digital Service", "Accessibility"],
    year: "2022"
  },
  {
    id: "motion-graphics",
    title: "Motion Graphics | Brand Animation",
    description: "Dynamic motion graphics project that brings brand elements to life through fluid animation and storytelling.",
    imageUrl: "https://static.wixstatic.com/media/ba664b_e7c416c3db78464aa9bf10a602e28e07~mv2.jpg/v1/fill/w_940,h_625,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ba664b_e7c416c3db78464aa9bf10a602e28e07~mv2.jpg",
    category: "Motion",
    tags: ["Motion Graphics", "Animation", "Brand Identity"],
    year: "2023"
  }
];

export default projectsData;
