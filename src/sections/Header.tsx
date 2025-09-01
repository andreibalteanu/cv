"use client";
import { useState } from "react";

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const Header = () => {
  const [active, setActive] = useState("home");

  return (
    <div className="fixed top-3 left-0 right-0 flex justify-center items-center z-50">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {SECTIONS.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={() => setActive(id)}
            className={`nav-item ${active === id ? "nav-item-active" : ""}`}
          >
            {label}
          </a>
        ))}
      </nav>
    </div>
  );
};
