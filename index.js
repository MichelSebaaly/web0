let employees = [];

fetch("https://employees-rugo.onrender.com/employees")
  .then((response) => response.json())
  .then((json) =>
    json.forEach((employee) => {
      employees.push(employee);
    })
  );

function displayEmployees() {
  let tableEmployees = document.getElementById("employees");
  employees.forEach((employee) => {
    let tableRow = document.createElement("tr");
    ["ID", "Name", "Lastname", "Phone", "Address"].forEach((column) => {
      const tableData = document.createElement("td");
      tableData.innerHTML = employee[column];
      tableRow.appendChild(tableData);
    });
    tableEmployees.appendChild(tableRow);
  });
}
