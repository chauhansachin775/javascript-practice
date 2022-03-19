//Object creation syntax in js

    let Employee = {

        name: 'sachin',
        address: 'gwalior',
        empId: 101,
        basicSal: 1000,
        hra: 100,
        grossSal: 1100,
        machine: 'lenovo'
    };

    console.log(Employee);

    console.log()

    //1.Accessing Object properties in js via dot . notation

    console.log(Employee.name);
    console.log(Employee.address);
    console.log(Employee.empId);
    console.log(Employee.basicSal);
    console.log(Employee.hra);
    console.log(Employee.grossSal);
    console.log(Employee.machine);


    //Object Properties Manipulation in js

    Employee.name = 'Anil'
    Employee.empId = 102

    console.log();

    console.log(Employee);

    console.log()

    // Accessing  and Manipulating Object properties in js via bracket [] notation


    Employee['name'] = 'Aman'
    Employee['empId'] = 103

    console.log(Employee['name']);
    console.log(Employee['address']);
    console.log(Employee['empId']);
    console.log(Employee['basicSal']);
    console.log(Employee['hra']);
    console.log(Employee['grossSal']);
    console.log(Employee['machine']);

