const focusAreas = [
  ['01', 'Local infrastructure', 'Observe Bedford streets, crossings, trails, drainage, and public spaces.'],
  ['02', 'Engineering + physics', 'Learn why structures work through calculations, models, building, and testing.'],
  ['03', 'Design + CAD', 'Turn ideas into clear sketches, digital models, and practical design concepts.'],
]

function App() {
  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="identity" href="#home" aria-label="Build a Better Bedford home">
          <span className="logo">BBB</span>
          <span><strong>Build a Better Bedford</strong><small>Student Civil Engineering Club</small></span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#explore">Explore</a>
          <a href="#about">About</a>
          <a className="join-link" href="#join">Join →</a>
        </nav>
      </header>

      <section className="viewport" id="home">
        <div className="intro">
          <p className="eyebrow">BEDFORD, MASSACHUSETTS · STUDENT-LED</p>
          <h1>Learn engineering.<br/><span>Improve where we live.</span></h1>
          <p className="lede">We explore real community infrastructure, learn the engineering behind it, and turn observations into ideas we can sketch, model, build, and test.</p>
          <div className="actions">
            <a className="primary" href="#join">Join the club</a>
            <a className="quiet-link" href="#explore">See what we do ↓</a>
          </div>
        </div>

        <div className="focus" id="explore">
          <div className="focus-heading"><span>WHAT WE DO</span><span>2026–27</span></div>
          {focusAreas.map(([number,title,text]) => (
            <article className="focus-row" key={number}>
              <span className="number">{number}</span>
              <div><h2>{title}</h2><p>{text}</p></div>
            </article>
          ))}
        </div>

        <div className="bottom-line" id="about">
          <p><strong>No experience required.</strong> We learn together and connect physics, design, sustainability, and community problem-solving.</p>
          <p id="join"><strong>Interested?</strong> Club signup + meeting details coming soon.</p>
        </div>
      </section>

      <footer>Unofficial student project · Not affiliated with or endorsed by the Town of Bedford or Bedford Public Schools.</footer>
    </main>
  )
}
export default App
