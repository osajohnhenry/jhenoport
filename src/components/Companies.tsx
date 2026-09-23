import { companies } from '../data/portfolio';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Companies() {
  return (
    <section className="section-pad" style={{ paddingBottom: 70 }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <SectionHeading
          center
          eyebrow="Trusted experience"
          title="Companies I've worked with"
          sub="I have had the opportunity to contribute to quality at the following companies."
        />
        <Reveal delay={0.1}>
          <div className="companies-row">
            {companies.map((c) => (
              <div className="company-card" key={c.name}>
                <img src={c.src} alt={c.alt} loading="lazy" />
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontWeight: 800 }}>{c.name}</div>
                  <div style={{ fontSize: 13, color: '#5b6b82' }}>QA Team</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
