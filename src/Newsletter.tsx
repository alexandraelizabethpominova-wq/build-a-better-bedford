import roadSolution from './assets/road_solution.png'

const safetySteps = [
  ['01', 'The problem', 'Bedford documented three pedestrian deaths involving vehicles in roughly two years, and speed has been a central concern on Concord Road.'],
  ['02', 'The design response', 'Instead of relying only on signs, reshape the crossing so the street itself communicates a slower, safer speed.'],
  ['03', 'The test', 'Compare speed, visibility, crossing behavior, lighting and accessibility before and after a redesign.'],
]

export default function Newsletter() {
  return <section className="newsletter-clean">
    <div className="newsletter-intro">
      <p className="eyebrow">SEPTEMBER 2026 · ISSUE 01</p>
      <p className="newsletter-label">MONTHLY FIELD NOTE · ROAD SAFETY</p>
      <h1>Can you design <span>danger</span> out of a road?</h1>
      <p className="newsletter-deck">Bedford has already identified real pedestrian-safety problems. Our question is simple: can better street design make safer behavior feel natural instead of optional?</p>

      <div className="newsletter-solution">
        <span>OUR STARTING IDEA</span>
        <strong>Make the crossing explain itself.</strong>
        <p>Shorter crossings, clearer pedestrian space, slower-looking geometry and better visibility can change how a road feels — and how people behave on it.</p>
      </div>
    </div>

    <div className="newsletter-notes">
      <div className="newsletter-notes-head"><span>ROAD SAFETY → DESIGN → TEST</span><span>BUILD A BETTER BEDFORD</span></div>

      {safetySteps.map(([number,title,text]) => <article className="newsletter-note" key={number}>
        <span>{number}</span>
        <div><h2>{title}</h2><p>{text}</p></div>
      </article>)}

      <figure className="road-solution">
        <img src={roadSolution} alt="Student concept for a safer Bedford road crossing" />
        <figcaption>Possible crossing concept — a visual starting point, not a final engineering plan.</figcaption>
      </figure>

      <details className="newsletter-more">
        <summary>See more <span>+</span></summary>
        <div className="newsletter-more-body">
          <section className="more-section">
            <h3>Why this matters in Bedford</h3>
            <p>Bedford’s Transportation Advisory Committee documented three pedestrian deaths involving vehicles in roughly two years: one on Shawsheen Road in 2022 and two on Concord Road in 2024. The town has also identified speed, accessibility, and missing pedestrian/bicycle connections as concerns at the Concord Road/Reformatory Branch Trail crossing.</p>
            <a href="https://bedfordma.gov/AgendaCenter/ViewFile/Minutes/_04162025-2105" target="_blank" rel="noreferrer">Bedford TAC minutes ↗</a>
            <a href="https://bedfordma.gov/1037/Concord-Road-Crosswalk-Improvements" target="_blank" rel="noreferrer">Concord Road project ↗</a>
          </section>

          <section className="more-section">
            <h3>Two ways to think about the solution</h3>
            <p><strong>DPZ → change the environment producing the behavior.</strong> New Urbanism uses street geometry, shorter crossings, connected sidewalks, paths and pedestrian-oriented design to influence how people move.</p>
            <p><strong>Thoth → measure whether the redesigned environment is actually working.</strong> Pair design changes with speed, traffic, crossing, lighting and infrastructure data so the result can be evaluated instead of assumed.</p>
          </section>

          <div className="inspiration-grid">
            <article className="inspiration-card">
              <div className="inspiration-top"><span>NEW URBANISM</span><a href="https://www.dpz.com/" target="_blank" rel="noreferrer">DPZ ↗</a></div>
              <h3>Design the place, not just the traffic lane.</h3>
              <p>DPZ focuses on walkable, connected communities where streets and public spaces are designed around people as well as cars.</p>
            </article>

            <article className="inspiration-card">
              <div className="inspiration-top"><span>SUSTAINABILITY</span><a href="https://thothlondon.com/" target="_blank" rel="noreferrer">Thoth ↗</a></div>
              <h3>Measure and improve the system.</h3>
              <p>Thoth applies sustainability, infrastructure data and systems thinking to reduce environmental impact and improve performance.</p>
            </article>
          </div>
        </div>
      </details>

      <div className="newsletter-disclaimer">
        <strong>Student concept, not an engineering plan.</strong>
        <p>A real road-safety design would require site measurements, accessibility and drainage requirements, traffic data, sight-distance analysis, utilities and right-of-way constraints.</p>
      </div>
    </div>
  </section>
}
