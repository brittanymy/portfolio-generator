const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

test("creates a manager object", () => {
    const manager = new Manager("Chris", "23", "chris@email.com", "984")

    expect(manager.name).toBe("Chris");
    expect(manager.id).toBe("23");
    expect(manager.email).toBe("chris@email.com");
    expect(manager.officeNumber).toBe("984");
});

test("gets manager's office number", () => {
    const manager = new Manager("Chris", "23", "chris@email.com", "984");

    expect(manager.getOfficeNumber()).toEqual("984");
});

test("gets manager's role", () => {
    const manager = new Manager("Chris", "23", "chris@email.com", "984");

    expect(manager.getRole()).toEqual("Manager");
});