import "./Education.css";

const educationData = [
    {
        degree: "BS Computer Science",
        institute: "University of Gujrat",
        location: "Gujrat,Punjab, Pakistan",
        period: "2022 – 2026",
        description:
            "Currently pursuing a Bachelor's degree in Computer Science with a strong focus on , web technologies, data structures, algorithms, database systems, and Web Development Techniques.",
        skills: [
            "Web Development",
            "Data Structures",
            "Algorithms",
            "Database Systems",
        ],
    },
    {
        degree: "Intermediate (ICS)",
        institute: "National College of Sciences Lalamusa",
        location: "LaLamusa, Punjab, Pakistan",
        period: "2018 – 2020",
        description:
            "Completed Intermediate education with a strong foundation in mathematics, analytical thinking, and scientific reasoning. Developed problem-solving skills and academic discipline that prepared me for higher studies in Computer Science.",
        skills: [
            "computer Science Fundamentals",
            "Analytical Thinking",
            "Problem Solving",
            "Scientific Reasoning",
            "Fast Learner",
            "Batch Leader",
        ],
    },
];

export default function Education() {
    return (
        <section className="education-section" id="education">
            <div className="container">
                <h2 className="section-title">Academic Background</h2>

                <p className="section-subtitle">
                    Combining academic knowledge with hands-on experience to create
                    impactful and user-centered digital solutions.
                </p>


                <div className="education-timeline">
                    {educationData.map((edu, index) => (
                        <div className="education-card" key={index}>
                            <div className="education-content">
                                <div>
                                    <h3>{edu.degree}</h3>
                                    <h4>{edu.institute}</h4>
                                    <p className="location">{edu.location}</p>
                                </div>

                                <div className="timeline-dot"></div>

                                <div className="year-badge">{edu.period}</div>
                            </div>

                            <p className="education-description">
                                {edu.description}
                            </p>

                            <div className="skill-tags">
                                {edu.skills.map((skill, i) => (
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
    );
}