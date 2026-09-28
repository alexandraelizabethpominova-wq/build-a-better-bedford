const sections = [
  ['01', 'The idea', 'Roads have a user experience. Geometry, visibility, markings, lighting and crossing distance influence how people move and what they notice.'],
  ['02', 'The question', 'What if we studied a Bedford crossing like a designer studies an interface: where is the uncertainty, and what behavior does the street encourage?'],
  ['03', 'The experiment', 'Observe safely, sketch one possible improvement, then identify the measurements and evidence needed before treating it as an engineering proposal.'],
]

export default function Newsletter() {
  return <section className="newsletter-clean">
    <div className="newsletter-intro">
      <p className="eyebrow">SEPTEMBER 2026 · ISSUE 01</p>
      <p className="newsletter-label">MONTHLY FIELD NOTE</p>
      <h1>Can you design <span>danger</span> out of a road?</h1>
      <p className="newsletter-deck">A student look at how design, urbanism and engineering can make safer behavior easier and more intuitive.</p>
      <div className="newsletter-quote">If the environment influences behavior, engineering can help make the safer choice the easier choice.</div>
    </div>

    <div className="newsletter-notes">
      <div className="newsletter-notes-head"><span>THE STORY</span><span>BUILD A BETTER BEDFORD</span></div>
      {sections.map(([number,title,text]) => <article className="newsletter-note" key={number}>
        <span>{number}</span>
        <div><h2>{title}</h2><p>{text}</p></div>
      </article>)}
      <div className="newsletter-disclaimer">
        <strong>Student concept, not an engineering plan.</strong>
        <p>A real design would require site measurements, accessibility and drainage requirements, traffic data, sight-distance analysis, utilities and right-of-way constraints.</p>
      </div>
    </div>
  </section>
}
