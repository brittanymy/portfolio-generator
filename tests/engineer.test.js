const Employee = require("../lib/Employee.js")
const Engineer = require("../lib/Engineer.js")

test("creates engineer object", () => {
    const engineer = new Engineer("Chris", "23", "christopher@email.com", "chrisgithub");

    expect(engineer.name).toBe("Chris");
    expect(engineer.id).toBe("23");
    expect(engineer.email).toBe("christopher@email.com");
    expect(engineer.github).toBe("chrisgithub");
});

test("gets engineer's github", () => {
    const engineer = new Engineer("Chris", "23", "christopher@email.com");

    expect(engineer.getGithub()).toEqual(engineer.github);
});

test("gets engineer's role", () => {
    const engineer = new Engineer("Chris", "23", "christopher@email.com");
    
    expect(engineer.getRole()).toEqual("Engineer");
});