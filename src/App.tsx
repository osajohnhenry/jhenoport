import { useCallback, useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Workflow from './components/Workflow';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Certifications from './components/Certifications';
import Companies from './components/Companies';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useTheme } from './hooks/useTheme';
import { navItems } from './data/portfolio';

const stripItems = [
  'Manual Testing',
  'Functional Testing',
  'Regression Testing',
  'API Testing',
  'Test Case Design',
  'Jira',
  'Postman',
  'SDLC / STLC',
  'Mobile Testing',
  'Web Testing',
];

export default function App() {
  const [active, setActive] = useState('home');
  const [showTop, setShowTop] = useState(false);
  const { theme, toggle } = useTheme();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top: y, behavior: 'smooth' });
    setActive(id);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 600);
      // scroll-spy: pick section nearest to top offset
      let current = 'home';
      for (const n of navItems) {
        const el = document.getElementById(n.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 160) current = n.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="scroll-progress">
        <motion.div style={{ scaleX: progress }} />
      </div>

      <Navbar active={active} onNavigate={scrollTo} theme={theme} onToggleTheme={toggle} />

      <main>
        <Hero onNavigate={scrollTo} />

        <div className="strip" aria-hidden>
          <div className="strip-track">
            {[...stripItems, ...stripItems].map((s, i) => (
              <span key={i}>◆ {s}</span>
            ))}
          </div>
        </div>

        <About onNavigate={scrollTo} />
        <Workflow />
        <Projects />
        <Resume />
        <Certifications />
        <Companies />
        <Contact />
      </main>

      <Footer onNavigate={scrollTo} />

      {showTop && (
        <motion.button
          className="to-top"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </>
  );
}
