
import React from "react";
import "../styles/StudentForm.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-brand">
          <h2>🎓 StudentHub</h2>
          <p>
            Student Card Management System
          </p>
          <span>
            Simplifying student identity management
            through reusable components.
          </span>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="#dashboard">Dashboard</a>
          <a href="#students">Students</a>
          <a href="#student-form">Add Student</a>
        </div>

        {/* Project Information */}
        <div className="footer-info">
          <h3>Project Information</h3>
          <p>Developed using React.js</p>
          <p>HTML, CSS & JavaScript</p>
          <p>Powered by Vite</p>
        </div>

      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>
          © {currentYear} StudentHub. All Rights Reserved.
        </p>

        <p>
          Student Card Management System | Version 1.0
        </p>
      </div>

    </footer>
  );
}

export default Footer;
