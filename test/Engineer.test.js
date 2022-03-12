const Engineer = require("../lib/Engineer");

describe('Engineer', () => {
    const engineer = new Engineer('Zach', '1234', 'zach@abc.com', 'picks6');

    it('create employee', () => {
        expect(engineer.name).toBe('Zach');
        expect(engineer.id).toBe('1234');
        expect(engineer.email).toBe('zach@abc.com');
        expect(engineer.github).toBe('picks6');
    });

    it('role is engineer', () => {
        expect(engineer.getRole()).toBe('Engineer');
    });

    it('github is picks6', () => {
        expect(engineer.getGit()).toBe('picks6');
    });
});