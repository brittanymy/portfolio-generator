const Employee = require("../lib/Employee.js");

test("creates an employee object", () => {
    const employee = new Employee("Chris", "23", "christopher@email.com");

    expect(employee.name).toBe("Chris");
    expect(employee.id).toEqual("23");
    expect(employee.email).toBe("christopher@email.com");
});

test("gets employee's name", () => {
    const employee = new Employee("Chris", "23", "christopher@email.com");

    expect(employee.getName()).toEqual(employee.name);
});

test("gets employee's id", () => {
    const employee = new Employee("Chris", "23", "christopher@email.com");

    expect(employee.getId()).toEqual(employee.id);
});

test("gets employee's email", () => {
    const employee = new Employee("Chris", "23", "christopher@email.com");

    expect(employee.getEmail()).toEqual(employee.email);
});

test("gets employee's role", () => {
    const employee = new Employee("Chris", "23", "christopher@email.com");

    expect(employee.getRole()).toEqual("Employee");
});