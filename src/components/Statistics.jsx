
import React from "react";
import "../styles/Statistics.css";

function Statistics({ students = [] }) {
  const totalStudents = students.length;

  const totalDepartments = new Set(
    students.map((student) => student.department).filter(Boolean)
  ).size;

  const totalAcademicYears = new Set(
    students.map((student) => student.year).filter(Boolean)
  ).size;

  const totalIDCards = students.filter(
    (student) => student.regNo
  ).length;

  const statistics = [
    {
      title: "Total Students",
      value: totalStudents,
      icon: "👨‍🎓",
      color: "blue",
    },
    {
      title: "Departments",
      value: totalDepartments,
      icon: "🏢",
      color: "purple",
    },
    {
      title: "Academic Years",
      value: totalAcademicYears,
      icon: "📅",
      color: "orange",
    },
    {
      title: "ID Cards Generated",
      value: totalIDCards,
      icon: "🪪",
      color: "green",
    },
  ];

  return (
    <section className="statistics-section">
      <div className="statistics-heading">
        <h2>Statistics Overview</h2>
        <p>Quick summary of student card records</p>
      </div>

      <div className="statistics-grid">
        {statistics.map((item, index) => (
          <div className="statistics-card" key={index}>
            <div className={`statistics-icon ${item.color}`}>
              {item.icon}
            </div>

            <div className="statistics-info">
              <h3>{item.title}</h3>
              <p>{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Statistics;
