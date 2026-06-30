import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaPaintBrush,
  FaGlobe,
  FaCode,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiRedux,
  SiFirebase,
  SiVercel,
  SiPostman,
} from "react-icons/si";


import "./Skills.css";

const skills = [
  // Frontend
  { name: "React", icon: <FaReact />, category: "Frontend" },
  { name: "Angular", icon: <SiNextdotjs />, category: "Frontend" },
  { name: "JavaScript", icon: <SiJavascript />, category: "Frontend" },
  { name: "HTML5", icon: <FaHtml5 />, category: "Frontend" },
  { name: "CSS3", icon: <FaCss3Alt />, category: "Frontend" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, category: "Frontend" },
  { name: "Bootstrap", icon: <SiBootstrap />, category: "Frontend" },
  { name: "WordPress", icon: <FaGlobe />, category: "Frontend" },

  // Tools
  { name: "Gitbash", icon: <FaGitAlt />, category: "Tools" },
  { name: "GitHub", icon: <FaGithub />, category: "Tools" },
  { name: "Firebase", icon: <SiFirebase />, category: "Tools" },
  { name: "Postman", icon: <SiPostman />, category: "Tools" },
  { name: "Vercel", icon: <SiVercel />, category: "Tools" },
  {name: "VsCode",icon: <FaCode />,category: "Tools"},

  // Design
  { name: "Figma", icon: <FaFigma />, category: "Design" },
  { name: "Responsive Design", icon: "📱", category: "Design" },
  { name: "UI/UX", icon: "🎨", category: "Design" },
  { name: "Canva", icon: <FaPaintBrush />, category: "Design" },

  // Soft Skills
  { name: "Problem Solving", icon: "💡", category: "Soft Skills" },
  { name: "Communication", icon: "💬", category: "Soft Skills" },
  { name: "Teamwork", icon: "🤝", category: "Soft Skills" },
  { name: "Leadership", icon: "👑", category: "Soft Skills" },
];

const categories = [
  "All",
  "Frontend",
  "Tools",
  "Design",
  "Soft Skills",
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter(
        (skill) => skill.category === activeCategory
      );

  return (
    <section className="skills-section" id="skills">
      <p className="skills-subtitle">MY SKILLS</p>

      <h2 className="skills-title">
        Frontend Development Arsenal
      </h2>

      <p className="skills-description">
        Specialized in building modern, responsive,
        and interactive web applications using
        React and contemporary frontend technologies.
      </p>

      <div className="skills-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={
              activeCategory === category
                ? "filter-btn active"
                : "filter-btn"
            }
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="skills-container">
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="skill-card"
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.4,
              delay: index * 0.05,
            }}
            viewport={{ once: true }}
          >
            <span className="skill-icon">
              {skill.icon}
            </span>

            <span>{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}