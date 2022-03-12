const Intern = require("../lib/Intern");

describe('Intern', () => {
    const intern = new Intern('Zach', '49124', 'zach@abc.com', 'Test Academy');

    it('create intern', () => {
        expect(intern.name).toBe('Zach');
        expect(intern.id).toBe('49124');
        expect(intern.email).toBe('zach@abc.com');
        expect(intern.school).toBe('Test Academy');
    });

    it('role is intern', () => {
        expect(intern.getRole()).toBe('Intern');
    });

    it('school is test academy', () => {
        expect(intern.getSchool()).toBe('Test Academy');
    });
});