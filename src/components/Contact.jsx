import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaPaperPlane } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    project_title: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_u2v6dz5",
        "template_b9wolvf",
        {
          user_name: formData.user_name,
          user_email: formData.user_email,
          subject: formData.subject,
          project_title: formData.project_title,
          message: formData.message,
        },
        "ltRdr2Pgmx9KSSCe8"
      )
      .then(() => {
        alert("Message sent successfully!");

        setFormData({
          user_name: "",
          user_email: "",
          subject: "",
          project_title: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to send message.");
      });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-header">
        <span className="contact-label">
          LET'S WORK TOGETHER
        </span>

        <h2 className="section-title">
          Get In Touch
        </h2>

        <p className="section-subtitle">
          I'm always interested in hearing about new projects
          and opportunities. Feel free to reach out!
        </p>
      </div>

      <div className="contact-form-card">
        <h3>Discuss Your Project 🚀</h3>

        <form onSubmit={sendEmail}>
          <label>Your Name</label>
          <input
            type="text"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            placeholder="John Doe"
            required
          />

          <label>Your Email</label>
          <input
            type="email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
            placeholder="john@example.com"
            required
          />

          <label>Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Website Development Inquiry"
            required
          />

          <label>Project Title</label>
          <input
            type="text"
            name="project_title"
            value={formData.project_title}
            onChange={handleChange}
            placeholder="Web Development Project"
            required
          />

          <label>Project Details</label>
          <textarea
            rows="7"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your project..."
            required
          ></textarea>

          <button
            type="submit"
            className="send-btn"
          >
            <FaPaperPlane />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;