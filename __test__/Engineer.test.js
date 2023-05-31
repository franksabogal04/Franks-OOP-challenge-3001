const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('Initialization', () => {
        test('should create an object with name, id, email, and github properties', () => {
            const engineer = new Engineer('Daniela Sanchez', 3, 'Dani@example.com', 'danigithub');

            expect(engineer).toEqual(expect.objectContaining({
                name: 'Daniela Sanchez',
                id: 3,
                email: 'Dani@example.com',
                github: 'danigithub'
            }));
        });
    });

    describe('Methods', () => {
        test('should return the GitHub username when getGithub() is called', () => {
            const engineer = new Engineer('Daniela Sanchez', 3, 'Dani@example.com', 'danigithub');

            expect(engineer.getGithub()).toEqual('danigithub');
        });

        test('should return "Engineer" when getRole() is called', () => {
            const engineer = new Engineer('Daniela Sanchez', 3, 'Dani@example.com', 'danigithub');

            expect(engineer.getRole()).toEqual('Engineer');
        });
    });
});
