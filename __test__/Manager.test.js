const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('Initialization', () => {
        test('should create an object with name, id, email, and officeNumber properties', () => {
            const manager = new Manager('John Smith', 2, 'John@example.com', 123);

            expect(manager).toEqual(expect.objectContaining({
                name: 'John Smith',
                id: 2,
                email: 'John@example.com',
                officeNumber: 123
            }));
        });
    });

    describe('Methods', () => {
        test('should return the office number when getOfficeNumber() is called', () => {
            const manager = new Manager('John Smith', 2, 'John@example.com', 123);

            expect(manager.getOfficeNumber()).toEqual(123);
        });

        test('should return "Manager" when getRole() is called', () => {
            const manager = new Manager('John Smith', 2, 'John@example.com', 123);

            expect(manager.getRole()).toEqual('Manager');
        });
    });
});

