import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin, Mail, Phone } from 'lucide-react';
import { experience, education, profile, getYearsOfExperience } from '../data/portfolio';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Resume() {
  return (
    <section id="resume" className="section-pad">
      <div className="container">
        <SectionHeading
          center
          eyebrow="Resume"
          title="Experience & education"
          sub={`Innovative and deadline-driven QA Analyst with ${getYearsOfExperience()} of experience in manual testing of web and mobile applications — adept at identifying issues to ensure optimal user experience.`}
        />

        <Reveal>
          <div className="info-rows" style={{ display: 'flex', gap: 18, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 8 }}>
            <span><strong>{profile.name}</strong></span>
            <span style={{ display: 'inline-flex', gap: 6, alignItems: 'center' }}><MapPin size={14} /> {profile.location}</span>
            <span style={{ display: 'inline-flex', gap: 6, alignItems: 'center' }}><Phone size={14} /> {profile.phone}</span>
            <span style={{ display: 'inline-flex', gap: 6, alignItems: 'center' }}><Mail size={14} /> {profile.email}</span>
          </div>
        </Reveal>

        <div className="resume-grid">
          <motion.div
            className="timeline-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <h3><Briefcase size={20} color="#2563eb" /> Professional Experience</h3>
            {experience.map((e) => (
              <div className="t-item" key={e.role}>
                <div className="t-role">{e.role}</div>
                <div className="t-meta">{e.period} · {e.company}</div>
                <ul className="t-list">
                  {e.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="timeline-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3><GraduationCap size={20} color="#2563eb" /> Education</h3>
            {education.map((e) => (
              <div className="t-item" key={e.degree}>
                <div className="t-role" style={{ fontSize: 14.5 }}>{e.degree}</div>
                <div className="t-meta">{e.period} · {e.school}</div>
                <p className="t-detail">{e.detail}</p>
              </div>
            ))}
            <div className="current-box">
              <div className="current-box-title">Currently</div>
              <div className="current-box-desc">
                QA Analyst at Teøchnologies Inc., Pasay — focused on manual testing,
                release readiness, and continuous QA process improvement.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
