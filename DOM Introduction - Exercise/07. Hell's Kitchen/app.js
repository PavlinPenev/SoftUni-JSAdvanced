function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {

     const restaurants =  JSON.parse(document.getElementById('inputs').querySelector('textArea').value);
     let objRestaurants = [];
     let inputOrder = 0;
     
     for(let restaurant of restaurants) {

         const inputInfo = restaurant.split(' - ');
         let restName = inputInfo[0];
         const employeesInfo = inputInfo[1].split(', ');
         let objRestaurant = {};
         
         if(!objRestaurants.some(r => r.name === restName)) {

            objRestaurant.name = restName;
            objRestaurant.employees = new Array();
            objRestaurants.push(objRestaurant);

         } else {

            objRestaurant = objRestaurants.find(r => r.name === restName);

         }

         for(let employee of employeesInfo) {

            const objEmployee = {};
            let employeeInfo = employee.split(' ');
            let employeeName = employeeInfo[0];
            let employeeSalary = Number(employeeInfo[1]);
            objEmployee.name = employeeName;
            objEmployee.salary = employeeSalary;
            objRestaurant.employees.push(objEmployee);

         }

         let sumSalary = objRestaurant.employees.reduce((a, b) => a + b.salary, 0);
         objRestaurant.averageSalary = (sumSalary / objRestaurant.employees.length) || 0;

      }

      objRestaurants = objRestaurants.sort((a, b) => b.averageSalary - a.averageSalary);
      let bestRestaurant = objRestaurants[0];
      bestRestaurant.employees = bestRestaurant.employees.sort((a, b) => b.salary - a.salary);
      let bestRestSalary = bestRestaurant.employees[0].salary;
      let strRepresentBestRest = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} Best Salary: ${bestRestSalary.toFixed(2)}`;
      let workersBestRest = '';

      for(let worker of bestRestaurant.employees) {

         workersBestRest += `Name: ${worker.name} With Salary: ${worker.salary} `;

      }

      document.getElementById('bestRestaurant').querySelector('p').textContent = strRepresentBestRest;
      document.getElementById('workers').querySelector('p').textContent = workersBestRest;
   }
}
