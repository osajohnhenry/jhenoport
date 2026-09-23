import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { certifications } from '../data/portfolio';
import SectionHeading from './SectionHeading';

export default function Certifications() {
  return (
    <section id="certifications" className="certs section-pad">
      <div className="container">
        <SectionHeading
          center
          dark
          eyebrow="Continuous learning"
          title="Online courses & certificates"
          sub="Here are the online courses I've completed as well as their respective digital certificates."
        />
        <motion.div
          className="cert-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        >
          {certifications.map((c) => (
            <motion.article
              key={c.id}
              className="cert-card"
              variants={{
                hidden: { opacity: 0, y: 28 },
                show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
              }}
            >
              <img src={c.image} alt={c.title} loading="lazy" />
              <div className="cert-body">
                <div className="cert-date" style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <Award size={14} /> {c.date}
                </div>
                <div className="cert-title">{c.title}</div>
                <a className="cert-link" href={c.link} target="_blank" rel="noreferrer">
                  View certificate <ExternalLink size={14} />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
