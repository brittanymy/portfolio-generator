const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

test("creates an intern object", () => {
    const intern = new Intern("Chris", "23", "chris@email.com", "UNCC");

    expect(intern.name).toBe("Chris");
    expect(intern.id).toBe("23");
    expect(intern.email).toBe("chris@email.com");
    expect(intern.school).toBe("UNCC");
});

test("gets intern's school", () => {
    const intern = new Intern("Chris", "23", "chris@email.com", "UNCC");

    expect(intern.getSchool()).toEqual(intern.school);
});

test("gets intern's school", () => {
    const intern = new Intern("Chris", "23", "chris@email.com", "UNCC");

    expect(intern.getRole()).toEqual("Intern");
});