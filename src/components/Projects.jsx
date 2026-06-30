import eventhubImg from "../assets/eventhub.png";
import portfolioImg from "../assets/portfolio.png";
import landingPageImg from "../assets/landingpage.png";
import "./Projects.css";

const projectsData = [
  {
    title: "EventHub Management System",
    category: "Final Year Project",
    year: "2026",
    image: eventhubImg,
    description:
      "Event management platform for event discovery, booking, and management. Developed responsive frontend interfaces using React and Bootstrap.",
    technologies: [
      "React",
      "Bootstrap",
      "JavaScript",
      "CSS3",
      "REST APIs",
    ],
    link: "https://eventhub.com.pk",
  },

  {
    title: "Personal Portfolio Website",
    category: "Frontend Project",
    year: "2026",
    image: portfolioImg,
    description:
      "Modern portfolio website showcasing skills, projects, education, and experience with responsive design and smooth animations.",
    technologies: [
      "React",
      "Framer Motion",
      "CSS3",
      "JavaScript",
    ],
    link: "https://my-portfolio-psi-flame-81.vercel.app/",
  },

];
export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">Featured Projects</h2>

      <p className="section-subtitle">
        Showcasing projects that reflect my frontend development
        skills and passion for creating modern web applications.
      </p>

      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <span className="project-badge">
              {project.category}
            </span>

            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <div className="project-dot"></div>

            <h3>{project.title}</h3>

            <h4>{project.year}</h4>

            <p>{project.description}</p>

            <div className="project-tags">
              {project.technologies.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>

            <a
              href={project.link}
              className="project-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              View ↗
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}