/**
 * Created by jeewendrakumar on 5/28/2017.
 */
var employeeArray =[ { name : 'Emp1', age:25, salary:'100000'}, { name : 'Emp2', age:25, salary:'100000'}];

function employeeDetails(o) {
    var e = document.querySelector("#employee-details");
    var li = '';
    o.forEach(o => {
        li+=(`<li>${o.name}</li><li>${o.age}</li><li>${o.salary}</li>`);
    });
    e.innerHTML = li;
}

employeeDetails(employeeArray);
