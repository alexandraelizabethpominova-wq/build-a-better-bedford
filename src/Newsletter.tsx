const safetySteps = [
  ['01', 'See the problem', 'Study where people hesitate, where drivers look, how far someone has to cross, and what the street seems to be telling everyone to do.'],
  ['02', 'Change the cues', 'Explore ideas such as shorter crossings, clearer markings, better lighting, raised crossings, refuge islands, or tighter corners that make safer behavior more obvious.'],
  ['03', 'Test before claiming', 'Measure sight distance, traffic speed, drainage, accessibility, utilities, and right-of-way constraints before treating a sketch as a real engineering proposal.'],
]

export default function Newsletter() {
  return <section className="newsletter-clean">
    <div className="newsletter-intro">
      <p className="eyebrow">SEPTEMBER 2026 · ISSUE 01</p>
      <p className="newsletter-label">MONTHLY FIELD NOTE · ROAD SAFETY</p>
      <h1>Can you design <span>danger</span> out of a road?</h1>
      <p className="newsletter-deck">Instead of asking only whether people are being careful enough, we can ask a design question: does the street itself make the safe choice easy to understand?</p>

      <div className="newsletter-solution">
        <span>OUR STARTING IDEA</span>
        <strong>Make the crossing explain itself.</strong>
        <p>A safer crossing should help drivers notice people earlier and help pedestrians understand exactly where and when to cross. The club can sketch a Bedford-specific concept, then test what evidence would be needed to decide whether it actually works.</p>
      </div>
    </div>

    <div className="newsletter-notes">
      <div className="newsletter-notes-head"><span>ROAD SAFETY → DESIGN → TEST</span><span>BUILD A BETTER BEDFORD</span></div>

      {safetySteps.map(([number,title,text]) => <article className="newsletter-note" key={number}>
        <span>{number}</span>
        <div><h2>{title}</h2><p>{text}</p></div>
      </article>)}

      <div className="inspiration-grid">
        <article className="inspiration-card">
          <div className="inspiration-top"><span>NEW URBANISM</span><a href="https://www.dpz.com/" target="_blank" rel="noreferrer">DPZ ↗</a></div>
          <h3>Design the place, not just the traffic lane.</h3>
          <p>DPZ’s New Urbanism work focuses on compact, walkable, mixed-use communities where streets and public spaces are designed around people as well as cars.</p>
        </article>

        <article className="inspiration-card">
          <div className="inspiration-top"><span>SUSTAINABILITY</span><a href="https://thothlondon.com/" target="_blank" rel="noreferrer">Thoth ↗</a></div>
          <h3>Make infrastructure work with the environment.</h3>
          <p>Thoth London focuses on sustainable infrastructure, energy reduction, renewable technologies, and using better data and design to reduce environmental impact.</p>
        </article>
      </div>

      <div className="newsletter-disclaimer">
        <strong>Student concept, not an engineering plan.</strong>
        <p>A real road-safety design would require site measurements, accessibility and drainage requirements, traffic data, sight-distance analysis, utilities and right-of-way constraints.</p>
      </div>
    </div>
  </section>
}
