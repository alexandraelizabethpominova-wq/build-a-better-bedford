export default function Newsletter() {
  return (
    <article className="newsletter-page">
      <div className="newsletter-mast">
        <div className="newsletter-meta">
          <div className="issue-meta"><span>VOL. 1</span><i>|</i><span>ISSUE 1</span><i>|</i><span>MONTHLY NEWSLETTER</span></div>
          <span>SEP 2026</span>
        </div>
        <div className="newsletter-brand">
          <div className="mast-title">
            <h1>BUILD BETTER</h1>
            <div className="bedford-wrap"><span className="paint-swipe"></span><h1 className="bedford">BEDFORD</h1><span className="unofficial-stamp">UNOFFICIAL</span></div>
          </div>
          <div className="mast-art">
            <div className="mast-slogan">SAME<br/>COMMUNITY.<br/><b>BRIGHTER</b><br/>IDEAS.</div>
            <span className="slogan-mark"></span>
          </div>
        </div>
        <p className="newsletter-kicker">A STUDENT-LED CIVIL ENGINEERING CLUB</p>
      </div>

      <div className="newsletter-layout">
        <main className="feature-story">
          <span className="news-pill blue">FEATURE STORY</span>
          <h2>Can You Design <span>Danger</span> Out of a Road?</h2>
          <p className="deck">What UX design, modern urbanism, and one Bedford crossing can teach us about engineering safer, more sustainable streets.</p>

          <div className="story-hook">
            <div className="roomba-icon">◎</div>
            <div><strong>“Problem detected. See the app for help.”</strong><p>That was the message from our Roomba. There was just one problem: the family member with the app was away.</p></div>
          </div>
          <p>It sounds like a tiny annoyance, but it raises a surprisingly big design question. If people keep making the same mistake, is it really just a people problem? Sometimes, it’s a <strong>design problem.</strong></p>
          <p>A confusing door can make people push when they should pull. A confusing street can make a pedestrian stand at a crossing wondering: <em>Does that driver actually see me?</em> Good design does more than look nice. It can make safer behavior easier and more natural.</p>

          <div className="two-cards">
            <section className="news-card problem"><span className="card-icon">!</span><h3>THE QUESTION</h3><p>What if we looked at a Bedford crossing the way a UX designer looks at an app? Where does the design create uncertainty? What does a driver notice first? How long is someone exposed while crossing? What behavior does the street itself encourage?</p></section>
            <section className="news-card solution"><span className="card-icon">↗</span><h3>A DESIGN HYPOTHESIS</h3><p>For a crossing such as Concord Road at the Reformatory Branch Trail, students could explore curb extensions, a raised high-visibility crossing, a refuge island, continuous trail access, lighting and signage, plus green infrastructure.</p></section>
          </div>

          <section className="crossing-sketch">
            <div className="sketch-label">STUDENT CONCEPT — NOT AN ENGINEERING PLAN</div>
            <div className="road">
              <div className="sidewalk top"></div><div className="crosswalk"></div><div className="island">🌿</div><div className="sidewalk bottom"></div>
              <span className="car car1">▰</span><span className="car car2">▰</span>
            </div>
            <div className="sketch-notes"><span>shorter crossing</span><span>visible crossing</span><span>refuge + planting</span><span>continuous trail</span></div>
          </section>

          <blockquote>“If the environment influences behavior, engineering can help make the safer choice the easier choice.”</blockquote>

          <section className="urbanism">
            <span className="news-pill green">URBANISM + SUSTAINABILITY</span>
            <h3>Can one street solve more than one problem?</h3>
            <p>Modern urbanism asks how streets feel and function at a human scale. A safer crossing can also improve trail continuity and make walking or cycling more practical. Planting can provide shade and habitat. Green infrastructure can help manage stormwater. Traffic-calming features can make a street communicate that people—not only vehicles—belong there.</p>
            <p>The challenge is to connect those goals without pretending there is one easy answer. A real design would need site measurements, accessibility requirements, drainage and utility information, sight-distance analysis, crash history, traffic data, and right-of-way constraints.</p>
          </section>
        </main>

        <aside className="news-sidebar">
          <section className="side-card fact"><span className="news-pill yellow">DESIGN IDEA</span><h3>Roads have a user experience.</h3><p>Lane width, corner geometry, markings, trees, lighting and crossing distance all send signals about how people are expected to move.</p><div className="mini-road">🚶 ━━━━━ 🚲</div></section>
          <section className="side-card spotlight"><span className="news-pill green">BEDFORD SPOTLIGHT</span><h3>Observe before you redesign.</h3><p>Our club can study roads, bridges, sidewalks, trails, drainage and public spaces around Bedford—then ask what is happening, why it happens, and what evidence we would need before proposing a change.</p><div className="spot-art">BEDFORD<br/><strong>OBSERVE → QUESTION → DESIGN</strong></div></section>
          <section className="side-card challenge"><span className="news-pill blue">BBB DESIGN CHALLENGE #001</span><h3>Find one place that makes you hesitate.</h3><ol><li>Observe it safely.</li><li>Identify the confusing or risky moment.</li><li>Sketch one possible change.</li><li>Write down what data you would need to test the idea.</li></ol></section>
          <section className="side-card involved"><span className="news-pill navy">GET INVOLVED</span><h3>Build a Better Bedford</h3><p>Investigate Bedford problems, learn physics and engineering, use CAD, hear from professionals, and design, build and test models with other students.</p><a href="#join" className="news-join">JOIN US →</a></section>
        </aside>
      </div>
      <div className="newsletter-footer"><span>PEOPLE</span><b>•</b><span>IDEAS</span><b>•</b><span>INFRASTRUCTURE</span><strong>A safer, more sustainable Bedford starts with curious minds.</strong></div>
    </article>
  )
}
