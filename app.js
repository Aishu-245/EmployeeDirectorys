// This is your mock employee data
let employees = [{
        id: 1,
        firstName: "Alice",
        lastName: "Smith",
        email: "alice@example.com",
        department: "HR",
        role: "Manager"
    },
    {
        id: 2,
        firstName: "Bob",
        lastName: "Johnson",
        email: "bob@example.com",
        department: "IT",
        role: "Developer"
    },
    {
        id: 3,
        firstName: "Charlie",
        lastName: "Lee",
        email: "charlie@example.com",
        department: "Finance",
        role: "Analyst"
    }
];

let currentPage = 1;
let itemsPerPage = 10;
let filter = {};
let sortBy = "";

const employeeList = document.getElementById("employee-list");
const employeeFormSection = document.getElementById("employee-form-section");
const employeeForm = document.getElementById("employee-form");
const formTitle = document.getElementById("form-title");
const formError = document.getElementById("form-error");

function renderEmployees() {
    let filtered = employees.filter(emp => {
        const matchName = filter.firstName ? emp.firstName.toLowerCase().includes(filter.firstName.toLowerCase()) : true;
        const matchDept = filter.department ? emp.department.toLowerCase().includes(filter.department.toLowerCase()) : true;
        const matchRole = filter.role ? emp.role.toLowerCase().includes(filter.role.toLowerCase()) : true;
        return matchName && matchDept && matchRole;
    });

    if (sortBy) {
        filtered.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
    }

    const searchValue = document.getElementById("searchInput").value.toLowerCase();
    if (searchValue) {
        filtered = filtered.filter(emp =>
            emp.firstName.toLowerCase().includes(searchValue) ||
            emp.lastName.toLowerCase().includes(searchValue) ||
            emp.email.toLowerCase().includes(searchValue)
        );
    }

    const start = (currentPage - 1) * itemsPerPage;
    const paginated = filtered.slice(start, start + itemsPerPage);

    employeeList.innerHTML = "";
    paginated.forEach(emp => {
        const div = document.createElement("div");
        div.className = "employee-card";
        div.innerHTML = `
      <h3>${emp.firstName} ${emp.lastName}</h3>
      <p><strong>Email:</strong> ${emp.email}</p>
      <p><strong>Department:</strong> ${emp.department}</p>
      <p><strong>Role:</strong> ${emp.role}</p>
      <button onclick="editEmployee(${emp.id})">Edit</button>
      <button onclick="deleteEmployee(${emp.id})">Delete</button>
    `;
        employeeList.appendChild(div);
    });

    renderPagination(filtered.length);
}

function renderPagination(totalItems) {
    const pagination = document.getElementById("pagination");
    pagination.innerHTML = "";
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement("button");
        btn.textContent = i;
        btn.className = i === currentPage ? "active" : "";
        btn.onclick = () => {
            currentPage = i;
            renderEmployees();
        };
        pagination.appendChild(btn);
    }
}

function deleteEmployee(id) {
    employees = employees.filter(emp => emp.id !== id);
    renderEmployees();
}

function editEmployee(id) {
    const emp = employees.find(e => e.id === id);
    if (!emp) return;

    document.getElementById("employeeId").value = emp.id;
    document.getElementById("firstName").value = emp.firstName;
    document.getElementById("lastName").value = emp.lastName;
    document.getElementById("email").value = emp.email;
    document.getElementById("department").value = emp.department;
    document.getElementById("role").value = emp.role;

    formTitle.textContent = "Edit Employee";
    employeeFormSection.style.display = "block";
}

function showAddForm() {
    employeeForm.reset();
    formTitle.textContent = "Add Employee";
    document.getElementById("employeeId").value = "";
    employeeFormSection.style.display = "block";
}

function hideForm() {
    employeeFormSection.style.display = "none";
    formError.textContent = "";
}

employeeForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const id = document.getElementById("employeeId").value;
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const department = document.getElementById("department").value.trim();
    const role = document.getElementById("role").value.trim();

    if (!firstName || !lastName || !email || !department || !role) {
        formError.textContent = "All fields are required.";
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        formError.textContent = "Invalid email format.";
        return;
    }

    if (id) {
        const index = employees.findIndex(e => e.id === parseInt(id));
        if (index > -1) {
            employees[index] = {
                id: parseInt(id),
                firstName,
                lastName,
                email,
                department,
                role
            };
        }
    } else {
        employees.push({
            id: Date.now(),
            firstName,
            lastName,
            email,
            department,
            role
        });
    }

    hideForm();
    renderEmployees();
});

document.getElementById("searchInput").addEventListener("input", () => {
    currentPage = 1;
    renderEmployees();
});

document.getElementById("filterDepartment").addEventListener("change", () => {
    filter.department = document.getElementById("filterDepartment").value;
    currentPage = 1;
    renderEmployees();
});

document.getElementById("filterRole").addEventListener("change", () => {
    filter.role = document.getElementById("filterRole").value;
    currentPage = 1;
    renderEmployees();
});

