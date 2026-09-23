import { motion } from 'framer-motion';
import { Download, FolderKanban } from 'lucide-react';
import { profile, skills, personAlt } from '../data/portfolio';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function About({ onNavigate }: { onNavigate: (id: string) => void }) {
  return (
    <section id="about" className="section-pad" style={{ paddingTop: 70 }}>
      <div className="container">
        <Reveal>
          <div className="about-card">
            <div className="about-photo">
              <img src={personAlt} alt="John Henry Osa at work" loading="lazy" />
              <div className="float">
                Detail-oriented QA Analyst ensuring minimal issues reach production through
                analytical testing and strong collaboration.
              </div>
            </div>
            <div>
              <SectionHeading
                eyebrow="About me"
                title={<>I am a Software Quality Assurance Analyst</>}
                sub="I perform manual testing across multiple platforms, execute functional and regression test cases, and work closely with developers to resolve defects efficiently. Proficient in designing test cases from user requirements and API testing via Postman."
              />
              <motion.div
                className="skill-tags"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-60px' }}
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
              >
                {skills.map((s) => (
                  <motion.span
                    key={s}
                    variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
                  >
                    {s}
                  </motion.span>
                ))}
              </motion.div>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 8 }}>
                <button className="btn btn-primary" onClick={() => onNavigate('projects')}>
                  <FolderKanban size={17} /> My Projects
                </button>
                <a className="btn btn-ghost" href={profile.cvLink} target="_blank" rel="noreferrer">
                  <Download size={17} /> Download CV
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
