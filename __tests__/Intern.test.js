const Intern = require('../lib/Intern.js');

test('creates a intern object', () => {
    const intern = new Intern('Dwight', '1234', 'dwights@gmail.com', 'Yale');

    expect(intern.name).toEqual(expect.any('Dwight'));
    expect(intern.id).toEqual(expect.any('5678'));
    expect(intern.email).toEqual(expect.any('dwight@gmail.com'));
    expect(intern.github).toEqual(expect.any('Yale'));
});