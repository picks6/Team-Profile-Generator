const Manager = require("../lib/Manager");

describe('Manager', () => {
    const manager = new Manager('Zach', '9946', 'zach@abc.com', '867-5309');

    it('create Manager', () => {
        expect(manager.name).toBe('Zach');
        expect(manager.id).toBe('9946');
        expect(manager.email).toBe('zach@abc.com');
        expect(manager.phone).toBe('867-5309');
    });

    it('role is manager', () => {
        expect(manager.getRole()).toBe('Manager');
    });
});