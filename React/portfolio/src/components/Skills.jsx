import React from "react";
import { motion } from "framer-motion";

const items = [
  { label: "HTML / CSS", value: 90 },
  { label: "JavaScript (ES6+)", value: 85 },
  { label: "React.js", value: 85 },
  { label: "Node.js / Express", value: 80 },
  { label: "MongoDB", value: 75 },
  { label: "Git & GitHub", value: 80 },
  { label: "UI/UX (Figma)", value: 70 },
];

export default function Skills() {
  return (
    <div className="skills container">
      <h2>Skills</h2>
      <div className="skills__grid">
        {items.map((s, i) => (
          <motion.div
            key={s.label}
            className="skill"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: i * 0.05 }}
          >
            <div className="skill__top">
              <span>{s.label}</span>
              <span>{s.value}%</span>
            </div>
            <div className="skill__bar">
              <motion.span
                className="skill__fill"
                initial={{ width: 0 }}
                whileInView={{ width: `${s.value}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
