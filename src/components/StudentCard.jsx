import React from "react";
import "../styles/StudentCard.css";

function StudentCard({ student, onEdit, onDelete }) {
  if (!student) return null;

  const photo =
    student.photo ||
    "https://via.placeholder.com/150?text=Student";

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="student-card-wrapper">
      <div className="student-card">
        <div className="card-header">
          <div className="college-logo">🎓</div>
          <div>
            <h3>STUDENT ID CARD</h3>
            <p>STUDENTHUB COLLEGE</p>
          </div>
        </div>

        <div className="card-body">
          <img
            src={photo}
            alt={student.name || "Student"}
            className="student-photo"
          />

          <div className="student-details">
            <h2>{student.name || "Student Name"}</h2>

            <p>
              <strong>Register No:</strong>{" "}
              {student.regNo || "N/A"}
            </p>

            <p>
              <strong>Department:</strong>{" "}
              {student.department || "N/A"}
            </p>

            <p>
              <strong>Academic Year:</strong>{" "}
              {student.year || "N/A"}
            </p>

            <p>
              <strong>Email:</strong>{" "}
              {student.email || "N/A"}
            </p>
          </div>
        </div>

        <div className="card-footer">
          <span>Valid Student Identity Card</span>
          <span>STUDENTHUB</span>
        </div>
      </div>

      <div className="student-card-actions">
        <button
          className="print-btn"
          onClick={handlePrint}
          type="button"
        >
          🖨 Print
        </button>

        {onEdit && (
          <button
            className="edit-btn"
            onClick={() => onEdit(student)}
            type="button"
          >
            ✏ Edit
          </button>
        )}

        {onDelete && (
          <button
            className="delete-btn"
            onClick={() => onDelete(student.id)}
            type="button"
          >
            🗑 Delete
          </button>
        )}
      </div>
    </div>
  );
}

export default StudentCard;
