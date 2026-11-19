
import React from "react";
import "../styles/StudentForm.css";

function Dashboard({ students = [], onAddStudent }) {

  // Safely handle student data
  const studentList = Array.isArray(students)
    ? students.filter(Boolean)
    : [];

  // Calculate total students
  const totalStudents = studentList.length;

  // Calculate total departments
  const totalDepartments = new Set(
    studentList
      .map((student) => student.department)
      .filter(Boolean)
  ).size;

  // Calculate academic years
  const academicYears = new Set(
    studentList
      .map((student) => student.year)
      .filter(Boolean)
  ).size;

  // Get recent students
  const recentStudents = [...studentList]
    .slice(-5)
    .reverse();

  // Department statistics
  const departmentStats = studentList.reduce((acc, student) => {
    const department = student.department || "Not Specified";

    acc[department] = (acc[department] || 0) + 1;

    return acc;
  }, {});

  return (
    <div className="dashboard">

      {/* Dashboard Heading */}
      <div className="dashboard-header">
        <div>
          <h1>Dashboard</h1>
          <p>Welcome to Student Card Management System</p>
        </div>

        <button
          type="button"
          className="add-student-btn"
          onClick={() => onAddStudent?.()}
        >
          + Add Student
        </button>
      </div>

      {/* Statistics Cards */}
      <div className="stats-container">

        <div className="stat-card blue">
          <div className="stat-icon">🎓</div>
          <div>
            <h3>Total Students</h3>
            <h2>{totalStudents}</h2>
            <p>Registered students</p>
          </div>
        </div>

        <div className="stat-card purple">
          <div className="stat-icon">🏢</div>
          <div>
            <h3>Departments</h3>
            <h2>{totalDepartments}</h2>
            <p>Available departments</p>
          </div>
        </div>

        <div className="stat-card green">
          <div className="stat-icon">📚</div>
          <div>
            <h3>Academic Years</h3>
            <h2>{academicYears}</h2>
            <p>Active academic years</p>
          </div>
        </div>

        <div className="stat-card orange">
          <div className="stat-icon">🪪</div>
          <div>
            <h3>ID Cards</h3>
            <h2>{totalStudents}</h2>
            <p>Student cards created</p>
          </div>
        </div>

      </div>

      {/* Dashboard Content */}
      <div className="dashboard-content">

        {/* Recent Students */}
        <div className="dashboard-box">

          <div className="box-header">
            <h2>Recent Students</h2>
            <span>Latest registrations</span>
          </div>

          {recentStudents.length > 0 ? (

            <div className="student-table-wrapper">

              <table className="student-table">

                <thead>
                  <tr>
                    <th>Student Name</th>
                    <th>Register No</th>
                    <th>Department</th>
                    <th>Academic Year</th>
                  </tr>
                </thead>

                <tbody>
                  {recentStudents.map((student, index) => (

                    <tr key={student.id ?? student.regNo ?? index}>

                      <td>
                        {student.name || "Unknown Student"}
                      </td>

                      <td>
                        {student.regNo || student.registerNo || student.rollNo || "N/A"}
                      </td>

                      <td>
                        {student.department || "Not Specified"}
                      </td>

                      <td>
                        {student.year || "N/A"}
                      </td>

                    </tr>

                  ))}
                </tbody>

              </table>

            </div>

          ) : (

            <div className="empty-dashboard">
              <span>🎓</span>
              <h3>No Students Registered</h3>
              <p>Add students to view their records here.</p>
            </div>

          )}

        </div>

        {/* Department Overview */}
        <div className="dashboard-box department-box">

          <div className="box-header">
            <h2>Department Overview</h2>
            <span>Student distribution</span>
          </div>

          {Object.keys(departmentStats).length > 0 ? (

            Object.entries(departmentStats).map(
              ([department, count]) => (

                <div className="department-item" key={department}>

                  <div className="department-info">
                    <span>{department}</span>
                    <strong>{count}</strong>
                  </div>

                  <div className="progress-bg">

                    <div
                      className="progress-fill"
                      style={{
                        width: `${(count / totalStudents) * 100}%`
                      }}
                    />

                  </div>

                </div>

              )
            )

          ) : (

            <p className="empty-text">
              No department data available.
            </p>

          )}

        </div>

      </div>

    </div>
  );
}

export default Dashboard;
