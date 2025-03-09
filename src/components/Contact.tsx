
import { useState, useEffect, useRef } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.reveal');
            elements.forEach((el) => {
              el.classList.add('active');
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, message });
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
      
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }, 1000);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 md:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
          <div>
            <span className="inline-block mb-3 text-sm font-medium tracking-widest uppercase reveal">
              Contact
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6 reveal stagger-1">
              Let's Work Together
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md reveal stagger-2">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            
            <div className="space-y-6 reveal stagger-3">
              <div>
                <h3 className="text-lg font-medium mb-2">Contact Information</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    hello@example.com
                  </p>
                  <p className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +1 (555) 123-4567
                  </p>
                  <p className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    New York, NY
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Connect</h3>
                <div className="flex space-x-4">
                  <a href="#" className="p-2 text-muted-foreground hover:text-foreground transition-colors" aria-label="Instagram">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a href="#" className="p-2 text-muted-foreground hover:text-foreground transition-colors" aria-label="Twitter">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="p-2 text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a href="#" className="p-2 text-muted-foreground hover:text-foreground transition-colors" aria-label="Behance">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.443 5.304c.393 0 .75.059 1.072.176.32.117.594.29.82.517.227.228.398.5.515.819.116.32.175.676.175 1.07 0 .452-.103.832-.307 1.143-.205.31-.507.561-.906.754.547.16.962.47 1.241.93.28.459.422.993.422 1.597 0 .432-.078.827-.224 1.172-.147.347-.364.64-.65.885-.286.245-.637.436-1.049.568-.413.134-.882.2-1.401.2H1.197V5.304h6.246zm-.356 4.937c.356 0 .651-.099.883-.285.233-.187.347-.49.347-.905 0-.232-.039-.425-.12-.577-.078-.151-.186-.274-.325-.367a1.347 1.347 0 00-.475-.201 2.613 2.613 0 00-.57-.063h-2.9v2.398h3.16zm.174 5.218c.227 0 .435-.022.626-.066a1.5 1.5 0 00.51-.219c.15-.105.267-.246.352-.422.086-.176.128-.401.128-.675 0-.536-.147-.919-.441-1.153-.293-.232-.694-.349-1.204-.349h-3.305v2.884h3.334zm8.774-4.248c.383 0 .731.06 1.039.183.31.123.576.294.795.513.218.218.393.477.51.772.118.297.191.614.22.952h-4.924c.04.452.188.8.441 1.05.254.25.599.375 1.035.375.33 0 .616-.075.853-.224.239-.148.385-.306.441-.474h2.058a3.207 3.207 0 01-.632 1.318 3.23 3.23 0 01-1.069.889c-.423.218-.896.328-1.417.328-.454 0-.868-.073-1.241-.219a2.972 2.972 0 01-.97-.62 2.761 2.761 0 01-.631-.97 3.637 3.637 0 01-.224-1.287c0-.46.073-.883.221-1.268.147-.384.357-.723.631-1.012.273-.288.6-.508.982-.663.382-.155.812-.226 1.282-.217zm.01-1.49c-.313 0-.579.073-.807.22a1.5 1.5 0 00-.513.567 1.91 1.91 0 00-.21.783h2.977c-.012-.287-.082-.533-.211-.74a1.404 1.404 0 00-.475-.485c-.196-.117-.449-.183-.761-.2zm.4-2.343h-3.76V6.06h3.761v1.318z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm reveal stagger-2">
            <h3 className="text-xl font-medium mb-4">Send a Message</h3>
            {submitted ? (
              <div className="bg-green-50 p-4 rounded-md text-green-800 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Thank you! Your message has been sent successfully.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-md transition-all hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
