# Design Document

## 1. Project Title

Student Card Management System

## 2. Design Overview

The application follows a modern professional design approach using a clean layout, blue and white color combinations, simple navigation, and responsive student ID cards.

The design focuses on usability, readability, and easy student information management.

## 3. Design Goals

- Create a professional dashboard.
- Provide simple student registration.
- Display attractive digital student ID cards.
- Maintain a consistent design.
- Support desktop and mobile devices.
- Use reusable UI components.

## 4. Color Palette

| Color | Hex Code | Usage |
|---|---|---|
| Dark Blue | #172554 | Navigation bar and card header |
| Primary Blue | #2563EB | Buttons and highlights |
| Light Blue | #DBEAFE | Card borders |
| White | #FFFFFF | Cards and forms |
| Background Gray | #F1F5F9 | Main background |
| Text Dark | #1E293B | Main text |
| Secondary Gray | #64748B | Supporting text |
| Red | #DC2626 | Delete button |

## 5. Typography

The application uses Arial as its primary font.

- Main Heading: 30px
- Section Heading: 21px
- Student Name: 20px
- Body Text: 14px
- Student Details: 12px

## 6. Layout Design

### A. Navigation Bar

The navigation bar is placed at the top of the application.

Elements:
- StudentHub Logo
- Application Title
- Dark Blue Background

### B. Dashboard

The dashboard displays important student statistics.

Dashboard Components:
- Total Students
- Total Departments

Each statistic is displayed inside a white card with a blue accent border.

### C. Student Registration Form

The registration form allows administrators to enter student details.

Input Fields:
- Student Name
- Register Number
- Department
- Email Address
- Academic Year
- Upload Photograph

The form includes a Generate Student Card button.

### D. Student ID Card

Each student card contains:

- Institution or Application Header
- Academic Year
- Student Photograph
- Student Name
- Department
- Register Number
- Email Address
- Edit Button
- Delete Button
- Print Button

### E. Search Section

A search bar allows administrators to find student cards using student names or register numbers.

## 7. Reusable Component Design

The application uses reusable React components.

| Component | Responsibility |
|---|---|
| Navbar | Navigation and branding |
| Dashboard | Student statistics |
| StudentForm | Student registration |
| StudentCard | Student ID card display |
| App | Application state and data management |

Each component has a specific responsibility, making the application modular and maintainable.

## 8. Responsive Design

The application supports different screen sizes.

### Desktop
- Two-column layout.
- Registration form on the left.
- Student cards on the right.

### Tablet
- Flexible content layout.
- Student cards adjust to available width.

### Mobile
- Single-column layout.
- Stacked dashboard cards.
- Full-width registration form.
- Responsive student card grid.

## 9. User Interaction Design

| Action | System Response |
|---|---|
| Add Student | Generates a student card |
| Search Student | Displays matching records |
| Edit Student | Opens existing details in the form |
| Delete Student | Requests confirmation |
| Print Student | Opens browser print dialog |
| Refresh Page | Loads saved student records |

## 10. Data Persistence Design

The application uses LocalStorage to store student information.

Storage Key:

`students`

Student Data Structure:

```json
{
  "id": 1731900000000,
  "name": "Mohamed Noorullah",
  "regNo": "311824201033",
  "department": "Computer Science",
  "email": "student@gmail.com",
  "year": "2026-2027",
  "photo": ""
}
```

## 11. Component Architecture

The application follows a component-based architecture.

```text
App
│
├── Navbar
│
├── Dashboard
│
├── StudentForm
│
└── StudentCard
    │
    ├── Student Details
    ├── Edit Action
    ├── Delete Action
    └── Print Action
```

## 12. Design Principles

- Simplicity
- Consistency
- Reusability
- Accessibility
- Responsiveness
- Easy Navigation
- Maintainability

## 13. Future Design Improvements

- QR Code section on student cards.
- College logo and branding.
- PDF download interface.
- Admin login page.
- Dark mode.
- Advanced dashboard charts.
- Student verification page.

## 14. Conclusion

The design of the Student Card Management System focuses on providing a clean, professional, and responsive user experience. Reusable React components help maintain consistent design and simplify future development.