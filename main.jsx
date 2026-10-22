import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X,
  Code2, Braces, Layers3, Cpu, Globe2, Sparkles, Terminal, ExternalLink,
  Download, Send, Database, BrainCircuit, FileText, GraduationCap, BriefcaseBusiness,
  CheckCircle2, Network, Workflow
} from "lucide-react";
import "./styles.css";

const profile = {
  name: "Prasanna",
  fullName: "Prasanna Kumar M",
  role: "Full-Stack Developer",
  email: "pawan1142006@gmail.com",
  github: "https://github.com/prasanna-237/",
  linkedin: "https://www.linkedin.com/in/prasanna-kumar-49607b2a2/",
  resume: "/resume.pdf",
};

const skills = [
  { title: "Languages", text: "Java · Python · C · SQL · JavaScript", icon: Code2 },
  { title: "Frontend", text: "React · JavaScript · HTML · CSS", icon: Braces },
  { title: "Backend & APIs", text: "Node.js · Express.js · FastAPI · REST APIs", icon: Terminal },
  { title: "Databases", text: "MySQL · PostgreSQL · MongoDB · Sequelize", icon: Database },
  { title: "AI & GenAI", text: "LLMs · RAG · NLP · Embeddings · Prompt Engineering", icon: BrainCircuit },
  { title: "Cloud & Tools", text: "Azure · Azure OpenAI · Git · GitHub · Postman · VS Code", icon: Layers3 },
];

const projects = [
  {
    number: "01",
    title: "People Intel",
    subtitle: "Retention Intelligence Platform",
    category: "FULL-STACK · AI INTEGRATION",
    description: "A full-stack platform for exploring employee retention data, feedback, and organizational trends through analytics dashboards and AI-assisted insights.",
    contributions: [
      "Built dashboards for retention health, intent to stay, flight risk, retention drivers, and employee voice.",
      "Implemented CSV and document ingestion for PDF, DOCX, TXT, and MSG files, with database persistence and duplicate-upload handling.",
      "Integrated Azure OpenAI to analyze feedback and documents for sentiment, themes, concerns, risk signals, and recommendations.",
      "Developed REST APIs with filtering and comparison across organizational dimensions."
    ],
    stack: ["JavaScript", "Node.js", "Express.js", "Sequelize", "MySQL", "Azure OpenAI"],
    icon: Workflow,
    label: "Internship project",
  },
  {
    number: "02",
    title: "AI Document Intelligence",
    subtitle: "RAG Question-Answering Assistant",
    category: "AI · BACKEND · RAG",
    description: "A document question-answering application that retrieves relevant information from uploaded files and uses it to generate context-aware responses.",
    contributions: [
      "Built a pipeline for document extraction, text chunking, embeddings, and semantic retrieval using FAISS.",
      "Developed REST APIs for document upload, indexing, retrieval, and question answering.",
      "Used LangChain and Azure OpenAI to generate responses grounded in retrieved document context."
    ],
    stack: ["Python", "FastAPI", "LangChain", "FAISS", "Azure OpenAI"],
    icon: BrainCircuit,
    label: "AI application",
  },
];

