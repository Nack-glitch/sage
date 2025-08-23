export default function Skills() {
  const skills = ["React", "Node.js", "React Native", "JavaScript", "HTML & CSS"];
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill) => (
          <div className="skill-card" key={skill}>
            <h3>{skill}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
