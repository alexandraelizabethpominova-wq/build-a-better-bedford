import { useState } from 'react'
import Newsletter from './Newsletter'
import './newsletter.css'

const projects = [
  { title: 'Safer Crosswalks', text: 'Explore how street geometry, visibility, speed, lighting, and human behavior affect pedestrian safety.' },
  { title: 'Why Roads Keep Getting Rebuilt', text: 'Investigate pavement, drainage, utilities, materials, maintenance cycles, and why road work sometimes repeats.' },
  { title: 'Design + Build + Test', text: 'Learn structural physics by designing models, building them, testing them, and comparing results with predictions.' },
  { title: 'CAD + Engineering Tools', text: 'Learn to turn ideas into drawings and models using accessible computer-aided design tools.' }
]

function App() {
  const [page, setPage] = useState<'home' | 'newsletter'>('home')
  if (page === 'newsletter') return <><button className="back-home" onClick={() => setPage('home')}>← Build a Better Bedford</button><Newsletter /></>

  return <div>
    <header className="site-header"><div className="container nav"><a className="brand" href="#top"><span className="brand-mark">BBB</span><span>Build a Better Bedford</span></a><nav><a href="#projects">Projects</a><button className="nav-link-button" onClick={() => setPage('newsletter')}>Newsletter</button><a href="#about">About</a><a className="nav-cta" href="#join">Join</a></nav></div></header>
    <main id="top">
      <section className="hero"><div className="container hero-grid"><div><p className="eyebrow">Student-led civil engineering club</p><h1>Learn engineering by improving the place around us.</h1><p className="hero-copy">Build a Better Bedford explores real infrastructure challenges around Bedford, develops possible solutions, and learns the engineering behind them through research, CAD, model building, and testing.</p><div className="actions"><a className="button primary" href="#join">Join the club</a><a className="button secondary" href="#projects">Explore projects</a></div><p className="unofficial">Unofficial student project — not an official website of the Town of Bedford or Bedford Public Schools.</p></div><div className="hero-card"><span>OBSERVE</span><strong>Find a real problem.</strong><span>UNDERSTAND</span><strong>Learn the physics and constraints.</strong><span>DESIGN</span><strong>Sketch, model, and use CAD.</strong><span>TEST</span><strong>Build, measure, and improve.</strong></div></div></section>
      <section className="section" id="projects"><div className="container"><p className="eyebrow">What we explore</p><h2>Engineering starts with a question.</h2><div className="card-grid">{projects.map(p=><article className="project-card" key={p.title}><h3>{p.title}</h3><p>{p.text}</p></article>)}</div></div></section>
      <section className="section tone" id="newsletter"><div className="container split"><div><p className="eyebrow">September 2026 · Issue 001</p><h2>Can You Design Danger Out of a Road?</h2></div><div><p>What UX design, modern urbanism, and one Bedford crossing can teach us about engineering safer, more sustainable streets.</p><button className="text-link link-button" onClick={() => setPage('newsletter')}>Read the September newsletter →</button></div></div></section>
      <section className="section" id="about"><div className="container split"><div><p className="eyebrow">Why this club exists</p><h2>You do not need to already know civil engineering.</h2></div><div><p>The goal is to learn together. We will study real examples, talk with engineers and architects, investigate local problems, learn design tools, and build projects that make engineering visible and practical.</p><p>The club connects physics, math, design, sustainability, urbanism, and community problem-solving in a hands-on way.</p></div></div></section>
      <section className="section join" id="join"><div className="container join-card"><div><p className="eyebrow">Build with us</p><h2>Curious about how Bedford works?</h2><p>Join us to investigate, design, build, test, and learn. Signup link and meeting details coming soon.</p></div></div></section>
    </main>
    <footer><div className="container footer-inner"><strong>Build a Better Bedford</strong><p>Unofficial student-led project. Not affiliated with or endorsed by the Town of Bedford or Bedford Public Schools.</p></div></footer>
  </div>
}
export default App
