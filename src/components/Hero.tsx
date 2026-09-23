import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, MapPin, ShieldCheck, Bug } from 'lucide-react';
import { profile, stats, personMain } from '../data/portfolio';

function GithubIcon({ size = 19 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12v3.14c0 .3.21.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon({ size = 19 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45Z" />
    </svg>
  );
}

const roles = [
  'Manual Testing',
  'Test Automation (Playwright)',
  'Functional & Regression',
  'API Testing (Postman)',
  'Defect Tracking (Jira)',
];

function useTypewriter(words: string[]) {
  const [text, setText] = useState('');
  useEffect(() => {
    let w = 0;
    let c = 0;
    let del = false;
    let t: ReturnType<typeof setTimeout>;
    const tick = () => {
      const word = words[w];
      c += del ? -1 : 1;
      setText(word.slice(0, c));
      let ms = del ? 35 : 70;
      if (!del && c === word.length) {
        ms = 1400;
        del = true;
      } else if (del && c === 0) {
        del = false;
        w = (w + 1) % words.length;
        ms = 300;
      }
      t = setTimeout(tick, ms);
    };
    t = setTimeout(tick, 400);
    return () => clearTimeout(t);
  }, [words]);
  return text;
}

export default function Hero({ onNavigate }: { onNavigate: (id: string) => void }) {
  const typed = useTypewriter(roles);

  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">
              <ShieldCheck size={14} /> Quality Assurance Analyst
            </span>
            <h1>
              Hello, I&apos;m <br />
              <span className="grad">{profile.name}</span>
            </h1>
            <div className="role-line">
              <span>I can do</span>
              <span className="role-pill">{typed}▍</span>
            </div>
            <p className="hero-desc" style={{ marginTop: 16 }}>
              {profile.tagline}
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => onNavigate('contact')}>
                Say Hello <ArrowRight size={17} />
              </button>
              <button className="btn btn-ghost" onClick={() => onNavigate('projects')}>
                View My Work
              </button>
            </div>
            <div className="hero-stats">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  className="stat-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + i * 0.12, duration: 0.5 }}
                >
                  <div className="stat-num">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </motion.div>
              ))}
            </div>
            <div className="hero-socials">
              <a className="icon-btn" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <GithubIcon />
              </a>
              <a className="icon-btn" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <LinkedinIcon />
              </a>
              <a className="icon-btn" href={`mailto:${profile.email}`} aria-label="Email">
                <Mail size={19} />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hero-photo-wrap"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <img className="hero-photo" src={personMain} alt="John Henry Osa" />
          <div className="hero-badge badge-tl">
            <span className="dot" />
            Open to QA roles
          </div>
          <div className="hero-badge badge-br">
            <Bug size={16} color="#2563eb" />
            {stats[1].value} projects tested
          </div>
        </motion.div>
      </div>
      <div className="container" style={{ marginTop: 26, display: 'flex', gap: 8, alignItems: 'center', color: '#5b6b82', fontSize: 13.5, fontWeight: 600 }}>
        <MapPin size={15} /> {profile.location}
      </div>
    </section>
  );
}
