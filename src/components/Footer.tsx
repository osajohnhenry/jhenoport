import { navItems, profile, logo } from '../data/portfolio';

export default function Footer({ onNavigate }: { onNavigate: (id: string) => void }) {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <img src={logo} alt="logo" />
              John Henry<span style={{ color: '#60a5fa' }}>.</span>
            </div>
            <p style={{ maxWidth: 360, fontSize: 14, lineHeight: 1.65, marginTop: 12 }}>
              {profile.role} based in {profile.location}. Helping teams deliver
              high-quality software through thoughtful manual testing.
            </p>
          </div>
          <div className="footer-links">
            {navItems.map((n) => (
              <button key={n.id} onClick={() => onNavigate(n.id)}>
                {n.label}
              </button>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {year} {profile.name}. All rights reserved.</span>
          <span>Built with React + Vite + TypeScript · Scroll animations with Framer Motion</span>
        </div>
      </div>
    </footer>
  );
}
