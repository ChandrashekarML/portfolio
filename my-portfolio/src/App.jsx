// App.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';

const PROFILE = {
  name: 'Chandrashekar M L',
  title: 'Full Stack Developer',
  location: 'Hassan, Karnataka',
  email: 'chandrashekarml54321@gmail.com',
  phone: '+91 6363908639',
  linkedin: 'https://linkedin.com/in/chandrashekar-m-l-a5b2b02a5',
  github: 'https://github.com/ChandrashekarML',
  resume: 'src/resume.pdf'
};

const PROJECTS = [
  {
    id: 1,
    title: 'Blog Platform',
    desc: 'React + Spring Boot blog platform with JWT auth, REST API and responsive UI.',
    tech: ['React', 'Spring Boot', 'PostgreSQL', 'CSS'],
    link: '#',
  },
  {
    id: 2,
    title: 'WellNest (Healthcare)',
    desc: 'AI-powered healthcare platform — diet/exercise recommendations, appointments, messaging.',
    tech: ['DRF', 'React.js', 'PostgreSQL', 'Flutter'],
    link: '#',
  },
  {
    id: 3,
    title: 'Mini Projects & Demos',
    desc: 'Small utilities and frontend demos showcasing JS/React skills.',
    tech: ['JavaScript', 'React', 'CSS'],
    link: '#',
  },
];

function TechPills({ list }) {
  return (
    <div className="tech-pills">
      {list.map((t) => (
        <span key={t} className="pill">{t}</span>
      ))}
    </div>
  );
}

export default function App() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="app">
      <header className="header">
        <motion.h1 initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="logo">
          {PROFILE.name}
        </motion.h1>
        <nav className="nav">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href={PROFILE.resume} download className="btn">Download Resume</a>
        </nav>
      </header>

      <main className="main">
        {/* Hero Section */}
        <section className="hero">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="card profile-card">
            <div className="profile-top">
              <div className="profile-pic">
                <img src="src/profile.jpg" alt="profile" />
              </div>
              <div>
                <h2>{PROFILE.title}</h2>
                <p>{PROFILE.location} • <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a></p>
                <div className="links">
                  <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                  <a href={PROFILE.github} target="_blank" rel="noreferrer">GitHub</a>
                </div>
              </div>
            </div>
            <div className="career-objective">
              <strong>Career Objective:</strong>
              <p>The best resume objective for a fresher emphasizes enthusiasm, transferable skills, and academic achievements.</p>
            </div>
            <div className="contact-grid">
              <div><h4>Phone</h4><p>{PROFILE.phone}</p></div>
              <div><h4>Email</h4><p>{PROFILE.email}</p></div>
            </div>
          </motion.div>
        <br></br>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="card skills-card">
            <h3>Technical Skills</h3>
            <ul>
              <li><strong>Languages:</strong> Java, JavaScript</li>
              <li><strong>Web:</strong> HTML, CSS, React.js</li>
              <li><strong>Databases:</strong> MySQL, PostgreSQL</li>
              <li><strong>Tools:</strong> Git, GitHub, VS Code</li>
            </ul>
            <div className="internship">
              <h4>Internship</h4>
              <p>TechCiti Technology Pvt. Ltd. — Full Stack Developer (Oct 2024 - Dec 2024)</p>
            </div>
          </motion.div>
        </section>

        {/* Projects */}
        <section id="projects" className="projects">
          <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>Projects</motion.h2>
          <div className="project-grid">
            {PROJECTS.map((p) => (
              <motion.article key={p.id} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="card project-card">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <TechPills list={p.tech} />
                <div className="project-actions">
                  <button onClick={() => setSelected(p)}>Details</button>
                  <a href={p.link}>Live</a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="about">
          <div className="card">
            <h3>Education</h3>
            <p>Navkis College of Engineering — B.E (CSE) 2021-2025</p>
            <h3>Certifications</h3>
            <p>Full Stack Development with Spring Boot & React — Itvedant</p>
            <h3>Soft skills</h3>
            <p>Analytical Thinking | Team Collaboration | Communication | Adaptability</p>
          </div>
          <div className="card">
            <h3>Contact</h3>
            <p><strong>Phone:</strong> {PROFILE.phone}</p>
            <p><strong>Email:</strong> {PROFILE.email}</p>
            <p><strong>LinkedIn:</strong> <a href={PROFILE.linkedin}>Profile</a></p>
            <p><strong>GitHub:</strong> <a href={PROFILE.github}>Profile</a></p>
            <a href={PROFILE.resume} download className="btn">Download Resume</a>
          </div>
        </section>

        <footer className="footer">© {new Date().getFullYear()} {PROFILE.name} — Built with ❤️</footer>
      </main>

      {selected && (
        <div className="modal-bg" onClick={() => setSelected(null)}>
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>{selected.title}</h3>
            <p>{selected.desc}</p>
            <TechPills list={selected.tech} />
            <div className="modal-actions">
              <a href={selected.link}>Visit</a>
              <button onClick={() => setSelected(null)}>Close</button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

