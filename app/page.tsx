import {
  profile,
  stats,
  experience,
  featured,
  projects,
  skills,
  education,
  interests,
} from "./data";
import { Header, Reveal, Icon, FeaturedMedia } from "./components";
import { asset } from "./asset";

export default function Home() {
  const year = 2026;

  return (
    <>
      <Header />
      <main id="top">
        {/* ---------- Hero ---------- */}
        <section className="hero">
          <div className="wrap">
            <Reveal>
              {profile.available && (
                <span className="badge">
                  <span className="dot" /> Available for new opportunities
                </span>
              )}
            </Reveal>
            <Reveal delay={80}>
              <h1 className="serif">
                {profile.firstName} <span className="accent">N&nbsp;J</span>
              </h1>
            </Reveal>
            <Reveal delay={150}>
              <p className="role">
                <strong>{profile.role}</strong> — crafting production web apps
                with React, Node &amp; Express.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <p className="lede">{profile.tagline}</p>
            </Reveal>
            <Reveal delay={300}>
              <div className="hero-cta">
                <a className="btn accent" href="#contact">
                  Let&apos;s work together <Icon name="arrow" />
                </a>
                <a
                  className="btn ghost"
                  href={asset(profile.resumeFile)}
                  download
                >
                  Download résumé <Icon name="download" />
                </a>
              </div>
            </Reveal>
            <Reveal delay={360}>
              <div className="hero-meta">
                <span>
                  <Icon name="pin" /> &nbsp;{profile.location}
                </span>
                <a href={`mailto:${profile.email}`}>
                  <Icon name="mail" /> {profile.email}
                </a>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  <Icon name="github" /> GitHub
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  <Icon name="linkedin" /> LinkedIn
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------- Stats ---------- */}
        <div className="stats">
          <div className="wrap">
            <Reveal>
              <div className="stats-grid">
                {stats.map((s) => (
                  <div className="stat" key={s.label}>
                    <div className="v serif">{s.value}</div>
                    <div className="l">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* ---------- About ---------- */}
        <section id="about">
          <div className="wrap">
            <div className="about-grid">
              <div>
                <Reveal>
                  <span className="eyebrow">About</span>
                </Reveal>
                <Reveal delay={80}>
                  <h2 className="section-title serif">
                    A developer who ships the whole thing.
                  </h2>
                </Reveal>
              </div>
              <div>
                <Reveal className="about-body" delay={120}>
                  <p>{profile.summary}</p>
                  <p>
                    Whether it&apos;s untangling a legacy codebase, designing a
                    clean RESTful API, or polishing the last pixel of an
                    interface — I like owning problems end to end and leaving
                    things better than I found them.
                  </p>
                </Reveal>
                <Reveal delay={200}>
                  <div className="about-card" style={{ marginTop: 26 }}>
                    <h4>Currently exploring</h4>
                    <div className="chips">
                      {interests.map((i) => (
                        <span className="chip" key={i}>
                          {i}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Experience ---------- */}
        <section id="experience">
          <div className="wrap">
            <Reveal>
              <span className="eyebrow">Experience</span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="section-title serif" style={{ marginBottom: 46 }}>
                Where I&apos;ve been building.
              </h2>
            </Reveal>
            {experience.map((job) => (
              <Reveal key={job.company} delay={120}>
                <div className="exp">
                  <div className="exp-head">
                    <h3>
                      {job.role} <span className="co">· {job.company}</span>
                    </h3>
                    <span className="exp-period">{job.period}</span>
                  </div>
                  <ul>
                    {job.points.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ---------- Projects ---------- */}
        <section id="work">
          <div className="wrap">
            <Reveal>
              <span className="eyebrow">Selected Work</span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="section-title serif" style={{ marginBottom: 40 }}>
                Things I&apos;ve designed &amp; built.
              </h2>
            </Reveal>

            {/* Featured — Loyaltri */}
            <Reveal delay={100}>
              <article className="featured">
                <div className="featured-media">
                  <FeaturedMedia
                    video={featured.media.video}
                    gallery={featured.media.gallery}
                  />
                </div>
                <div className="featured-body">
                  <span className="featured-flag">★ Flagship product</span>
                  <h3 className="serif">{featured.name}</h3>
                  <div className="featured-sub">
                    {featured.tagline} · {featured.context}
                  </div>
                  <div className="featured-meta">
                    {featured.role} &nbsp;·&nbsp; {featured.period}
                  </div>
                  <p className="featured-desc">{featured.description}</p>
                  <ul className="featured-list">
                    {featured.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                  {/* <div className="stack">
                    {featured.stack.map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div> */}
                  <a
                    className="btn accent featured-link"
                    href={featured.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit Loyaltri <Icon name="arrow" />
                  </a>
                </div>
              </article>
            </Reveal>

            <Reveal delay={140}>
              <h3 className="more-work serif">More projects</h3>
            </Reveal>

            <div className="proj-grid">
              {projects.map((p, idx) => (
                <Reveal key={p.name} delay={100 + idx * 80}>
                  <article className="proj">
                    <span className="num">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <h3>{p.name}</h3>
                    <div className="ptype">
                      {p.type} &nbsp;·&nbsp; {p.period}
                    </div>
                    <p className="pdesc">{p.description}</p>
                    <ul>
                      {p.points.map((pt, i) => (
                        <li key={i}>{pt}</li>
                      ))}
                    </ul>
                    <div className="stack">
                      {p.stack.map((s) => (
                        <span key={s}>{s}</span>
                      ))}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Skills ---------- */}
        <section id="skills">
          <div className="wrap">
            <Reveal>
              <span className="eyebrow">Toolkit</span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="section-title serif" style={{ marginBottom: 40 }}>
                The stack I reach for.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="skills-grid">
                {skills.map((s) => (
                  <div className="skill-cell" key={s.group}>
                    <h4>{s.group}</h4>
                    <ul>
                      {s.items.map((it) => (
                        <li key={it}>{it}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------- Education ---------- */}
        <section id="education" style={{ paddingTop: 40 }}>
          <div className="wrap">
            <Reveal>
              <span className="eyebrow">Education</span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="section-title serif" style={{ marginBottom: 30 }}>
                Foundations.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <div>
                {education.map((e) => (
                  <div className="edu-row" key={e.degree}>
                    <div>
                      <h3>{e.degree}</h3>
                      <div className="school">{e.school}</div>
                    </div>
                    <span className="eperiod">{e.period}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------- Contact ---------- */}
        <section id="contact" className="contact">
          <div className="wrap">
            <Reveal>
              <span className="eyebrow" style={{ justifyContent: "center" }}>
                Contact
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="serif" style={{ marginTop: 20 }}>
                Let&apos;s build something
                <br />
                <span className="accent">worth keeping.</span>
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <p>
                I&apos;m open to full-stack and frontend roles. Have a project
                or a position in mind? My inbox is always open.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="contact-cta">
                <a className="btn accent" href={`mailto:${profile.email}`}>
                  <Icon name="mail" /> {profile.email}
                </a>
                <a
                  className="btn ghost"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon name="linkedin" /> Connect on LinkedIn
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------- Footer ---------- */}
        <footer className="footer">
          <div className="wrap footer-inner">
            <span>
              © {year} {profile.name} · Built with Next.js
            </span>
            <div className="footer-links">
              <a href={`mailto:${profile.email}`}>Email</a>
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>Call</a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
