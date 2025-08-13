import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

const allProjects = [
  {
    title: "Capra-Nack Website",
    tag: "Web",
    desc: "Company site for Digital Solutions — clean, fast, responsive.",
    link: "https://github.com/",
  },
  {
    title: "EHIS Registration",
    tag: "Web App",
    desc: "Online medical check-up registration for urban & rural.",
    link: "https://github.com/",
  },
  {
    title: "Task Manager",
    tag: "App",
    desc: "Productivity app with Redux and local storage.",
    link: "https://github.com/",
  },
  {
    title: "Portfolio v2",
    tag: "Web",
    desc: "Apple-style animations, parallax, and smooth UX.",
    link: "https://github.com/",
  },
];

const tags = ["All", "Web", "Web App", "App"];

export default function Projects() {
  const [active, setActive] = useState("All");
  const filtered = useMemo(() => {
    if (active === "All") return allProjects;
    return allProjects.filter(p => p.tag === active);
  }, [active]);

  return (
    <div className="projects container">
      <h2>Projects</h2>

      <div className="tabs">
        {tags.map(t => (
          <button
            key={t}
            className={`tab ${t === active ? "is-active" : ""}`}
            onClick={() => setActive(t)}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="cards">
        {filtered.map((p, i) => (
          <motion.a
            href={p.link}
            key={p.title}
            className="card"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.08 }}
          >
            <div className="card__top">
              <div className="badge">{p.tag}</div>
            </div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <span className="card__link">View →</span>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
