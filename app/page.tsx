import Image from "next/image";
import { awards, certificates, education, experience, profile, projects, site, type Entry } from "@/lib/content";
import SectionNavigation from "./section-navigation";

function OriginalDescription({ text, title }: {
    text?: string;
    title: string;
}) {
    if (!text)
        return null;
    return <details className="disclosure">
    <summary>Read LinkedIn description<span className="visually-hidden"> for {title}</span><span className="toggle" aria-hidden="true"/></summary>
    <div className="original-copy">{text}</div>
  </details>;
}
function BoldText({ text }: { text: string }) {
  return text.split(/(\*\*.*?\*\*)/g).map((part, index) =>
    part.startsWith("**")
      ? <strong key={index}>{part.slice(2, -2)}</strong>
      : part
  );
}

function ProjectDescription({ text, title }: { text: string; title: string }) {
  return (
    <details className="disclosure">
      <summary>
        Read project details<span className="visually-hidden"> for {title}</span>
        <span className="toggle" aria-hidden="true" />
      </summary>
      <div className="project-description">
        {text.split("\n\n").map((paragraph, index) =>
          paragraph.startsWith("- ") ? (
            <ul key={index}>
              {paragraph.split("\n").map((item) => (
                <li key={item}><BoldText text={item.slice(2)} /></li>
              ))}
            </ul>
          ) : <p key={index}><BoldText text={paragraph} /></p>
        )}
      </div>
    </details>
  );
}

function EntryRow({ id, title, meta, summary, linkedinDescription, projectDescription, href, linkLabel, nested = false }: Entry & {
    nested?: boolean;
}) {
    const Heading = nested ? "h4" : "h3";
    return <article className="entry" id={id}>
    <Heading>{title}</Heading><p className="meta">{meta}</p><p className="entry-summary">{summary}</p>
    {projectDescription && <ProjectDescription text={projectDescription} title={title} />}
    {linkedinDescription !== summary && <OriginalDescription text={linkedinDescription} title={title}/>}
    {href && <a className="entry-link" href={href}>{linkLabel}</a>}
  </article>;
}
function Section({ id, title, intro, children }: {
    id: string;
    title: string;
    intro: string;
    children: React.ReactNode;
}) {
    return <section id={id} aria-labelledby={`${id}-title`}>
    <h2 id={`${id}-title`}>{title}</h2><p className="section-intro">{intro}</p>{children}
  </section>;
}
export default function Home() {
    return <div className="shell" id="top">
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="masthead"><a className="monogram" href="#top" aria-label="Aiden Lim, back to top">al<span aria-hidden="true">✳</span></a><a className="contact" href={site.linkedin}>Let’s connect</a></header>
    <main id="main" tabIndex={-1}>
      <div className="hero">
        <p className="location">Student, developer, and team player in Hong Kong.</p>
        <h1>{site.name}<span aria-hidden="true">.</span></h1>
        <p className="headline">{profile.headline}</p>
        <p className="hero-intro">{profile.introduction}</p>
        <a className="explore" href="#about">Get to know me <span aria-hidden="true">↓</span></a>
      </div>
      <div className="featured" aria-label="Selected work">
        <a className="project-tile scheduling-tile" href="#scheduling">
          <div className="tile-art scheduling-art">
            <Image
              src="/images/sishk-scheduling-booking.png"
              alt="SISHK Scheduling consultation booking screen with teacher selection, a weekly timetable, and booking details"
              width={1231}
              height={913}
              sizes="(max-width: 700px) 100vw, 600px"
            />
          </div>
          <div className="tile-caption"><div><h2>SISHK Scheduling</h2><p>Building tools for everyday school life</p></div><span aria-hidden="true">↗</span></div>
        </a>
        <a className="project-tile timelit-tile" href="#timelit">
          <div className="tile-art timelit-art"><Image src="/images/timelit-logo.png" alt="Timelit" width={180} height={180}/></div>
          <div className="tile-caption"><div><h2>Timelit</h2><p>Exploring a more thoughtful way to plan</p></div><span aria-hidden="true">↗</span></div>
        </a>
      </div>
      <div className="reading-layout">
        <SectionNavigation />
        <div className="sections">
          <Section id="about" title="About" intro={profile.about}><OriginalDescription text={profile.linkedinDescription} title="About"/></Section>
          <Section id="experience" title="Experience" intro="I’ve worked across student leadership, software, startups, and sport. Each role has given me a different way to practise building things with other people.">
            {experience.map(group => <div className="organisation" id={group.id} key={group.organisation}><h3>{group.organisation}</h3><div className="roles">{group.entries.map(entry => <EntryRow key={entry.title} {...entry} nested/>)}</div></div>)}
          </Section>
          <Section id="certifications" title="Licenses & Certifications" intro="I studied linear algebra, calculus, and statistics to understand the mathematics behind the models I was learning to build.">
            <div className="credentials">{certificates.map(cert => <article className="credential" key={cert.credential}><h3>{cert.title}</h3><p className="meta">DeepLearning.AI · Issued Aug 2026</p><p className="credential-id">Credential ID {cert.credential}</p><a href={`https://www.coursera.org/account/accomplishments/${cert.kind}/${cert.credential}`}>View credential<span className="visually-hidden"> for {cert.title}</span></a></article>)}</div>
          </Section>
          <Section id="education" title="Education" intro="My studies bring together mathematics, computing, and economics. Outside the classroom, I’ve taken part in sport, school service, and student leadership.">{education.map(entry => <EntryRow key={entry.title} {...entry}/>)}</Section>
          <Section id="projects" title="Projects" intro="I use projects to turn what I’m learning into working software, from a school scheduling system and an AI productivity app to a simulated trading exchange.">
            <div className="project-references"><a href="#scheduling">SISHK Scheduling</a><a href="#timelit">Timelit</a></div>{projects.map(entry => <EntryRow key={entry.title} {...entry}/>)}
          </Section>
          <Section id="awards" title="Honors & Awards" intro="These awards reflect two parts of my life that I keep developing side by side, academic study and painting.">{awards.map(entry => <EntryRow key={entry.title} {...entry}/>)}</Section>
          <Section id="interests" title="Outside of Work" intro="Away from software, I spend time on the ice and with a paintbrush. Hockey gives me a team to compete with, while painting gives me room to explore my own ideas.">
            <div className="personal-gallery"><figure className="hockey-photo"><Image src="/images/hockey-celebration-portrait.jpg" alt="Aiden celebrating on the ice with his hockey team" width={720} height={960} sizes="(max-width: 700px) 90vw, 350px"/><figcaption>Ice hockey · Singapore Selects</figcaption></figure><figure><Image src="/images/painting-london-riot-of-blossoms.jpg" alt="Aiden’s painting for the London Youth Art Competition, on the theme A riot of blossoms" width={960} height={720} sizes="(max-width: 700px) 90vw, 350px"/><figcaption>A riot of blossoms · 2025</figcaption></figure><figure><Image src="/images/painting-peaceful-homeland.jpg" alt="Aiden’s painting on the theme Peaceful Homeland" width={960} height={720} sizes="(max-width: 700px) 90vw, 350px"/><figcaption>Peaceful Homeland · 2026</figcaption></figure></div>
          </Section>
        </div>
      </div>
    </main>
    <footer><p>Always learning.<br /><span>Let’s make something useful.</span></p><a href={site.linkedin}>Connect on LinkedIn</a><div className="footer-bottom"><span>Aiden Lim · Hong Kong</span><a href="#top">Back to top ↑</a></div></footer>
  </div>;
}
