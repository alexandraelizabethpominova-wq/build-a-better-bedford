import { useState } from 'react'
import Newsletter from './Newsletter'
import heroLogo from './assets/bbb-logo-clean.svg'
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
    icon: 'crossing',
    title: 'Why Is Crossing Here So Sketchy?',
    fact: 'Bedford records cite three pedestrian deaths in 2022–2024, including two on Concord Road.',
    question: 'If crossing the road feels like a mini game where the objective is simply not getting hit, something is off. We can look at speed, visibility, crossing distance, lighting, and road geometry to see whether the street design is making the safe choice obvious—or weirdly difficult.'
  },
  {
    number: '02',
    icon: 'dog',
    title: 'Where’s the Dog Park?',
    fact: 'Bedford has 1,162 registered pet dogs and about 6,000 households.',
    question: 'There are lots of dogs in Bedford, but no dedicated dog park. So sidewalks and trails become the unofficial meetup spot. Could a well-designed dog park give dogs room to run and socialize without turning every walk into surprise dog networking?'
  },
  {
    number: '03',
    icon: 'power',
    title: 'Why Does the Power Always Dip?',
    fact: 'Eversource maintains Bedford’s electric distribution grid and restores local outages.',
    question: 'Storm starts. Wi-Fi disappears. Chargers become precious artifacts. Why do outages happen so often, and could tree management, undergrounding, microgrids, or smarter grid design make Bedford less dramatic about bad weather?'
  },
  {
    number: '04',
    icon: 'roadwork',
    title: 'Didn’t They Just Fix This?',
    fact: 'Bedford has recurring paving, utility, drainage, sewer, sidewalk, and transportation projects.',
    question: 'The road gets paved. Two months later: cones. Again. At this point the orange barrels have lore. Why does the same street keep getting reopened, and could utility, drainage, sewer, sidewalk, and paving work be coordinated better?'
  },
  {
    number: '05',
    icon: 'bathroom',
    title: 'Why Are Bathrooms Still Split?',
    fact: 'Many public restrooms separate users by gender even when each toilet is already inside an individual enclosed stall.',
    question: 'At home, one bathroom works for everyone. In public, suddenly we’re sorting into teams—even when each toilet is already in its own stall. Could better layouts improve privacy, accessibility, safety, and efficiency without making the bathroom experience a whole social system?'
  },
  {
    number: '06',
    icon: 'sidewalk',
    title: 'Why Does the Sidewalk Just End?',
    fact: 'The Town says the Concord Road trail crossing currently lacks continuous sidewalk or bicycle connections.',
    question: 'You’re walking. Everything is fine. Then the sidewalk just… ends. Where do Bedford’s walking and biking routes lose continuity, and how could those missing links be redesigned so getting somewhere doesn’t require improvisation?'
  },
  {
    number: '07',
    icon: 'flood',
    title: 'Why Is This Corner Always Flooded?',
    fact: 'Bedford is actively upgrading drainage capacity along Great Road and the Elmbrook watershed.',
    question: 'Rain falls. Giant puddle appears. Somebody’s sneaker is sacrificed. Could greener streets, rain gardens, permeable surfaces, or better drainage help Bedford manage stormwater without turning random corners into temporary ponds?'
  },
  {
    number: '08',
    icon: 'hidden',
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

function RoadSignIcon({ type }: { type: string }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 2.2, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

  return <svg viewBox="0 0 48 48" aria-hidden="true">
    {type === 'crossing' && <>
      <circle cx="23" cy="9" r="3.2" fill="currentColor"/>
      <path {...common} d="M22 13l-4 8 5 5 3-9 5 4M23 26l-5 12M23 26l8 12M7 39h34M10 34h5M18 34h5M26 34h5M34 34h5"/>
      <path d="M36 8l6 10H30z" fill="none" stroke="#4f963f" strokeWidth="2.2"/><path d="M36 12v3M36 17h.01" stroke="#4f963f" strokeWidth="2.2" strokeLinecap="round"/>
    </>}
    {type === 'dog' && <>
      <path {...common} d="M9 27c3-8 8-11 14-9l6 4h7l3 5-5 4h-6l-4 5h-7l-2-5H9zM16 20l-3-5M29 22l3-5M12 31l-1 7M26 31l2 7"/>
      <circle cx="35" cy="24" r="1.2" fill="currentColor"/><circle cx="39" cy="36" r="4" fill="none" stroke="#4f963f" strokeWidth="2.2"/>
    </>}
    {type === 'power' && <>
      <path {...common} d="M10 39V13M7 17h20M12 11h4M22 11h4M13 17c5 7 7 7 12 0M11 24c6 7 10 7 16 0"/>
      <path d="M34 11h7l-5 9h5l-10 14 3-10h-5z" fill="#4f963f"/>
    </>}
    {type === 'roadwork' && <>
      <path {...common} d="M13 36l5-15 7 3 5 12M18 21l2-7M9 36h25M8 14h17l4 5H5zM8 14l5 5M17 14l5 5"/>
      <path {...common} d="M36 15a8 8 0 1 1-2 12" stroke="#4f963f"/><path d="M34 12l4 3-4 3" fill="none" stroke="#4f963f" strokeWidth="2.2"/>
    </>}
    {type === 'bathroom' && <>
      <rect x="8" y="8" width="25" height="32" rx="2" {...common}/>
      <circle cx="15" cy="16" r="2.2" fill="currentColor"/><path {...common} d="M15 20v10M12 24h6M15 30l-3 6M15 30l3 6"/>
      <circle cx="26" cy="16" r="2.2" fill="currentColor"/><path {...common} d="M26 20l-4 9h8l-4-9M26 29v7"/>
      <path d="M39 17c0-3 2-5 5-5" {...common} stroke="#4f963f"/><circle cx="41" cy="34" r="1.5" fill="#4f963f"/><path d="M41 29v-1c0-4 5-4 5-8 0-2-2-4-5-4" {...common} stroke="#4f963f"/>
    </>}
    {type === 'sidewalk' && <>
      <circle cx="11" cy="13" r="2.5" fill="currentColor"/><path {...common} d="M11 17l-3 7 5 4 3-8M13 28l-4 10M13 28l7 10"/>
      <circle cx="28" cy="15" r="2.4" fill="currentColor"/><path {...common} d="M28 18l-4 7 5 3 4-6M27 24h8l4 7M31 28l-5 8M35 31h5"/>
      <path {...common} d="M5 40h25M30 40l5-6 4 3 4-7"/>
      <path d="M40 12v8M36 16h8" stroke="#4f963f" strokeWidth="2.2" strokeLinecap="round"/>
    </>}
    {type === 'flood' && <>
      <path {...common} d="M8 27h32l-4-9H12zM13 27v5M35 27v5M16 22h4M23 22h4M30 22h4"/>
      <path {...common} d="M5 35c4-3 8 3 12 0s8 3 12 0 8 3 14 0M5 40c4-3 8 3 12 0s8 3 12 0 8 3 14 0"/>
      <path d="M18 8c0 4-4 5-4 8a4 4 0 0 0 8 0c0-3-4-4-4-8zM31 6c0 3-3 4-3 7a3 3 0 0 0 6 0c0-3-3-4-3-7z" fill="#4f963f"/>
    </>}
    {type === 'hidden' && <>
      <path {...common} d="M7 34l13-11 8 5 13-10M20 23v-8h8v13M30 26v-12h7v7M8 18h10M13 18v-5M8 13h10"/>
      <path d="M35 9a5 5 0 1 1-10 0c0-3 2-5 5-5s5 2 5 5zM30 14v7" fill="none" stroke="#4f963f" strokeWidth="2.2"/>
    </>}
  </svg>
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
          <div className="problem-card-top">
            <span>{problem.number}</span>
            <div className="problem-heading">
              <div className="road-sign"><RoadSignIcon type={problem.icon} /></div>
              <h2>{problem.title}</h2>
            </div>
          </div>
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
