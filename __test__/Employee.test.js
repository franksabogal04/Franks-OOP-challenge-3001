const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('Initialization', () => {
        test('should create an object with name, id, and email properties', () => {
            const employee = new Employee('Frank Sabogal', 1, 'frank@example.com');

            expect(employee).toEqual(expect.objectContaining({
                name: 'Frank Sabogal',
                id: 1,
                email: 'frank@example.com'
            }));
        });
    });

    describe('Methods', () => {
        test('should return the name when getName() is called', () => {
            const employee = new Employee('Frank Sabogal', 1, 'frank@example.com');

            expect(employee.getName()).toEqual('Frank Sabogal');
        });

        test('should return the id when getId() is called', () => {
            const employee = new Employee('Frank Sabogal', 1, 'frank@example.com');

            expect(employee.getId()).toEqual(1);
        });

        test('should return the email when getEmail() is called', () => {
            const employee = new Employee('Frank Sabogal', 1, 'frank@example.com');

            expect(employee.getEmail()).toEqual('frank@example.com');
        });

        test('should return "Employee" when getRole() is called', () => {
            const employee = new Employee('Frank Sabogal', 1, 'frank@example.com');

            expect(employee.getRole()).toEqual('Employee');
        });
    });
});

