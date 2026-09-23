import { motion } from 'framer-motion';
import { ClipboardList, FlaskConical, Palette, Bug, CheckCircle2 } from 'lucide-react';
import { workflowSteps } from '../data/portfolio';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const icons = [ClipboardList, FlaskConical, Palette, Bug];

export default function Workflow() {
  return (
    <section id="workflow" className="workflow section-pad">
      <div className="container">
        <SectionHeading
          eyebrow="Work process"
          title="My current QA workflow"
          sub="I collaborate with the entire development team — business analysts, designers, developers, and fellow QA members — to ensure the final product meets both quality benchmarks and user needs."
        />
        <div className="workflow-grid">
          <Reveal>
            <ul className="check-list">
              {[
                'Full collaboration from requirements to release',
                'Test coverage across web, mobile & desktop',
                'Smoke, functional, regression & retesting on every build',
                'Clear defect reports that developers love to fix',
              ].map((t) => (
                <li key={t}>
                  <CheckCircle2 size={19} /> {t}
                </li>
              ))}
            </ul>
          </Reveal>
          <motion.div
            className="steps"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          >
            {workflowSteps.map((s, i) => {
              const Icon = icons[i % icons.length];
              return (
                <motion.div
                  key={s.id}
                  className="step-card"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
                  }}
                >
                  <div className="step-num">STEP 0{s.id}</div>
                  <div className="step-icon">
                    <Icon size={22} />
                  </div>
                  <div style={{ fontWeight: 800, fontSize: 17, marginBottom: 8 }}>{s.title}</div>
                  <div style={{ color: '#5b6b82', fontSize: 14.5, lineHeight: 1.6 }}>{s.description}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
