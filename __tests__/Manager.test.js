const Manager = require('../lib/Manager.js');

test('creates a Manager object', () => {
    const intern = new Manager('Jim', '9012', 'jim@gmail.com', '491');

    expect(intern.name).toEqual(expect.any('Jim'));
    expect(intern.id).toEqual(expect.any('9012'));
    expect(intern.email).toEqual(expect.any('jim@gmail.com'));
    expect(intern.office).toEqual(expect.any('491'));
});