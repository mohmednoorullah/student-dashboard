# Student Card Management System

## Project Overview

The Student Card Management System is a web-based application developed using React.js, HTML, CSS, and JavaScript. It helps administrators manage student information and generate digital student identity cards.

The application provides a simple and user-friendly interface to register students, store their details, search student records, update information, delete records, and print student ID cards.

## Objectives

- To simplify student registration.
- To generate digital student identity cards.
- To reduce manual work in student ID card management.
- To provide reusable React components.
- To manage student information efficiently.
- To provide a responsive and professional user interface.

## Technologies Used

- **Frontend:** React.js
- **Structure:** HTML
- **Styling:** CSS
- **Programming Language:** JavaScript
- **Build Tool:** Vite
- **Storage:** Browser LocalStorage
- **Development Environment:** Visual Studio Code

## Features

1. Student Registration
2. Digital Student ID Card Generation
3. Student Photo Upload
4. Search Student Records
5. Edit Student Details
6. Delete Student Records
7. Print Student ID Cards
8. Dashboard Statistics
9. Responsive User Interface
10. Reusable React Components

## Reusable Components

| Component | Description |
|---|---|
| Navbar | Displays application navigation and title |
| Dashboard | Displays student statistics |
| StudentForm | Collects student information |
| StudentCard | Displays individual student ID cards |
| App | Manages application functionality |

## Student Information

The application collects the following details:

- Student Name
- Register Number
- Department
- Email Address
- Academic Year
- Student Photograph

## Installation and Setup

### Step 1: Install Node.js

Download and install Node.js from:

https://nodejs.org/

### Step 2: Create React Project

```bash
npm create vite@latest student-card-system -- --template react
```

### Step 3: Navigate to Project Folder

```bash
cd student-card-system
```

### Step 4: Install Dependencies

```bash
npm install
```

### Step 5: Run the Application

```bash
npm run dev
```

Open the local development URL displayed in the terminal.

## How to Use

1. Open the Student Card Management System.
2. Enter student details in the registration form.
3. Upload the student's photograph.
4. Click Generate Student Card.
5. View the generated student ID card.
6. Search students using their name or register number.
7. Edit or delete student records when required.
8. Use the Print button to print an ID card.

## Data Storage

Student information is stored in the browser's LocalStorage. Data remains available in the same browser until it is cleared.

## Future Enhancements

- Admin Login and Authentication
- Database Integration
- QR Code Generation
- PDF Download
- Student Attendance Management
- Email Notifications
- Student Verification System

## Conclusion

The Student Card Management System provides a simple and efficient solution for managing student identity cards. Reusable React components make the application easier to maintain, update, and expand.

## Author

Student Card Management System Project

## License

This project is developed for educational purposes.