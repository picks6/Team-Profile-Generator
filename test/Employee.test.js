const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("create employee", () => {
        const employee = new Employee('Zach', '8565', 'zach@abc.com');

        expect(employee.name).toBe('Zach');
        expect(employee.id).toBe('8565');
        expect(employee.email).toBe('zach@abc.com');
    });
});
