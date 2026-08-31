"use client";

import { useEffect, useRef, useState } from "react";
import { profile } from "./data";
import { asset } from "./asset";

/* ---------- Icons ---------- */
export function Icon({ name }: { name: string }) {
  const common = {
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "mail":
      return (
        <svg {...common}>
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m2 7 10 6 10-6" />
        </svg>
      );
    case "arrow":
      return (
        <svg {...common}>
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      );
    case "download":
      return (
        <svg {...common}>
          <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 21h16" />
        </svg>
      );
    case "github":
      return (
        <svg {...common}>
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-1-2.6c3-.4 6-1.5 6-6.5a5 5 0 0 0-1.4-3.5 4.6 4.6 0 0 0-.1-3.5s-1.2-.4-3.9 1.4a13.4 13.4 0 0 0-7 0C5.9 1.6 4.7 2 4.7 2a4.6 4.6 0 0 0-.1 3.5A5 5 0 0 0 3.2 9c0 5 3 6.1 6 6.5a3.4 3.4 0 0 0-1 2.6V22" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...common}>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    case "pin":
      return (
        <svg {...common}>
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
    default:
      return null;
  }
}

/* ---------- Sticky header ---------- */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header${scrolled ? " scrolled" : ""}`}>
      <div className="wrap header-inner">
        <a href="#top" className="brand">
          <span className="mono serif">{profile.monogram}</span>
          <span>{profile.name}</span>
        </a>
        <nav className="nav">
          <a className="navlink" href="#about">About</a>
          <a className="navlink" href="#experience">Experience</a>
          <a className="navlink" href="#work">Work</a>
          <a className="navlink" href="#skills">Skills</a>
          <a className="btn accent" href="#contact">
            Get in touch
          </a>
        </nav>
      </div>
    </header>
  );
}

/* ---------- Loyaltri dashboard mock (fallback when no real media) ---------- */
export function DashboardMock() {
  const nav = ["Dashboard", "Employees", "Attendance", "Payroll", "Leave", "Feed"];
  const stats = [
    { k: "Headcount", v: "5,024" },
    { k: "Present today", v: "94%" },
    { k: "On leave", v: "38" },
  ];
  const bars = [52, 68, 44, 80, 61, 73, 58];
  return (
    <div className="mock" aria-hidden="true">
      <aside className="mock-side">
        <div className="mock-logo">
          <span className="serif">L</span> Loyaltri
        </div>
        {nav.map((n, i) => (
          <div key={n} className={`mock-nav${i === 0 ? " on" : ""}`}>
            <span className="mock-ico" />
            {n}
          </div>
        ))}
      </aside>
      <div className="mock-main">
        <div className="mock-top">
          <div className="mock-search" />
          <div className="mock-avatar" />
        </div>
        <div className="mock-greet">Good morning, Aadhil 👋</div>
        <div className="mock-stats">
          {stats.map((s) => (
            <div className="mock-stat" key={s.k}>
              <span className="mk">{s.k}</span>
              <span className="mv serif">{s.v}</span>
            </div>
          ))}
        </div>
        <div className="mock-panel">
          <div className="mock-panel-head">
            <span>Attendance overview</span>
            <span className="mock-pill">This week</span>
          </div>
          <div className="mock-chart">
            {bars.map((h, i) => (
              <span key={i} style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
        <div className="mock-rows">
          {["Onboarding · Priya S.", "Payroll run · June", "Leave request · Arjun"].map(
            (r) => (
              <div className="mock-row" key={r}>
                <span className="mock-dot" />
                {r}
                <span className="mock-tag" />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

/* ---------- Featured media frame (real screenshots gallery / video / mock) ---------- */
export function FeaturedMedia({
  video,
  gallery = [],
}: {
  video?: string;
  gallery?: { src: string; label: string }[];
}) {
  const [active, setActive] = useState(0);
  const [broken, setBroken] = useState(false);
  const current = gallery[active];
  const showImage = !video && current && !broken;
  const showReal = Boolean(video || showImage);

  return (
    <div className="framewrap">
      <div className="frame">
        <div className="frame-bar">
          <span className="frame-dot" />
          <span className="frame-dot" />
          <span className="frame-dot" />
          <span className="frame-url">app.loyaltri.com</span>
        </div>
        <div className="frame-screen">
          {video ? (
            <video
              src={asset(video)}
              autoPlay
              muted
              loop
              playsInline
              className="frame-media"
            />
          ) : showImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={current.src}
              src={asset(current.src)}
              alt={`Loyaltri — ${current.label}`}
              className="frame-media"
              onError={() => setBroken(true)}
            />
          ) : (
            <DashboardMock />
          )}
        </div>
        {!showReal && (
          <span className="frame-note">
            Illustrative UI · add a screenshot in /public/loyaltri
          </span>
        )}
      </div>

      {!video && gallery.length > 1 && (
        <div className="frame-thumbs">
          {gallery.map((g, i) => (
            <button
              key={g.src}
              type="button"
              className={`frame-thumb${i === active ? " on" : ""}`}
              onClick={() => {
                setActive(i);
                setBroken(false);
              }}
              aria-label={`Show ${g.label}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset(g.src)} alt="" />
              <span>{g.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ---------- Scroll reveal ---------- */
export function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Component = Tag as any;
  return (
    <Component
      ref={ref}
      className={`reveal${shown ? " in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Component>
  );
}
