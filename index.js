let employees = [];
let grades = [];
fetch("https://employees-rugo.onrender.com/employees")
  .then((response) => response.json())
  .then((json) =>
    json.forEach((employee) => {
      employees.push(employee);
    })
  );

fetch("https://employees-rugo.onrender.com/grades")
  .then((response) => response.json())
  .then((json) =>
    json.forEach((student) => {
      grades.push(student);
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
function displayGrades() {
  let gradesList = document.getElementById("gradesList");
  grades.forEach((grade) => {
    let eachGrade = document.createElement("li");
    eachGrade.innerHTML =
      grade.Name +
      ": " +
      (grade.Grade > 60
        ? grade.Grade + " Congrats"
        : grade.Grade + " bad luck");
    gradesList.appendChild(eachGrade);
  });
}
