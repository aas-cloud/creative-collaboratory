
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProjectDetail from "./pages/ProjectDetail";
import ArakuProject from "./pages/ProjectPages/Araku";
import ZineProject from "./pages/ProjectPages/Zine";
import MuseumEmotionsProject from "./pages/ProjectPages/MuseumEmotions";
import ProjectCategories from "./pages/ProjectCategories";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";

const queryClient = new QueryClient();

const App = () => {
  // Add parallax effect to elements with the parallax class
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const parallaxElements = document.querySelectorAll('.parallax');
      const scaleElements = document.querySelectorAll('.scale-on-scroll');
      const rotateElements = document.querySelectorAll('.rotate-on-scroll');
      const fadeElements = document.querySelectorAll('.fade-on-scroll');
      
      // Parallax effect
      parallaxElements.forEach(element => {
        const speed = element.getAttribute('data-speed') || '0.1';
        const yValue = scrollTop * parseFloat(speed);
        (element as HTMLElement).style.setProperty('--parallax-y', `${yValue}px`);
      });
      
      // Scale effect
      scaleElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const elementMiddle = rect.top + rect.height / 2;
        const windowMiddle = window.innerHeight / 2;
        const distance = 1 - Math.min(1, Math.abs(elementMiddle - windowMiddle) / (window.innerHeight / 2));
        const scale = 0.95 + (distance * 0.05);
        (element as HTMLElement).style.setProperty('--scale', `${scale}`);
      });
      
      // Rotate effect
      rotateElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const elementMiddle = rect.top + rect.height / 2;
        const windowMiddle = window.innerHeight / 2;
        const distance = elementMiddle - windowMiddle;
        const maxRotation = element.getAttribute('data-max-rotation') || '5';
        const rotation = (distance / (window.innerHeight / 2)) * parseInt(maxRotation);
        (element as HTMLElement).style.setProperty('--rotate', `${rotation}deg`);
      });

      // Fade effect
      fadeElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          const opacity = Math.max(0, Math.min(1, 1 - (rect.top / window.innerHeight)));
          (element as HTMLElement).style.setProperty('--opacity', `${opacity}`);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial call
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="/project/araku" element={<ArakuProject />} />
            <Route path="/project/zine" element={<ZineProject />} />
            <Route path="/project/museum-emotions" element={<MuseumEmotionsProject />} />
            <Route path="/projects" element={<ProjectCategories />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
