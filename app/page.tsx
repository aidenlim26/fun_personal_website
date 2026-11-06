import { profile, site, type Entry } from "@/lib/content";

const contents = [
  { id: "ai-club", label: "AI Club" },
  { id: "board", label: "Board" },
  { id: "projects", label: "Projects and experience" },
  { id: "education", label: "Education" },
];

function EntryRow({ title, meta, summary, details }: Entry) {
  return (
    <div className="entry">
      <h3>{title}</h3>
      {meta && <p className="meta">{meta}</p>}
      {summary && <p>{summary}</p>}
      {details && (
        <details>
          <summary>More details<span className="visually-hidden"> about {title}</span></summary>
          <ul>
            {details.map((detail) => <li key={detail}>{detail}</li>)}
          </ul>
        </details>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <div className="shell">
      <a className="skip-link" href="#main">Skip to content</a>

      <main id="main" tabIndex={-1}>
        <header className="intro">
          <p className="location">{profile.location}</p>
          <h1>{site.name}</h1>
          <ul className="roles">
            <li><strong>{profile.clubRole}</strong> of the {profile.club}</li>
            <li><strong>{profile.boardRole}</strong> of the {profile.board}</li>
          </ul>
          <div className="intro-links">
            <a className="primary-link" href="#ai-club">Explore the AI Club</a>
            <a href={site.linkedin}>View LinkedIn</a>
          </div>
        </header>

        <div className="reading-layout">
          <nav aria-label="On this page" className="contents">
            <p>On this page</p>
            <ul>
              {contents.map(({ id, label }) => (
                <li key={id}><a href={`#${id}`}>{label}</a></li>
              ))}
            </ul>
          </nav>

          <div className="sections">
            <section id="ai-club" aria-labelledby="club-title">
              <h2 id="club-title">{profile.club}</h2>
              <p>{profile.clubSummary}</p>

              <div className="software">
                <h3>Software ecosystem</h3>
                <h4>{profile.scheduling.title}</h4>
                <p className="meta">{profile.scheduling.meta}</p>
                <p>{profile.scheduling.summary}</p>
                <ul>
                  {profile.scheduling.details.map((detail) => <li key={detail}>{detail}</li>)}
                </ul>
              </div>

              <div className="entry">
                <h3>Outreach</h3>
                <p>{profile.outreach}</p>
              </div>
            </section>

            <section id="board" aria-labelledby="board-title">
              <h2 id="board-title">{profile.board}</h2>
              <p className="meta">{profile.boardRole} · Singapore International School (Hong Kong)</p>
            </section>

            <section id="projects" aria-labelledby="projects-title">
              <h2 id="projects-title">Projects and experience</h2>
              {profile.projects.map((entry) => <EntryRow key={entry.title} {...entry} />)}
            </section>

            <section id="education" aria-labelledby="education-title">
              <h2 id="education-title">Education and credentials</h2>
              {profile.education.map((entry) => <EntryRow key={entry.title} {...entry} />)}
            </section>

            <section id="interests" aria-labelledby="interests-title">
              <h2 id="interests-title">Outside of work</h2>
              {profile.interests.map((entry) => <EntryRow key={entry.title} {...entry} />)}
            </section>
          </div>
        </div>
      </main>

      <footer>
        <span>{site.name}</span>
        <a href={site.linkedin}>Connect on LinkedIn</a>
      </footer>
    </div>
  );
}
