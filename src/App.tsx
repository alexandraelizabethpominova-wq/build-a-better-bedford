import { useState } from 'react'
import Newsletter from './Newsletter'
import homeVisual from './assets/bedford-home.jpg'
import clubLogo from './assets/bbb-logo-final.png'
import './newsletter.css'

type Page = 'home' | 'about' | 'what-we-do' | 'projects' | 'newsletter' | 'join'

const focusAreas = [
  ['01', 'Local infrastructure', 'Observe Bedford streets, crossings, trails, drainage, and public spaces.'],
  ['02', 'Engineering + physics', 'Learn why structures work through calculations, models, building, and testing.'],
  ['03', 'Design + CAD', 'Turn ideas into sketches, digital models, and practical design concepts.'],
]

const labels: Record<Page, string> = {
  home: 'Home',
  about: 'About',
  'what-we-do': 'What we do',
  projects: 'Projects',
  newsletter: 'Newsletter',
  join: 'Join the Club',
}

function App() {
  const [page, setPage] = useState<Page>('home')
  const [menuOpen, setMenuOpen] = useState(false)

  const go = (next: Page) => {
    setPage(next)
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return <main className="site-shell">
    <header className="topbar">
      <button className="identity identity-button" onClick={() => go('home')} aria-label="Build a Better Bedford home">
        <img className="site-logo" src={clubLogo} alt="Build a Better Bedford civil engineering and community design club" />
      </button>

      <button className="menu-toggle" onClick={() => setMenuOpen(v => !v)} aria-expanded={menuOpen} aria-label="Toggle navigation">
        <span></span><span></span><span></span>
      </button>

      <nav className={menuOpen ? 'nav-menu open' : 'nav-menu'} aria-label="Main navigation">
        {(['home','about','what-we-do','projects','newsletter'] as Page[]).map(item =>
          <button key={item} className={page === item ? 'nav-button active-link' : 'nav-button'} onClick={() => go(item)}>{labels[item]}</button>
        )}
        <button className={page === 'join' ? 'join-link active-join' : 'join-link'} onClick={() => go('join')}>Join the Club</button>
      </nav>
    </header>

    {page === 'home' && <section className="viewport">
      <figure className="bedford-visual">
        <img src={homeVisual} alt="Watercolor illustration of a Bedford pond and historic stone waterworks" />
        <figcaption>⌖ Bedford, Massachusetts</figcaption>
      </figure>

      <div className="home-content">
        <p className="eyebrow">STUDENT-LED · BEDFORD, MASSACHUSETTS</p>
        <h1>Real places.<br/>Real solutions.</h1>
        <p className="lede">We explore local infrastructure, learn the engineering behind it, and turn observations into ideas we can sketch, model, build, and test.</p>

        <div className="focus">
          {focusAreas.map(([number,title,text]) => <article className="focus-row" key={number}>
            <span className="number">{number}</span>
            <div><h2>{title}</h2><p>{text}</p></div>
          </article>)}
        </div>

        <div className="actions">
          <button className="primary" onClick={() => go('join')}>Join the club <span>→</span></button>
          <button className="quiet-link" onClick={() => go('about')}>Learn more <span>→</span></button>
        </div>
        <p className="about-line"><strong>No experience required.</strong> We learn together through real examples, design tools, models, and conversations with professionals.</p>
      </div>
    </section>}

    {page === 'newsletter' && <Newsletter />}

    {page !== 'home' && page !== 'newsletter' && <section className="coming-page">
      <p className="eyebrow">{labels[page]}</p>
      <h1>Coming soon.</h1>
      <p>We’re preparing this part of Build a Better Bedford.</p>
      <button className="quiet-link" onClick={() => go('home')}>← Back home</button>
    </section>}

    <footer>Unofficial student project · Not affiliated with or endorsed by the Town of Bedford or Bedford Public Schools.</footer>
  </main>
}
export default App
