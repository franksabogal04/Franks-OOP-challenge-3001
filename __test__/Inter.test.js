const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('Initialization', () => {
        test('should create an object with name, id, email, and school properties', () => {
            const intern = new Intern('David Borda', 4, 'david@example.com', 'University of Example');

            expect(intern).toEqual(expect.objectContaining({
                name: 'David Borda',
                id: 4,
                email: 'david@example.com',
                school: 'University of Example'
            }));
        });
    });

    describe('Methods', () => {
        test('should return the school when getSchool() is called', () => {
            const intern = new Intern('David Borda', 4, 'david@example.com', 'University of Example');

            expect(intern.getSchool()).toEqual('University of Example');
        });

        test('should return "Intern" when getRole() is called', () => {
            const intern = new Intern('David Borda', 4, 'david@example.com', 'University of Example');

            expect(intern.getRole()).toEqual('Intern');
        });
    });
});

