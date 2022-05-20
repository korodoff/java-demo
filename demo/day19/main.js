//API (Application Programming Interface)
// it connects two application to pass data from one to another

// Ajax
// AjaX- it helps us to query the API's.it allow us to make the server calls and display the data without
// reloading the pages.

// it allows us to communicate with remote web servers in an asynchronous way with he;p of AJAX calls, we can request 
// data from web servers dynamically. it help us to create
// CRUD(create read delete) application




// callback hell - they are just a name or convention for using javascript functions.it
// insted of returning immediatrly like other functions,takes time to produce the
// result.these are more od like an I/O operations

const getEmployeeID = () => {
    setTimeout(() => {
        console.log("Fetching the Employee details");
        let id = [1,2,3,4,5];
        console.log(id);
       
        setTimeout(() => {
            let employeeDetails = {
                name: "Arjun Kanungo",
                age: 34,
            }
            console.log(`The name of the employee is ${employeeDetails.name} an the age is ${employeeDetails.age}`);
           
            setTimeout(() => {
                employeeDetails.gender = "Male",
                console.log(`The name of the employee is ${employeeDetails.name} an the age is ${employeeDetails.age} and the gender is ${employeeDetails.gender}`);
               
                setTimeout(() => {
                    employeeDetails.salary = 21000;
                    console.log(`The name of the employee is ${employeeDetails.name} an the age is ${employeeDetails.age} and the gender is ${employeeDetails.gender} and the salary is ${employeeDetails.salary}`);
                },2000);
            }, 2000);
        }, 2000)
    },2000);
}
getEmployeeID();

