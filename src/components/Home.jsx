import React from "react";
import "./Home.css";
import profilePic from "../assets/profile.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-glow"></div>

      <div className="container text-center">

        {/* Image Container */}
        <div className="image-wrapper">

          <div className="availability-badge">
            ● Available for new projects
          </div>

          <img
            src={profilePic}
            alt="Profile"
            className="hero-image"
          />

        </div>

        <motion.h1
          className="hero-heading"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        >
          Hi, I'm <span className="highlight">Faiza Sajjad</span>
        </motion.h1>

        <h2 className="hero-role">
          Frontend Developer
        </h2>

        <p className="hero-description">
          I build beautiful, functional web applications using
          React, Angular and modern technologies. Passionate
          about creating seamless digital experiences.
        </p>

        <div className="hero-buttons">
          <button href="#projects" className="primary-btn">
            Explore My Work ↓
          </button>

          <a href="/resume.pdf" download className="secondary-btn">
            Download Resume
          </a>

        </div>

      </div>
    </section >
  );
};

export default Home;