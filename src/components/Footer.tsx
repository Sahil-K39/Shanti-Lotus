import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Kunti" },
  { href: "/work-with-me", label: "Work With Me" },
  { href: "/mentorship", label: "Mentorship" },
  { href: "/retreats", label: "Retreats" },
  { href: "/philosophy", label: "Philosophy" },
];

export default function Footer() {
  return (
    <footer className="bg-deepPlum text-ivory pt-24 pb-12 px-6 border-t border-antiqueGold/20">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-24">
          
          {/* Brand Column */}
          <div className="md:col-span-5 lg:col-span-4 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-4 mb-8 group" aria-label="Shakti Lotus - Home">
              <div className="w-6 h-6 text-antiqueGold">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path fillRule="evenodd" clipRule="evenodd" d="M24 4C24 4 28 12 28 18C28 22 26 24 24 26C22 24 20 22 20 18C20 12 24 4 24 4ZM4 24C4 24 12 20 18 20C22 20 24 22 26 24C24 26 22 28 18 28C12 28 4 24 4 24ZM44 24C44 24 36 28 30 28C26 28 24 26 22 24C24 22 26 20 30 20C36 20 44 24 44 24ZM24 44C24 44 20 36 20 30C20 26 22 24 24 22C26 24 28 26 28 30C28 36 24 44 24 44Z" fill="currentColor" />
                </svg>
              </div>
              <span className="font-display text-xl tracking-[0.1em] text-ivory">
                SHAKTI LOTUS
              </span>
            </Link>
            
            <p className="font-display italic text-2xl text-ivory/80 leading-relaxed max-w-sm mb-6">
              A path back to your universal divine essence.
            </p>
            
            <p className="font-body text-xs font-light tracking-wide leading-loose text-ivory/50 max-w-sm">
              Shakti Lotus is a space for deep reconnection with vital energy — a portal created to remember the sacred that lives within you.
            </p>
          </div>

          <div className="md:col-span-1 lg:col-span-2 hidden lg:block" />

          {/* Navigation Column */}
          <div className="md:col-span-3 lg:col-span-3">
            <h4 className="text-eyebrow text-antiqueGold mb-8">Navigate</h4>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm tracking-widest text-ivory/60 hover:text-antiqueGold transition-colors duration-500 uppercase"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="text-eyebrow text-antiqueGold mb-8">Connect</h4>
            <ul className="space-y-6">
              <li>
                <a
                  href="mailto:sanctuary@shaktilotus.com"
                  className="font-body text-sm tracking-widest text-ivory/60 hover:text-antiqueGold transition-colors duration-500 uppercase flex items-center gap-4"
                >
                  <span className="w-8 h-[1px] bg-antiqueGold/40" />
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/shaktilotus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm tracking-widest text-ivory/60 hover:text-antiqueGold transition-colors duration-500 uppercase flex items-center gap-4"
                >
                  <span className="w-8 h-[1px] bg-antiqueGold/40" />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/0000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm tracking-widest text-ivory/60 hover:text-antiqueGold transition-colors duration-500 uppercase flex items-center gap-4"
                >
                  <span className="w-8 h-[1px] bg-antiqueGold/40" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-ivory/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-display italic text-lg text-antiqueGold/70">
            &ldquo;The sacred lives within you.&rdquo;
          </p>
          <p className="font-body text-[10px] tracking-[0.2em] text-ivory/40 uppercase">
            © {new Date().getFullYear()} Shakti Lotus. All rights reserved.
          </p>
        </div>
        
      </div>
    </footer>
  );
}
