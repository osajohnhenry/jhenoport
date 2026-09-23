import { useRef, useState, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle2,
  XCircle,
  X,
} from 'lucide-react';
import { profile } from '../data/portfolio';
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY,
} from '../config/emailjs';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

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

type Status = { ok: boolean; message: string } | null;

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<Status>(null);

  const closeModal = () => setStatus(null);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current || sending) return;
    setSending(true);
    try {
      const result = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      );
      console.log('EmailJS sent:', result.text);
      setStatus({
        ok: true,
        message: 'Message sent successfully! Kindly wait for a response from my side.',
      });
      formRef.current.reset();
      setMessage('');
    } catch (err) {
      console.error('EmailJS failed:', err);
      // Fallback: open mail client so the message is never lost
      const data = new FormData(formRef.current);
      const body = encodeURIComponent(
        `Hi John Henry,\n\n${String(data.get('message') ?? '')}\n\n— ${String(data.get('user_name') ?? '')} (${String(data.get('user_email') ?? '')})`,
      );
      const subject = encodeURIComponent(`Website inquiry — ${String(data.get('subject') ?? '')}`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus({
        ok: false,
        message:
          'Email service failed — your mail app was opened instead so you can still reach me.',
      });
    } finally {
      setSending(false);
    }
  };

  const items = [
    { icon: MapPin, title: 'Address', value: profile.location },
    { icon: Mail, title: 'Email', value: profile.email },
    { icon: Phone, title: 'Phone', value: profile.phone },
  ];

  return (
    <section id="contact" className="section-pad" style={{ paddingTop: 30 }}>
      <div className="container">
        <SectionHeading
          center
          eyebrow="Contact"
          title="How may I help you?"
          sub="I'm available for freelance work and full-time QA roles. Drop me a line if you have a project you think I'd be a good fit for."
        />
        <Reveal delay={0.1}>
          <div className="contact-card" style={{ marginTop: 36 }}>
            <div>
              {items.map((it) => (
                <div className="contact-item" key={it.title}>
                  <span className="ic">
                    <it.icon size={20} />
                  </span>
                  <span>
                    <div style={{ fontWeight: 800, fontSize: 14 }}>{it.title}</div>
                    <div style={{ color: 'var(--text-muted)', fontSize: 14.5 }}>{it.value}</div>
                  </span>
                </div>
              ))}
              <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
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
            </div>
            <motion.form
              ref={formRef}
              onSubmit={submit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <div className="form-grid">
                <div className="field">
                  <label htmlFor="name">Your name</label>
                  <input id="name" name="user_name" required placeholder="Juan Dela Cruz" />
                </div>
                <div className="field">
                  <label htmlFor="email">Your email</label>
                  <input id="email" name="user_email" required type="email" placeholder="you@example.com" />
                </div>
              </div>
              <div className="field">
                <label htmlFor="subject">Subject</label>
                <input id="subject" name="subject" required placeholder="Project inquiry" defaultValue="Project inquiry" />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  maxLength={1000}
                  placeholder="Tell me about your project, timeline and what you need tested…"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <div className="char-count">{message.length}/1000</div>
              </div>
              <button
                className="btn btn-primary"
                type="submit"
                disabled={sending}
                style={{ width: '100%', justifyContent: 'center', opacity: sending ? 0.8 : 1 }}
              >
                {sending ? (
                  <>
                    <span className="spinner" /> Sending…
                  </>
                ) : (
                  <>
                    <Send size={17} /> Send message
                  </>
                )}
              </button>
              <p className="form-note">
                This form sends directly to {profile.email} via EmailJS. Please avoid
                sending test/prank messages — each send is charged. Thank you!
              </p>
            </motion.form>
          </div>
        </Reveal>

        <AnimatePresence>
          {status && (
            <motion.div
              className="modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                className="modal"
                style={{ maxWidth: 440, padding: 32, textAlign: 'center' }}
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.97 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <div className={`contact-modal-icon ${status.ok ? 'success' : 'error'}`}>
                    {status.ok ? <CheckCircle2 size={32} /> : <XCircle size={32} />}
                  </div>
                </div>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.65 }}>{status.message}</p>
                <button
                  className="btn btn-primary"
                  style={{ marginTop: 20, minWidth: 120, justifyContent: 'center' }}
                  onClick={closeModal}
                >
                  {status.ok ? 'Done' : 'OK'} <X size={15} />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
