'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, CheckCircle2, Code2, Download, ExternalLink, Layers3, Mail, MapPin, Menu, Network, ShieldCheck, Sparkles, Workflow, X, ClipboardCheck, BriefcaseBusiness, GraduationCap, Zap } from 'lucide-react';
import { career, industries, profile, projects, skillGroups } from '@/data/profile';

const OrbitScene = dynamic(() => import('@/components/three/OrbitScene'), { ssr: false, loading: () => <div className="scene-fallback" aria-hidden="true"><span /></div> });
const icons = { code: Code2, shield: ShieldCheck, network: Network, workflow: Workflow, clipboard: ClipboardCheck, sparkles: Sparkles } as const;

function SectionEyebrow({ children }: { children: React.ReactNode }) { return <div className="eyebrow"><span className="eyebrow-line" />{children}</div>; }

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  const reducedMotion = useReducedMotion();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(max > 0 ? window.scrollY / max : 0);
    };
    update(); window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  const nav = [{ label: 'Journey', href: '#journey' }, { label: 'Toolkit', href: '#toolkit' }, { label: 'Lab', href: '#lab' }, { label: 'About', href: '#about' }];
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(profile.email); setCopied(true); window.setTimeout(() => setCopied(false), 1800); }
    catch { window.location.href = `mailto:${profile.email}`; }
  };

  return (
    <main>
      <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress})` }} />
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Sailesh Dash home"><span className="brand-mark">SD<span>.</span></span><span className="brand-name">SAILESH DASH<small>QUALITY ENGINEERING</small></span></a>
        <nav className={`desktop-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          {nav.map(item => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}
          <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>Let’s talk <ArrowUpRight size={15} /></a>
        </nav>
        <button className="mobile-menu" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <section className="hero section-shell" id="home">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <motion.div initial={reducedMotion ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} className="availability"><span className="status-dot" /> OPEN TO REMOTE OPPORTUNITIES</motion.div>
          <motion.p className="hero-kicker" initial={reducedMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.12 }}>HELLO, I’M</motion.p>
          <motion.h1 initial={reducedMotion ? false : { opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.12 }}>Sailesh <span>Dash<span className="period">.</span></span></motion.h1>
          <motion.h2 initial={reducedMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.22 }}>Engineering quality.<br /><span>Automating confidence.</span></motion.h2>
          <motion.p className="hero-description" initial={reducedMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.38 }}>Senior QA Consultant and automation engineer focused on building reliable software experiences through intelligent test strategies, automation, and continuous quality improvement.</motion.p>
          <motion.div className="hero-actions" initial={reducedMotion ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.48 }}>
            <a className="button button-primary" href="#journey">Explore my journey <ArrowDownRight size={17} /></a>
            <a className="button button-secondary" href={profile.resumePath} download><Download size={16} /> Download résumé</a>
          </motion.div>
          <div className="hero-meta"><span><MapPin size={14} /> {profile.location}</span><span className="meta-divider" /><span><span className="meta-number">{profile.experience}+</span> years in QA</span></div>
        </div>
        <div className="hero-visual">
          <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
          <div className="visual-label label-top"><span className="label-pulse" /> QUALITY BY DESIGN</div>
          <OrbitScene />
          <div className="portrait-frame"><Image src={profile.photoPath} alt="Portrait of Sailesh Dash" fill priority sizes="(max-width: 760px) 68vw, 340px" className="portrait-image" /></div>
          <div className="floating-chip chip-top"><ShieldCheck size={16} /><span>Quality first</span></div>
          <div className="floating-chip chip-bottom"><Code2 size={16} /><span>Automation mindset</span></div>
          <div className="visual-caption">TEST · LEARN · IMPROVE <span>01 / 07</span></div>
        </div>
        <a className="scroll-cue" href="#journey"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a>
      </section>

      <section className="metrics-strip" aria-label="Professional highlights"><div className="metric"><span className="metric-value">6.5<span>+</span></span><span className="metric-label">Years in QA</span></div><div className="metric"><span className="metric-value">3</span><span className="metric-label">Testing layers · Web / Mobile / API</span></div><div className="metric"><span className="metric-value">7</span><span className="metric-label">Business domains</span></div><div className="metric"><span className="metric-value">∞</span><span className="metric-label">Curiosity to improve</span></div></section>

      <section className="section-shell section-block journey-section" id="journey">
        <div className="section-heading"><div><SectionEyebrow>THE PATH SO FAR</SectionEyebrow><h2>Built on curiosity.<br /><span>Driven by quality.</span></h2></div><p>My journey across quality engineering, test automation, and software delivery—grounded in practical testing and collaboration.</p></div>
        <div className="timeline">
          {career.map((job, index) => <motion.article key={job.company} className="career-card" initial={reducedMotion ? false : { opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.16 }} transition={{ duration: 0.65, delay: index * 0.08 }}>
            <div className="timeline-marker"><span>{String(index + 1).padStart(2, '0')}</span></div>
            <div className="career-card-main"><div className="career-topline"><span className="tag">{job.tag}</span><span className="career-period">{job.period}</span></div><h3>{job.company}</h3><p className="career-role">{job.role}</p><p className="career-summary">{job.summary}</p><ul className="career-points">{job.points.map(point => <li key={point}><CheckCircle2 size={15} />{point}</li>)}</ul><div className="tag-row">{job.tools.map(tool => <span key={tool} className="skill-tag">{tool}</span>)}</div></div>
          </motion.article>)}
        </div>
      </section>

      <section className="section-shell section-block toolkit-section" id="toolkit">
        <div className="section-heading"><div><SectionEyebrow>MY TOOLKIT</SectionEyebrow><h2>Quality has a<br /><span>technical language.</span></h2></div><p>A practical toolkit across automation, testing, API integration, CI/CD, and AI-assisted workflows.</p></div>
        <div className="skills-grid">
          {skillGroups.map((group, index) => { const Icon = icons[group.icon as keyof typeof icons]; return <motion.article key={group.title} className={`skill-card skill-card-${index + 1}`} initial={reducedMotion ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.45, delay: index * 0.04 }}><div className="skill-card-head"><span className="skill-icon"><Icon size={19} /></span><span className="card-index">0{index + 1}</span></div><h3>{group.title}</h3><div className="skill-list">{group.skills.map(skill => <span key={skill} tabIndex={0} className="skill-pill">{skill}</span>)}</div></motion.article>; })}
        </div>
        <div className="toolkit-note"><Sparkles size={17} /><p>Tools are only part of the story. The goal is always clearer feedback, meaningful coverage, and dependable releases.</p></div>
      </section>

      <section className="lab-section" id="lab"><div className="section-shell section-block"><div className="section-heading"><div><SectionEyebrow>THE AUTOMATION LAB</SectionEyebrow><h2>Turning test ideas<br /><span>into systems.</span></h2></div><p>Selected case-study formats show how I approach automation architecture, API validation, BDD, and release quality.</p></div>
        <div className="project-grid">{projects.map((project, index) => <motion.button key={project.number} className={`project-card project-${index + 1}`} onClick={() => setActiveProject(index)} initial={reducedMotion ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5, delay: index * 0.06 }}><div className="project-art"><span className="project-number">{project.number}</span><div className="project-art-icon">{index === 0 ? <Layers3 /> : index === 1 ? <Network /> : index === 2 ? <Workflow /> : <ShieldCheck />}</div><span className="project-open"><ArrowUpRight size={18} /></span><div className="project-lines"><i /><i /><i /></div></div><div className="project-content"><span className="project-type">{project.type}</span><h3>{project.title}</h3><p>{project.description}</p><div className="tag-row">{project.stack.map(tag => <span className="skill-tag" key={tag}>{tag}</span>)}</div><span className="project-link">Explore case study <ArrowRight size={15} /></span></div></motion.button>)}</div>
        <p className="case-study-disclaimer">Transparency note: case studies are illustrative templates until verified project evidence and links are added.</p>
      </div></section>

      <section className="section-shell section-block approach-section" id="approach"><div className="section-heading"><div><SectionEyebrow>MY QUALITY PRINCIPLES</SectionEyebrow><h2>Test with purpose.<br /><span>Ship with confidence.</span></h2></div><p>Quality engineering is a shared practice: understand risk, choose the right coverage, and make results useful to the whole team.</p></div><div className="principles-grid">{[{ n:'01', title:'Understand risk', desc:'Start with business context and prioritize what matters most.' },{ n:'02', title:'Model real behavior', desc:'Design scenarios around the ways people actually use software.' },{ n:'03', title:'Build for reuse', desc:'Keep automation modular, readable, and maintainable.' },{ n:'04', title:'Test across layers', desc:'Combine API and UI checks for broader, more efficient feedback.' },{ n:'05', title:'Make failures useful', desc:'Turn reports and defects into actionable engineering signals.' },{ n:'06', title:'Use AI thoughtfully', desc:'Accelerate analysis while keeping human judgment in the loop.' }].map((item, i) => <motion.article className="principle-card" key={item.n} initial={reducedMotion ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ delay: i * 0.04 }}><span>{item.n}</span><h3>{item.title}</h3><p>{item.desc}</p><ArrowUpRight className="principle-arrow" size={17} /></motion.article>)}</div></section>

      <section className="industries-section"><div className="section-shell section-block"><div className="section-heading"><div><SectionEyebrow>DOMAIN EXPOSURE</SectionEyebrow><h2>Quality across<br /><span>different worlds.</span></h2></div><p>Experience across business domains with different workflows, data, and customer expectations.</p></div><div className="industry-cloud">{industries.map((industry, index) => <motion.div key={industry} className="industry-tile" initial={reducedMotion ? false : { opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}><span>0{index + 1}</span><strong>{industry}</strong><ArrowUpRight size={15} /></motion.div>)}</div></div></section>

      <section className="section-shell section-block about-section" id="about"><div className="about-panel"><div className="about-glow" /><div className="about-image"><Image src={profile.photoPath} alt="Sailesh Dash, QA and quality engineering professional" fill sizes="(max-width: 760px) 80vw, 330px" className="portrait-image" /></div><div className="about-copy"><SectionEyebrow>A LITTLE ABOUT ME</SectionEyebrow><h2>Curious by nature.<br /><span>Quality-minded by practice.</span></h2><p>I’m a QA professional with over 6.5 years of experience in manual and automation testing for web, mobile, and API-based applications. I enjoy translating business risk into thoughtful test strategies, building maintainable automation, and collaborating with teams to improve software quality.</p><p>My work spans functional testing, regression, exploratory testing, API validation, integration workflows, and CI-driven automation. I’m interested in remote opportunities where quality engineering and continuous improvement are valued.</p><div className="about-facts"><span><BriefcaseBusiness size={16} /> QA & Quality Engineering</span><span><GraduationCap size={16} /> B.Tech · Diploma</span><span><MapPin size={16} /> Hyderabad, India</span></div><a className="text-link" href={profile.resumePath} download>View my résumé <ArrowUpRight size={16} /></a></div></div></section>

      <section className="contact-section" id="contact"><div className="contact-orb" /><div className="section-shell contact-inner"><SectionEyebrow>THE NEXT CHAPTER</SectionEyebrow><h2>Let’s build quality<br /><span>into every release.</span></h2><p>Open to conversations about QA automation, quality engineering, and remote opportunities.</p><div className="contact-actions"><a className="button button-primary" href={`mailto:${profile.email}?subject=${encodeURIComponent('Opportunity to connect')}`}><Mail size={17} /> Let’s connect <ArrowUpRight size={16} /></a><button className="button button-secondary" onClick={copyEmail}>{copied ? <CheckCircle2 size={16} /> : <ClipboardCheck size={16} />}{copied ? 'Email copied' : 'Copy email'}</button></div><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}</a><div className="contact-socials">{profile.linkedIn && <a href={profile.linkedIn} target="_blank" rel="noreferrer">LinkedIn <ExternalLink size={13} /></a>}{profile.github && <a href={profile.github} target="_blank" rel="noreferrer">GitHub <ExternalLink size={13} /></a>}</div></div></section>

      <footer className="site-footer"><a className="brand footer-brand" href="#home"><span className="brand-mark">SD<span>.</span></span><span className="brand-name">SAILESH DASH<small>QUALITY ENGINEERING</small></span></a><p>Designed around curiosity. Built around quality.</p><a href="#home" className="back-top">BACK TO TOP <ArrowUpRight size={14} /></a><span className="copyright">© {new Date().getFullYear()} Sailesh Dash</span></footer>

      {activeProject !== null && <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setActiveProject(null); }}><section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><button className="modal-close" aria-label="Close case study" onClick={() => setActiveProject(null)}><X size={20} /></button><span className="project-type">{projects[activeProject].type}</span><h2 id="modal-title">{projects[activeProject].title}</h2><p>{projects[activeProject].description}</p><h3>Suggested architecture flow</h3><div className="architecture-flow">{projects[activeProject].flow.map((step, index) => <div className="architecture-step" key={step}><span>{String(index + 1).padStart(2, '0')}</span><strong>{step}</strong>{index < projects[activeProject].flow.length - 1 && <ArrowRight size={15} />}</div>)}</div><div className="tag-row modal-tags">{projects[activeProject].stack.map(tag => <span className="skill-tag" key={tag}>{tag}</span>)}</div><div className="modal-note"><Sparkles size={17} /><p>{projects[activeProject].status}</p></div><button className="button button-primary" onClick={() => setActiveProject(null)}>Back to portfolio <ArrowRight size={16} /></button></section></div>}
    </main>
  );
}
