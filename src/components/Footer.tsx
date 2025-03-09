
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-12 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          <div>
            <Link to="/" className="text-xl font-serif font-medium tracking-tight mb-4 inline-block">
              Aastha Mehdiratta
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Multidisciplinary designer crafting thoughtful experiences through design.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Home</a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
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
            <p className="text-muted-foreground text-sm">
              Feel free to reach out for collaborations or just to say hello!
            </p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {currentYear} Aastha Mehdiratta. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
