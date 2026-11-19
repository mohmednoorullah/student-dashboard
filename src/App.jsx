
import React, { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Statistics from "./components/Statistics";
import StudentForm from "./components/StudentForm";
import SearchBar from "./components/SearchBar";
import StudentCard from "./components/StudentCard";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  // Load student records from LocalStorage
  const [students, setStudents] = useState(() => {
    try {
      const savedStudents = localStorage.getItem("students");
      return savedStudents ? JSON.parse(savedStudents) : [];
    } catch {
      return [];
    }
  });

  const [search, setSearch] = useState("");
  const [editingStudent, setEditingStudent] = useState(null);

  // Save student records whenever they change
  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  // Add new student
  const handleAddStudent = (student) => {
    const exists = students.some(
      (s) =>
        s.regNo?.toLowerCase() === student.regNo?.toLowerCase()
    );

    if (exists) {
      alert("Register number already exists!");
      return;
    }

    setStudents((prev) => [...prev, student]);
    alert("Student registered successfully!");
  };

  // Edit student
  const handleEdit = (student) => {
    setEditingStudent(student);

    document.getElementById("student-form")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Update student
  const handleUpdateStudent = (updatedStudent) => {
    const exists = students.some(
      (s) =>
        s.id !== updatedStudent.id &&
        s.regNo?.toLowerCase() === updatedStudent.regNo?.toLowerCase()
    );

    if (exists) {
      alert("Another student already has this register number!");
      return;
    }

    setStudents((prev) =>
      prev.map((student) =>
        student.id === updatedStudent.id
          ? updatedStudent
          : student
      )
    );

    setEditingStudent(null);
    alert("Student updated successfully!");
  };

  // Delete student
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (confirmDelete) {
      setStudents((prev) =>
        prev.filter((student) => student.id !== id)
      );

      if (editingStudent?.id === id) {
        setEditingStudent(null);
      }

      alert("Student deleted successfully!");
    }
  };

  // Cancel editing
  const handleCancelEdit = () => {
    setEditingStudent(null);
  };

  // Search students
  const filteredStudents = students.filter((student) => {
    const searchText = search.toLowerCase();

    return (
      (student.name || "").toLowerCase().includes(searchText) ||
      (student.regNo || "").toLowerCase().includes(searchText) ||
      (student.department || "").toLowerCase().includes(searchText)
    );
  });

  return (
    <div className="app">

      {/* Navigation Bar */}
      <Navbar />

      <main className="main-content">

        {/* Dashboard */}
        <section id="dashboard">
          <Dashboard
            students={students}
            onAddStudent={() => {
              document.getElementById("student-form")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          />
        </section>

        {/* Statistics */}
        <Statistics students={students} />

        {/* Student Registration Form */}
        <StudentForm
          onAddStudent={handleAddStudent}
          editingStudent={editingStudent}
          onUpdateStudent={handleUpdateStudent}
          onCancelEdit={handleCancelEdit}
        />

        {/* Student Search and Records */}
        <section id="students" className="students-section">

          <SearchBar
            search={search}
            setSearch={setSearch}
            students={filteredStudents}
          />

          {/* Student Cards */}
          {filteredStudents.length > 0 ? (
            <div className="student-list">
              {filteredStudents.map((student) => (
                <StudentCard
                  key={student.id}
                  student={student}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <h3>
                {search ? "No Students Found" : "No Students Registered"}
              </h3>

              <p>
                {search
                  ? "Try searching with another name or register number."
                  : "Register your first student to generate an ID card."}
              </p>
            </div>
          )}

        </section>

      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;

