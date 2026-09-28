import { useState } from 'react'
import Newsletter from './Newsletter'
import bedfordSketch from './assets/bedford-mill-pond.svg'
import './newsletter.css'

const focusAreas = [
  ['01', 'Local infrastructure', 'Observe Bedford streets, crossings, trails, drainage, and public spaces.'],
  ['02', 'Engineering + physics', 'Learn why structures work through calculations, models, building, and testing.'],
  ['03', 'Design + CAD', 'Turn ideas into sketches, digital models, and practical design concepts.'],
]

function BridgeLogo() {
  return <svg className="bridge-logo" viewBox="0 0 88 54" aria-hidden="true"><path d="M4 44h80M8 39C20 13 34 10 44 10s24 3 36 29M9 39h70M17 39V29m14 10V18m26 21V18m14 21V29M8 46V8m72 38V8M3 8h82" /></svg>
}

function App() {
  const [page, setPage] = useState<'home' | 'newsletter'>('home')
  if (page === 'newsletter') return <Newsletter onBack={() => setPage('home')} />

  return <main className="site-shell">
    <header className="topbar">
      <a className="identity" href="#home"><BridgeLogo/><span><strong>BUILD A BETTER<br/>BEDFORD</strong><small>CIVIL ENGINEERING & COMMUNITY DESIGN CLUB</small></span></a>
      <nav aria-label="Main navigation"><a href="#home">Home</a><a href="#about">About</a><a href="#explore">What we do</a><button className="nav-button" onClick={() => setPage('newsletter')}>Newsletter</button><a className="join-link" href="#join">Join the club</a></nav>
    </header>

    <section className="viewport" id="home">
      <figure className="bedford-visual"><img src={bedfordSketch} alt="Illustrated Bedford waterway and historic stone structure"/><figcaption>Bedford, Massachusetts</figcaption></figure>
      <div className="home-content">
        <p className="eyebrow">STUDENT-LED · BEDFORD, MASSACHUSETTS</p>
        <h1>Real places.<br/>Real solutions.</h1>
        <p className="lede">We explore local infrastructure, learn the engineering behind it, and turn observations into ideas we can sketch, model, build, and test.</p>
        <div className="focus" id="explore">
          {focusAreas.map(([number,title,text]) => <article className="focus-row" key={number}><span className="number">{number}</span><div><h2>{title}</h2><p>{text}</p></div></article>)}
        </div>
        <div className="actions" id="join"><a className="primary" href="#join">Join the club →</a><a className="quiet-link" href="#about">Learn more →</a></div>
        <p className="about-line" id="about"><strong>No experience required.</strong> We learn together through real examples, design tools, models, and conversations with professionals.</p>
      </div>
    </section>
    <footer>Unofficial student project · Not affiliated with or endorsed by the Town of Bedford or Bedford Public Schools.</footer>
  </main>
}
export default App
