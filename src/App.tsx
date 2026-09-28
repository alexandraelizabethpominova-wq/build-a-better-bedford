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
    title: 'Why Is Crossing Here So Sketchy?',
    fact: 'Bedford records cite three pedestrian deaths in 2022–2024, including two on Concord Road.',
    question: 'If crossing the road feels like a mini game where the objective is simply not getting hit, something is off. We can look at speed, visibility, crossing distance, lighting, and road geometry to see whether the street design is making the safe choice obvious—or weirdly difficult.'
  },
  {
    number: '02',
    title: 'Where’s the Dog Park?',
    fact: 'Bedford has 1,162 registered pet dogs and about 6,000 households.',
    question: 'There are lots of dogs in Bedford, but no dedicated dog park. So sidewalks and trails become the unofficial meetup spot. Could a well-designed dog park give dogs room to run and socialize without turning every walk into surprise dog networking?'
  },
  {
    number: '03',
    title: 'Why Does the Power Always Dip?',
    fact: 'Eversource maintains Bedford’s electric distribution grid and restores local outages.',
    question: 'Storm starts. Wi-Fi disappears. Chargers become precious artifacts. Why do outages happen so often, and could tree management, undergrounding, microgrids, or smarter grid design make Bedford less dramatic about bad weather?'
  },
  {
    number: '04',
    title: 'Didn’t They Just Fix This?',
    fact: 'Bedford has recurring paving, utility, drainage, sewer, sidewalk, and transportation projects.',
    question: 'The road gets paved. Two months later: cones. Again. At this point the orange barrels have lore. Why does the same street keep getting reopened, and could utility, drainage, sewer, sidewalk, and paving work be coordinated better?'
  },
  {
    number: '05',
    title: 'Why Are Bathrooms Still Split?',
    fact: 'Many public restrooms separate users by gender even when each toilet is already inside an individual enclosed stall.',
    question: 'At home, one bathroom works for everyone. In public, suddenly we’re sorting into teams—even when each toilet is already in its own stall. Could better layouts improve privacy, accessibility, safety, and efficiency without making the bathroom experience a whole social system?'
  },
  {
    number: '06',
    title: 'Why Does the Sidewalk Just End?',
    fact: 'The Town says the Concord Road trail crossing currently lacks continuous sidewalk or bicycle connections.',
    question: 'You’re walking. Everything is fine. Then the sidewalk just… ends. Where do Bedford’s walking and biking routes lose continuity, and how could those missing links be redesigned so getting somewhere doesn’t require improvisation?'
  },
  {
    number: '07',
    title: 'Why Is This Corner Always Flooded?',
    fact: 'Bedford is actively upgrading drainage capacity along Great Road and the Elmbrook watershed.',
    question: 'Rain falls. Giant puddle appears. Somebody’s sneaker is sacrificed. Could greener streets, rain gardens, permeable surfaces, or better drainage help Bedford manage stormwater without turning random corners into temporary ponds?'
  },
  {
    number: '08',
    title: 'Why Is Bedford’s Cool Stuff So Hidden?',
    fact: 'Bedford has historic places, trails, and infrastructure that can be easy to pass without noticing.',
    question: 'Bedford has trails, historic places, and cool infrastructure, but sometimes you only find out they exist after someone’s parent mentions them. Could signs, maps, trail connections, or digital wayfinding make local history feel less like hidden side quests?'
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
