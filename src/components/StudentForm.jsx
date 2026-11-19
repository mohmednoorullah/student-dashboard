
import React, { useState, useEffect } from "react";
import "../styles/StudentForm.css";

function StudentForm({ onAddStudent, editingStudent, onUpdateStudent, onCancelEdit }) {
  const initialForm = {
    name: "",
    regNo: "",
    department: "",
    year: "",
    email: "",
    photo: "",
  };

  const [formData, setFormData] = useState(initialForm);
  const [error, setError] = useState("");

  useEffect(() => {
    if (editingStudent) {
      setFormData({
        name: editingStudent.name || "",
        regNo: editingStudent.regNo || "",
        department: editingStudent.department || "",
        year: editingStudent.year || "",
        email: editingStudent.email || "",
        photo: editingStudent.photo || "",
      });
    } else {
      setFormData(initialForm);
    }
    setError("");
  }, [editingStudent]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("Please select a valid image.");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      setError("Image size must be less than 2 MB.");
      return;
    }

    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData((prev) => ({
        ...prev,
        photo: reader.result,
      }));
      setError("");
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const { name, regNo, department, year, email } = formData;

    if (!name.trim() || !regNo.trim() || !department || !year || !email.trim()) {
      setError("Please fill in all required fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (editingStudent) {
      onUpdateStudent({
        ...editingStudent,
        ...formData,
      });
    } else {
      onAddStudent({
        id: Date.now(),
        ...formData,
      });
    }

    setFormData(initialForm);
    e.target.reset();
  };

  const handleCancel = () => {
    setFormData(initialForm);
    setError("");
    onCancelEdit?.();
  };

  return (
    <section className="student-form-section" id="student-form">
      <div className="form-heading">
        <h2>{editingStudent ? "Edit Student" : "Register New Student"}</h2>
        <p>Enter student information to generate an ID card.</p>
      </div>

      <form className="student-form" onSubmit={handleSubmit}>
        {error && <div className="form-error">{error}</div>}

        <div className="form-grid">
          <div className="form-group">
            <label>Student Name *</label>
            <input
              type="text"
              name="name"
              placeholder="Enter student name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Register Number *</label>
            <input
              type="text"
              name="regNo"
              placeholder="Enter register number"
              value={formData.regNo}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Department *</label>
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
            >
              <option value="">Select Department</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Information Technology">Information Technology</option>
              <option value="Electronics">Electronics</option>
              <option value="Mechanical">Mechanical</option>
              <option value="Civil">Civil</option>
              <option value="Electrical">Electrical</option>
            </select>
          </div>

          <div className="form-group">
            <label>Academic Year *</label>
            <select
              name="year"
              value={formData.year}
              onChange={handleChange}
              required
            >
              <option value="">Select Academic Year</option>
              <option value="2024-2028">2024-2028</option>
              <option value="2025-2029">2025-2029</option>
              <option value="2026-2030">2026-2030</option>
            </select>
          </div>

          <div className="form-group full-width">
            <label>Email Address *</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group full-width">
            <label>Student Photo</label>
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
            />
            <small>Upload JPG, PNG or another image format (maximum 2 MB).</small>
          </div>
        </div>

        {formData.photo && (
          <div className="photo-preview">
            <img src={formData.photo} alt="Student preview" />
            <span>Photo Preview</span>
          </div>
        )}

        <div className="form-buttons">
          <button type="submit" className="submit-btn">
            {editingStudent ? "Update Student" : "Register Student"}
          </button>

          <button
            type="button"
            className="reset-btn"
            onClick={handleCancel}
          >
            {editingStudent ? "Cancel" : "Clear Form"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default StudentForm;
