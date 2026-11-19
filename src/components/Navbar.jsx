
import React, { useState } from "react";
import "../styles/StudentForm.css";

function Navbar({ onAddStudent }) {

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("dashboard");

  const navLinks = [
    { name: "Dashboard", id: "dashboard", icon: "🏠" },
    { name: "Students", id: "students", icon: "🎓" },
    { name: "Add Student", id: "student-form", icon: "➕" }
  ];

  const handleNavigation = (id) => {

    setActiveLink(id);
    setMenuOpen(false);

    // Handle Add Student action
    if (id === "student-form" && onAddStudent) {
      onAddStudent();
    }

    // Smooth scrolling
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="navbar-brand">

        <div className="logo-icon">
          🎓
        </div>

        <div className="brand-info">
          <h2>StudentHub</h2>
          <span>Student Management System</span>
        </div>

      </div>

      {/* Navigation Links */}
      <div className={`navbar-links ${menuOpen ? "open" : ""}`}>

        {navLinks.map((link) => (

          <button
            type="button"
            key={link.id}
            className={
              activeLink === link.id
                ? "nav-link active"
                : "nav-link"
            }
            onClick={() => handleNavigation(link.id)}
          >

            <span>{link.icon}</span>
            {link.name}

          </button>

        ))}

      </div>

      {/* Right Side */}
      <div className="navbar-right">

        <span className="admin-badge">
          👤 Administrator
        </span>

      </div>

      {/* Mobile Menu Button */}
      <button
        type="button"
        className="menu-toggle"
        onClick={() => setMenuOpen((previous) => !previous)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >

        {menuOpen ? "✕" : "☰"}

      </button>

    </nav>
  );
}

export default Navbar;
