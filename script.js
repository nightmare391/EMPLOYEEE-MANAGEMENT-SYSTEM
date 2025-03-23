function loadEmployees() {
    let employees = JSON.parse(localStorage.getItem("employees")) || [];
    let list = document.getElementById("employeeList");
    list.innerHTML = "";
    employees.forEach(emp => {
        let card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `<img src='default.jpg' alt='Profile'><h3>${emp.name}</h3><p><b>${emp.role}</b></p><p>${emp.about}</p>`;
        list.appendChild(card);
    });
}

function addEmployee() {
    let name = document.getElementById("name").value;
    let role = document.getElementById("role").value;
    let about = document.getElementById("about").value;

    if (!name || !role || !about) {
        alert("All fields are required!");
        return;
    }

    let employees = JSON.parse(localStorage.getItem("employees")) || [];
    employees.push({ name, role, about });
    localStorage.setItem("employees", JSON.stringify(employees));

    alert("Employee added successfully!");
    window.location.href = "index.html";
}

function loadManagePage() {
    let employees = JSON.parse(localStorage.getItem("employees")) || [];
    let table = document.getElementById("manageTable");
    table.innerHTML = "";
    employees.forEach((emp, index) => {
        table.innerHTML += `<tr>
            <td>${emp.name}</td>
            <td>${emp.role}</td>
            <td>${emp.about}</td>
            <td><button onclick="removeEmployee(${index})">Remove</button></td>
        </tr>`;
    });
}

function removeEmployee(index) {
    let employees = JSON.parse(localStorage.getItem("employees"));
    employees.splice(index, 1);
    localStorage.setItem("employees", JSON.stringify(employees));
    loadManagePage();
}
