"use client";

import { useEffect, useState } from "react";

const sections = [
  ["about", "About"],
  ["experience", "Experience"],
  ["certifications", "Licenses & Certifications"],
  ["education", "Education"],
  ["projects", "Projects"],
  ["awards", "Honors & Awards"],
  ["interests", "Outside of Work"],
] as const;

export default function SectionNavigation() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const elements = sections.map(([id]) => document.getElementById(id));
    let frame = 0;

    function updateActiveSection() {
      frame = 0;
      const readingLine = Math.min(window.innerHeight * 0.25, 160);
      let active: string | null = null;
      for (const element of elements) {
        if (element && element.getBoundingClientRect().top <= readingLine) {
          active = element.id;
        }
      }
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
        active = sections[sections.length - 1][0];
      }
      setActiveSection(active);
    }

    function scheduleUpdate() {
      if (!frame) frame = window.requestAnimationFrame(updateActiveSection);
    }

    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    const observer = new ResizeObserver(scheduleUpdate);
    const content = document.querySelector(".sections");
    if (content) observer.observe(content);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      observer.disconnect();
      window.cancelAnimationFrame(frame);
    };
  }, []);

  const links = (
    <ul>
      {sections.map(([id, label]) => (
        <li key={id}>
          <a href={`#${id}`} aria-current={activeSection === id ? "location" : undefined}>
            {label}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <nav className="contents desktop-index" aria-label="On this page">
        <p>On this page</p>
        {links}
      </nav>
      <nav className="mobile-index" aria-label="On this page">
        <details>
          <summary>On this page</summary>
          {links}
        </details>
      </nav>
    </>
  );
}
