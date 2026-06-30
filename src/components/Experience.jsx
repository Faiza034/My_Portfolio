import "./Experience.css";

const experienceData = [
    {
        role: "Frontend Developer Intern",
        company: "Digibits Technologies",
        location: "LaLamusa, Punjab, Pakistan",
        period: "Sep 2025 – Dec 2025",
        description: [
            "Developed responsive user interfaces using React.js.",
            "Built reusable UI components and modern layouts.",
            "Collaborated with developers on project features.",
            "Improved website performance and user experience."
        ],
        skills: [
            "Angular",
            "JavaScript",
            "HTML5",
            "CSS3",
            "Bootstrap",
            "GitHub",
            "Rest APIs",
            "WordPress",
        ],
    },
    {
        role: "WordPress Web Development Trainee",
        company: "Learning With Earning",
        location: "Punjab,Pakistan",
        period: "Apr 2023 – Jun 2023",
        description: [
            "Learned WordPress development fundamentals.",
            "Customized themes and website layouts.",
            "Configured plugins and site features.",
            "Built responsive and user-friendly pages.",
            "Managed website content and media."
],

        skills: [
            "WordPress",
            "Elementor",
            "Website Design",
            "Theme Customization",
            "Plugins",
            "Blogging",
            "news webiste",
        ],
    },
];


export default function Experience() {
    return (<section className="experience-section" id="experience"> <div className="container"> <h2 className="section-title">Professional Experience</h2>
        <p className="section-subtitle">
            Applying technical knowledge in real-world environments and
            gaining hands-on experience through modern frontend development.
        </p>

        <div className="experience-timeline">
            {experienceData.map((exp, index) => (
                <div className="experience-card" key={index}>
                    <div className="experience-content">
                        <div>
                            <h3>{exp.role}</h3>
                            <h4>{exp.company}</h4>
                            <p className="location">{exp.location}</p>
                        </div>

                        <div className="timeline-dot"></div>

                        <div className="year-badge">
                            {exp.period}
                        </div>
                    </div>

                    <ul className="experience-list">
                        {exp.description.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>

                    <div className="skill-tags">
                        {exp.skills.map((skill, i) => (
                            <span key={i} className="tag">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
    </section>
    )
}
