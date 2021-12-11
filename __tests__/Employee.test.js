const Employee = require('../lib/Employee.js');
const checkIfEqual = require('../lib/Employee.js');

test ('creates new employee object', () => {
    const emplyee = new Employee();
    expect(typeof(employee)).toBe('object');
});