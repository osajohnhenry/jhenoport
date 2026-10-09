import { useEffect, useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { navItems, profile, logo } from '../data/portfolio';

export default function Navbar({
  active,
  onNavigate,
}: {
  active: string;
  onNavigate: (id: string) => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    fn();
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    onNavigate(id);
  };

  return (
    <header className={`nav-wrap ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <a className="brand" onClick={() => go('home')}>
          <img src={logo} alt="John Henry logo" />
          <span className="brand-name">
            John Henry<span>.</span>
          </span>
        </a>

        <ul className="nav-links">
          {navItems.map((n) => (
            <li key={n.id}>
              <button
                className={active === n.id ? 'active' : ''}
                onClick={() => go(n.id)}
              >
                {n.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="nav-cta">
          <a
            className="btn btn-primary"
            style={{ padding: '12px 20px' }}
            href={profile.cvLink}
            target="_blank"
            rel="noreferrer"
          >
            <Download size={16} /> CV
          </a>
          <button
            className="hamburger"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        {navItems.map((n) => (
          <button key={n.id} onClick={() => go(n.id)}>
            {n.label}
          </button>
        ))}
      </div>
    </header>
  );
}
