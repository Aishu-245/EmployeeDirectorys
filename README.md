# 👩‍💼 Employee Directory – Front-End Assignment

This is a **responsive and interactive Employee Directory Web Interface** built using **HTML, CSS, JavaScript, and Freemarker templates (FTL)**.  
It satisfies the assignment criteria including listing employees, adding/editing functionality, filtering, searching, pagination, and responsive design.

## 📋 Objective

To build a front-end-only Employee Directory that displays employee data using **Freemarker templates** and allows full UI interactivity without any backend API.

## ✅ Features Implemented

### 1. Dashboard Page
- Shows list/grid of employees with:
  - **ID**, **First Name**, **Last Name**, **Email**, **Department**, **Role**
- Rendered using **Freemarker template** (`.ftl`) for mock data.

### 2. Add/Edit Form
- Form with validation for:
  - First Name, Last Name, Email, Department, Role
- All fields are **required**
- Email format is validated with Regex
- Clicking "Edit" fills the form with current values
- Data is updated **in-memory** without any server

### 3. Filter / Sort / Search
- Filter by:
  - First Name
  - Department
  - Role
- Search by:
  - Name or Email
- Sort by:
  - First Name or Department
- Everything happens live using JavaScript

### 4. Pagination
- Options to paginate results: **10, 25, 50, 100** per page (default: 10)
- Implemented using JavaScript logic and page buttons

### 5. Responsive Design
- Works smoothly on:
  - Desktop 💻
  - Tablet 📱
  - Mobile 📱
- CSS Media Queries handle:
  - Extra Small (xs): <576px  
  - Small (sm): 576px–767px  
  - Medium (md): 768px–991px  
  - Large (lg): 992px–1199px  
  - Extra Large (xl): ≥1200px  

### 6. Freemarker Integration
- Employee data is initialized in the page using `<#assign>` in `.ftl` file.
- Loops and conditionals from Freemarker used in initial template rendering.

## 🧱 Tech Stack

| Technology | Purpose                    |
|------------|-----------------------------|
| HTML       | Page structure              |
| CSS        | Styling and responsiveness  |
| JavaScript | Logic, interactivity, filters, pagination |
| Freemarker | Template engine for rendering mock data |

## 📁 Project Structure

```
employee-directory/
├── index.ftl              → Main template page
├── style.css              → All CSS styles
├── app.js                 → JS logic for render, filters, forms
├── README.md              → This file
└── screenshots/           → Images of UI (optional)
```


## 💡 Error Handling

- Shows error if required fields are empty
- Invalid email format gives clear error
- Form resets after submission or cancel
- Editing auto-fills data; deletion asks confirmation
- Defensive coding to avoid undefined or null errors

## 🤔 Reflection

### Challenges Faced:
- Handling search + filter + sort + pagination together
- Ensuring clean DOM updates without frameworks
- Making layout look good on all screen sizes

### What I’d Improve:
- Use of component-based architecture (e.g. React)
- Store data in browser localStorage to persist changes
- Add animations and better UI feedback