const experience = [
  {
    date: "JUL 2026 — OCT 2026",
    title: "Software Intern",
    org: "Firstsource Solutions · Chennai, India",
    detail: "Contributed to enterprise software development, testing, data processing, and application workflows within the Enterprise Transformation Office.",
    bullets: [
      "Supported an AI-powered retention intelligence application spanning web development, backend services, databases, and data ingestion.",
      "Contributed to AI-based document analysis and software testing activities.",
      "Collaborated with team members in a remote development environment."
    ]
  }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const ids = ["home", "about", "skills", "projects", "experience", "education", "contact"];
      const current = ids.map(id => document.getElementById(id))
        .filter(Boolean).filter(el => el.getBoundingClientRect().top < 150).pop();
      if (current) setActive(current.id.charAt(0).toUpperCase() + current.id.slice(1));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const nav = ["About", "Skills", "Projects", "Experience", "Education", "Contact"];

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <header className={`topbar ${scrolled ? "topbar-scrolled" : ""}`}>
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">P.</span><span>prasanna<span className="brand-dot">/</span>dev</span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? "nav nav-open" : "nav"} aria-label="Main navigation">
          {nav.map(item => <a key={item} className={active === item ? "nav-link active" : "nav-link"} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
          <a className="nav-resume" href={profile.resume} download><Download size={15} /> Resume</a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> SOFTWARE DEVELOPMENT · AI · FULL STACK <span className="eyebrow-line" /></div>
            <p className="hero-greeting">Hey, I'm</p>
            <h1>{profile.name}<span className="gradient-text">.</span></h1>
            <div className="hero-role">I build <span className="role-highlight">useful digital experiences.</span></div>
            <p className="hero-description">Computer Science and Engineering student with hands-on experience building full-stack applications, REST APIs, analytics tools, and AI-powered document workflows. I enjoy turning complex problems into practical software.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowRight size={17} /></a>
              <a className="button button-ghost" href="#contact">Let's connect <ArrowUpRight size={17} /></a>
            </div>
            <div className="social-row">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile"><Github size={18} /><span>GitHub</span></a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile"><Linkedin size={18} /><span>LinkedIn</span></a>
              <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={18} /></a>
              <span className="social-caption">Chennai, Tamil Nadu, India</span>
            </div>
          </div>

          <div className="hero-art" aria-label="Decorative code illustration">
            <div className="orbit orbit-a" /><div className="orbit orbit-b" />
            <div className="float-chip chip-top"><span className="chip-pulse" /> Full-stack · AI-powered</div>
            <div className="code-window">
              <div className="window-top"><div className="window-dots"><i /><i /><i /></div><span>project.config.js</span><span className="window-lock">JS</span></div>
              <div className="code-body">
                <div><span className="ln">01</span><span className="code-purple">const</span> <span className="code-blue">developer</span> = {"{"}</div>
                <div><span className="ln">02</span>&nbsp;&nbsp;name: <span className="code-green">'Prasanna'</span>,</div>
                <div><span className="ln">03</span>&nbsp;&nbsp;stack: [<span className="code-green">'React'</span>, <span className="code-green">'Node'</span>],</div>
                <div><span className="ln">04</span>&nbsp;&nbsp;interests: [<span className="code-green">'AI'</span>, <span className="code-green">'APIs'</span>],</div>
                <div><span className="ln">05</span>&nbsp;&nbsp;learn: <span className="code-orange">always</span>,</div>
                <div><span className="ln">06</span>{"};"}</div>
                <div className="code-cursor-line"><span className="ln">07</span><span className="cursor" /></div>
              </div>
              <div className="window-footer"><span><span className="tiny-green" /> Building useful things</span><span>UTF-8&nbsp; · &nbsp;JavaScript</span></div>
            </div>
            <div className="float-chip chip-bottom"><Code2 size={16} /> APIs · data · AI <span className="sparkle">✳</span></div>
            <div className="art-star star-one">✳</div><div className="art-star star-two">✦</div>
          </div>
          <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDownRight size={16} /></a>
          <div className="hero-index">01 <span /> 07</div>
        </section>

        <section className="intro-strip section-wrap" id="about">
          <div className="section-kicker"><span>01 / ABOUT ME</span><div className="kicker-rule" /></div>
          <div className="about-grid">
            <h2>Curiosity first.<br /><span className="muted-heading">Code with purpose.</span></h2>
            <div className="about-copy">
              <p>I'm Prasanna, a Computer Science and Engineering student at Rajalakshmi Engineering College (2023–2027), with a CGPA of 8.1. My interests include full-stack development, AI-powered systems, and data-driven applications.</p>
              <p>I've worked with frontend interfaces, backend services, REST APIs, databases, document-processing workflows, and LLM-powered features. I enjoy connecting these pieces into applications that are useful, maintainable, and easy to understand.</p>
              <a className="text-link" href="#experience">Explore my experience <ArrowRight size={15} /></a>
            </div>
          </div>
          <div className="about-facts">
            <div className="fact"><span className="fact-icon"><Code2 size={18} /></span><div><strong>Full-stack development</strong><span>Frontend, backend, REST APIs</span></div></div>
            <div className="fact"><span className="fact-icon"><BrainCircuit size={18} /></span><div><strong>AI applications</strong><span>RAG, LLMs, document intelligence</span></div></div>
            <div className="fact"><span className="fact-icon"><Database size={18} /></span><div><strong>Data workflows</strong><span>Ingestion, persistence, analytics</span></div></div>
          </div>
        </section>

        <section className="section-wrap section-block" id="skills">
          <div className="section-kicker"><span>02 / TECHNICAL TOOLKIT</span><div className="kicker-rule" /><span className="kicker-note">Skills from my current experience</span></div>
          <div className="section-heading-row"><h2>Skills & <span className="gradient-text">technologies</span></h2><p>A practical toolkit for building software and AI-powered features.</p></div>
          <div className="skills-grid">
            {skills.map((skill, i) => { const Icon = skill.icon; return <article className="skill-card" key={skill.title} style={{"--delay": `${i * 70}ms`}}><div className="skill-card-top"><span className="skill-icon"><Icon size={20} /></span><span className="skill-index">0{i+1}</span></div><h3>{skill.title}</h3><p>{skill.text}</p><div className="skill-card-line" /></article>; })}
          </div>
        </section>

        <section className="section-wrap section-block" id="projects">
          <div className="section-kicker"><span>03 / PROJECT SPOTLIGHT</span><div className="kicker-rule" /><span className="kicker-note">Selected work from my experience</span></div>
          <div className="section-heading-row"><h2>Things I've <span className="gradient-text">worked on.</span></h2><p>Project summaries and technical contributions.</p></div>
          <div className="projects-grid projects-grid-two">
            {projects.map(project => { const Icon = project.icon; return <article className="project-card" key={project.number}>
              <div className="project-visual"><div className="project-visual-grid" /><div className="project-icon-wrap"><Icon size={34} strokeWidth={1.4} /></div><span className="project-number">{project.number} / PROJECT</span><span className="project-label">{project.label}</span></div>
              <div className="project-content"><div className="project-category">{project.category}</div><h3>{project.title}</h3><h4>{project.subtitle}</h4><p className="project-description">{project.description}</p>
                <ul className="contribution-list">{project.contributions.map(item => <li key={item}><CheckCircle2 size={14} /> <span>{item}</span></li>)}</ul>
                <div className="tag-list">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
              </div>
            </article>; })}
          </div>
          <p className="edit-note"><Sparkles size={14} /> People Intel is described at a high level based on your resume; no confidential company data or internal links are included.</p>
        </section>

        <section className="section-wrap section-block" id="experience">
          <div className="section-kicker"><span>04 / EXPERIENCE</span><div className="kicker-rule" /></div>
          <div className="journey-grid">
            <div><h2>Learning by<br /><span className="gradient-text">building in teams.</span></h2><p className="journey-lead">Industry exposure, collaboration, and practical software work.</p></div>
            <div className="timeline">
              {experience.map(item => <div className="timeline-item" key={item.title}><span className="timeline-dot" /><span className="timeline-date">{item.date}</span><div><h3>{item.title}</h3><p className="timeline-org">{item.org}</p><p>{item.detail}</p><ul className="experience-list">{item.bullets.map(b => <li key={b}>{b}</li>)}</ul></div></div>)}
            </div>
          </div>
        </section>

        <section className="section-wrap section-block education-section" id="education">
          <div className="section-kicker"><span>05 / EDUCATION & CERTIFICATIONS</span><div className="kicker-rule" /></div>
          <div className="education-grid">
            <article className="education-card">
              <span className="education-icon"><GraduationCap size={22}/></span>
              <div className="education-date">2023 — 2027</div>
              <h3>Rajalakshmi Engineering College</h3>
              <p>B.E. Computer Science and Engineering</p>
              <div className="education-score"><span>CGPA</span><strong>8.1</strong></div>
            </article>
            <article className="cert-card">
              <span className="education-icon"><CheckCircle2 size={22}/></span>
              <h3>Certifications</h3>
              <ul>
                <li><span>Generative AI Essentials: Using LLMs to Work with Data</span><small>IBM SkillsBuild</small></li>
                <li><span>AI Fundamentals</span><small>IBM SkillsBuild</small></li>
                <li><span>Back End Development and APIs</span><small>freeCodeCamp</small></li>
              </ul>
            </article>
          </div>
        </section>

        <section className="section-wrap contact-section" id="contact">
          <div className="contact-panel">
            <div className="contact-orb" />
            <div className="section-kicker"><span>06 / LET'S CONNECT</span><div className="kicker-rule" /></div>
            <div className="contact-grid">
              <div><p className="contact-pretitle">Interested in working together?</p><h2>Let's build<br /><span className="gradient-text">something useful.</span></h2><p className="contact-copy">I'm open to connecting about software development opportunities, projects, and collaboration. Reach out through email or connect with me professionally.</p><a className="button button-primary" href={`mailto:${profile.email}?subject=Hello%20Prasanna`}><Send size={16} /> Email me <ArrowUpRight size={16} /></a></div>
              <div className="contact-links">
                <a href={`mailto:${profile.email}`}><span className="contact-link-icon"><Mail size={19} /></span><span><small>EMAIL</small><strong>{profile.email}</strong></span><ArrowUpRight size={17} /></a>
                <a href={profile.github} target="_blank" rel="noopener noreferrer"><span className="contact-link-icon"><Github size={19} /></span><span><small>GITHUB</small><strong>prasanna-237</strong></span><ArrowUpRight size={17} /></a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><span className="contact-link-icon"><Linkedin size={19} /></span><span><small>LINKEDIN</small><strong>Prasanna Kumar</strong></span><ArrowUpRight size={17} /></a>
                <a href={profile.resume} download><span className="contact-link-icon"><Download size={19} /></span><span><small>RESUME</small><strong>Download CV (PDF)</strong></span><ArrowUpRight size={17} /></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap"><a className="brand footer-brand" href="#home"><span className="brand-mark">P.</span><span>prasanna<span className="brand-dot">/</span>dev</span></a><span>Designed with curiosity · Built with React</span><span>© {year} Prasanna</span><a href="#home" className="back-top">Back to top ↑</a></footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
