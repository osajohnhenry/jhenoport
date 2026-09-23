import type { ReactNode } from 'react';
import Reveal from './Reveal';

export default function SectionHeading({
  eyebrow,
  title,
  sub,
  center = false,
  dark = false,
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
  center?: boolean;
  dark?: boolean;
}) {
  return (
    <Reveal className={center ? 'center' : ''}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-title" style={dark ? { color: '#fff' } : undefined}>
        {title}
      </h2>
      {sub && <p className="section-sub">{sub}</p>}
    </Reveal>
  );
}
