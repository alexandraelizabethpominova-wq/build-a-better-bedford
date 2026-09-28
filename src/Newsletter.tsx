type NewsletterProps = { onBack: () => void }

const sections = [
  ['01', 'The idea', 'Roads have a user experience. Geometry, visibility, markings and crossing distance influence how people move and what they notice.'],
  ['02', 'The question', 'What if we studied a Bedford crossing like a designer studies an interface: where is the uncertainty, and what behavior does the design encourage?'],
  ['03', 'The experiment', 'Observe safely, sketch one possible improvement, then identify the measurements and evidence needed before treating it as a real engineering proposal.'],
]

export default function Newsletter({ onBack }: NewsletterProps) {
  return <main className="nl-shell">
    <header className="nl-header"><button className="nl-back" onClick={onBack}>← Build a Better Bedford</button><div className="nl-meta">VOL. 1 · ISSUE 1 <span>SEP 2026</span></div></header>
    <section className="nl-view">
      <div className="nl-lead"><p className="nl-label">MONTHLY FIELD NOTE · STREET DESIGN</p><h1>Can you design <span>danger</span> out of a road?</h1><p className="nl-deck">A student look at how design, urbanism, and engineering can make safer behavior easier and more intuitive.</p><blockquote>“If the environment influences behavior, engineering can help make the safer choice the easier choice.”</blockquote></div>
      <div className="nl-content"><div className="nl-section-head"><span>THE STORY</span><span>4 MIN READ</span></div>
        {sections.map(([n,title,text]) => <article className="nl-row" key={n}><span>{n}</span><div><h2>{title}</h2><p>{text}</p></div></article>)}
        <div className="nl-note"><strong>Student concept, not an engineering plan.</strong><p>A real design would require site measurements, accessibility and drainage requirements, traffic data, sight-distance analysis, utilities and right-of-way constraints.</p></div>
      </div>
      <footer className="nl-footer"><span>BUILD A BETTER BEDFORD</span><span>People · Ideas · Infrastructure</span></footer>
    </section>
  </main>
}
