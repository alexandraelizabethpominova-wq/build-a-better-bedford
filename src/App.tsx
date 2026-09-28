import { useState } from 'react'
import Newsletter from './Newsletter'
import heroLogo from './assets/bbb-logo-final.png'
import './newsletter.css'

type Page = 'home' | 'about' | 'what-we-do' | 'projects' | 'newsletter' | 'join'

const focusAreas = [
  ['01', 'Local infrastructure', 'Observe Bedford streets, crossings, trails, drainage, and public spaces.'],
  ['02', 'Engineering + physics', 'Learn why structures work through calculations, models, building, and testing.'],
  ['03', 'Design + CAD', 'Turn ideas into sketches, digital models, and practical design concepts.'],
]


const projectProblems = [
  {
    number: '01',
    title: 'Unsafe roads',
    fact: 'Bedford records cite three pedestrian deaths in 2022–2024, including two on Concord Road.',
    question: 'Could part of the danger be in the design itself — speed, visibility, crossing distance, lighting, or road geometry?'
  },
  {
    number: '02',
    title: 'Dog park',
    fact: 'Bedford has 1,162 registered pet dogs and about 6,000 households.',
    question: 'Could a dedicated, well-designed dog park give dogs safer space to exercise and socialize while reducing conflicts on sidewalks and trails?'
  },
  {
    number: '03',
    title: 'Power resilience',
    fact: 'Eversource maintains Bedford’s electric distribution grid and restores local outages.',
    question: 'Why do storms still cause outages, and could tree management, undergrounding, microgrids, or other resilience ideas help?'
  },
  {
    number: '04',
    title: 'Roadwork… then rework?',
    fact: 'Bedford has recurring paving, utility, drainage, sewer, sidewalk, and transportation projects.',
    question: 'Why are some streets opened or revisited repeatedly? Could utilities and road projects be coordinated more efficiently?'
  },
  {
    number: '05',
    title: 'The bathroom dilemma',
    fact: 'Many public restrooms separate users by gender even when each toilet is already inside an individual enclosed stall.',
    question: 'Could public restroom layouts improve privacy, accessibility, safety, and efficiency while working well for everyone?'
  },
  {
    number: '06',
    title: 'Disconnected walking + biking',
    fact: 'The Town says the Concord Road trail crossing currently lacks continuous sidewalk or bicycle connections.',
    question: 'Where else do Bedford’s sidewalks, crossings, and trails stop making sense — and how could those gaps be redesigned?'
  },
  {
    number: '07',
    title: 'Stormwater + flooding',
    fact: 'Bedford is actively upgrading drainage capacity along Great Road and the Elmbrook watershed.',
    question: 'Could greener streets, rain gardens, permeable surfaces, or better drainage reduce flooding while improving public space?'
  },
  {
    number: '08',
    title: 'Hidden Bedford',
    fact: 'Bedford has historic places, trails, and infrastructure that can be easy to pass without noticing.',
    question: 'Could better signs, maps, trail connections, or digital wayfinding make local history and public spaces easier to discover?'
  },
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
        <span className="brand-text">Build a Better Bedford</span>
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
      <div className="hero-logo-wrap">
        <img className="hero-logo-image" src={heroLogo} alt="Build a Better Bedford Civil Engineering and Community Design Club logo" />
      </div>

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

    {page === 'projects' && <section className="projects-page">
      <div className="projects-heading">
        <div>
          <p className="eyebrow">BEDFORD PROBLEM LAB</p>
          <h1>Problems worth exploring.</h1>
        </div>
        <p>These are starting questions — not finished solutions. We observe, research, measure, sketch, model, and test before deciding what might actually work.</p>
      </div>

      <div className="problem-grid">
        {projectProblems.map(problem => <article className="problem-card" key={problem.number}>
          <div className="problem-card-top"><span>{problem.number}</span><h2>{problem.title}</h2></div>
          <p className="problem-fact">{problem.fact}</p>
          <p className="problem-question">{problem.question}</p>
        </article>)}
      </div>

      <p className="projects-source">Starting facts: Town of Bedford transportation, public works and electricity pages; Bedford TAC meeting records; Bedford Town Clerk data reported by The Bedford Citizen.</p>
    </section>}

    {page !== 'home' && page !== 'newsletter' && page !== 'projects' && <section className="coming-page">
      <p className="eyebrow">{labels[page]}</p>
      <h1>Coming soon.</h1>
      <p>We’re preparing this part of Build a Better Bedford.</p>
      <button className="quiet-link" onClick={() => go('home')}>← Back home</button>
    </section>}

    <footer>Unofficial student project · Not affiliated with or endorsed by the Town of Bedford or Bedford Public Schools.</footer>
  </main>
}
export default App
