import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, X, ListChecks } from 'lucide-react';
import { projects, type Project } from '../data/portfolio';
import SectionHeading from './SectionHeading';

const filters = ['All', 'Mobile', 'Web', 'GIS'];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState<Project | null>(null);

  const visible =
    filter === 'All' ? projects : projects.filter((p) => p.tags.includes(filter));

  return (
    <section id="projects" className="section-pad">
      <div className="container">
        <SectionHeading
          center
          eyebrow="Portfolio"
          title="Projects I've tested & assured"
          sub="A selection of web and mobile products where I designed test cases, executed functional and regression suites, and partnered with developers to ship with confidence."
        />

        <div className="proj-filters" style={{ justifyContent: 'center' }}>
          {filters.map((f) => (
            <button
              key={f}
              className={filter === f ? 'active' : ''}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="proj-grid">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.article
                layout
                key={p.id}
                className="proj-card"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5 }}
                onClick={() => setSelected(p)}
              >
                <img src={p.image} alt={p.title} loading="lazy" />
                <div className="proj-body">
                  <span className="proj-cat">{p.category}</span>
                  <h3 className="proj-title">{p.title}</h3>
                  <p className="proj-desc">{p.description}</p>
                  <span className="proj-link">
                    What I tested <ArrowUpRight size={16} />
                  </span>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {selected && (
            <motion.div
              className="modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            >
              <motion.div
                className="modal"
                initial={{ opacity: 0, y: 40, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 30, scale: 0.97 }}
                transition={{ duration: 0.35 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img src={selected.image} alt={selected.title} />
                <div className="modal-body">
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'flex-start' }}>
                    <div>
                      <span className="proj-cat">{selected.category}</span>
                      <h3 style={{ margin: '6px 0', fontSize: 26 }}>{selected.title}</h3>
                    </div>
                    <button
                      className="icon-btn"
                      onClick={() => setSelected(null)}
                      aria-label="Close"
                    >
                      <X size={18} />
                    </button>
                  </div>
                  <p style={{ color: '#5b6b82', lineHeight: 1.65 }}>{selected.description}</p>
                  <h4 style={{ display: 'flex', gap: 8, alignItems: 'center', margin: '18px 0 4px' }}>
                    <ListChecks size={18} color="#2563eb" /> Testing conducted
                  </h4>
                  <ul>
                    {selected.testingConducted.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
