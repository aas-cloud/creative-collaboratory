
import { useState, useEffect, useRef } from 'react';
import { Mail, Phone, Linkedin, Instagram } from 'lucide-react';

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
                    <Mail className="w-5 h-5 mr-3" />
                    <a href="mailto:aasthamehdiratta@gmail.com" className="hover:text-primary transition-colors">
                      aasthamehdiratta@gmail.com
                    </a>
                  </p>
                  <p className="flex items-center">
                    <Phone className="w-5 h-5 mr-3" />
                    <a href="tel:+919560456443" className="hover:text-primary transition-colors">
                      +91 9560456443
                    </a>
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Connect</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.instagram.com/annoy_nymouss?igsh=MTAyNTN1OWs4YzZmMw==" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2 text-muted-foreground hover:text-foreground transition-colors" 
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/aastha-mehdiratta-820858221" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2 text-muted-foreground hover:text-foreground transition-colors" 
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-muted-foreground text-sm mt-4">
                  Feel free to reach out for collaborations or just to say hello!
                </p>
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