// Initial Render
renderEmployees();// This is your mock employee data
let employees = [{
        id: 1,
        firstName: "Alice",
        lastName: "Smith",
        email: "alice@example.com",
        department: "HR",
        role: "Manager"
    },
    {
        id: 2,
        firstName: "Bob",
        lastName: "Johnson",
        email: "bob@example.com",
        department: "IT",
        role: "Developer"
    },
    {
        id: 3,
        firstName: "Charlie",
        lastName: "Lee",
        email: "charlie@example.com",
        department: "Finance",
        role: "Analyst"
    }
];

let currentPage = 1;
let itemsPerPage = 10;
let filter = {};
let sortBy = "";

const employeeList = document.getElementById("employee-list");
const employeeFormSection = document.getElementById("employee-form-section");
const employeeForm = document.getElementById("employee-form");
const formTitle = document.getElementById("form-title");
const formError = document.getElementById("form-error");

function renderEmployees() {
    let filtered = employees.filter(emp => {
        const matchName = filter.firstName ? emp.firstName.toLowerCase().includes(filter.firstName.toLowerCase()) : true;
        const matchDept = filter.department ? emp.department.toLowerCase().includes(filter.department.toLowerCase()) : true;
        const matchRole = filter.role ? emp.role.toLowerCase().includes(filter.role.toLowerCase()) : true;
        return matchName && matchDept && matchRole;
    });

    if (sortBy) {
        filtered.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
    }

    const searchValue = document.getElementById("searchInput").value.toLowerCase();
    if (searchValue) {
        filtered = filtered.filter(emp =>
            emp.firstName.toLowerCase().includes(searchValue) ||
            emp.lastName.toLowerCase().includes(searchValue) ||
            emp.email.toLowerCase().includes(searchValue)
        );
    }

    const start = (currentPage - 1) * itemsPerPage;
    const paginated = filtered.slice(start, start + itemsPerPage);

    employeeList.innerHTML = "";
    paginated.forEach(emp => {
        const div = document.createElement("div");
        div.className = "employee-card";
        div.innerHTML = `
      <h3>${emp.firstName} ${emp.lastName}</h3>
      <p><strong>Email:</strong> ${emp.email}</p>
      <p><strong>Department:</strong> ${emp.department}</p>
      <p><strong>Role:</strong> ${emp.role}</p>
      <button onclick="editEmployee(${emp.id})">Edit</button>
      <button onclick="deleteEmployee(${emp.id})">Delete</button>
    `;
        employeeList.appendChild(div);
    });

    renderPagination(filtered.length);
}

function renderPagination(totalItems) {
    const pagination = document.getElementById("pagination");
    pagination.innerHTML = "";
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement("button");
        btn.textContent = i;
        btn.className = i === currentPage ? "active" : "";
        btn.onclick = () => {
            currentPage = i;
            renderEmployees();
        };
        pagination.appendChild(btn);
    }
}

function deleteEmployee(id) {
    employees = employees.filter(emp => emp.id !== id);
    renderEmployees();
}

function editEmployee(id) {
    const emp = employees.find(e => e.id === id);
    if (!emp) return;

    document.getElementById("employeeId").value = emp.id;
    document.getElementById("firstName").value = emp.firstName;
    document.getElementById("lastName").value = emp.lastName;
    document.getElementById("email").value = emp.email;
    document.getElementById("department").value = emp.department;
    document.getElementById("role").value = emp.role;

    formTitle.textContent = "Edit Employee";
    employeeFormSection.style.display = "block";
}

function showAddForm() {
    employeeForm.reset();
    formTitle.textContent = "Add Employee";
    document.getElementById("employeeId").value = "";
    employeeFormSection.style.display = "block";
}

function hideForm() {
    employeeFormSection.style.display = "none";
    formError.textContent = "";
}

employeeForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const id = document.getElementById("employeeId").value;
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const department = document.getElementById("department").value.trim();
    const role = document.getElementById("role").value.trim();

    if (!firstName || !lastName || !email || !department || !role) {
        formError.textContent = "All fields are required.";
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        formError.textContent = "Invalid email format.";
        return;
    }

    if (id) {
        const index = employees.findIndex(e => e.id === parseInt(id));
        if (index > -1) {
            employees[index] = {
                id: parseInt(id),
                firstName,
                lastName,
                email,
                department,
                role
            };
        }
    } else {
        employees.push({
            id: Date.now(),
            firstName,
            lastName,
            email,
            department,
            role
        });
    }

    hideForm();
    renderEmployees();
});

document.getElementById("searchInput").addEventListener("input", () => {
    currentPage = 1;
    renderEmployees();
});

document.getElementById("filterDepartment").addEventListener("change", () => {
    filter.department = document.getElementById("filterDepartment").value;
    currentPage = 1;
    renderEmployees();
});

document.getElementById("filterRole").addEventListener("change", () => {
    filter.role = document.getElementById("filterRole").value;
    currentPage = 1;
    renderEmployees();
});

// Initial Render
renderEmployees();
