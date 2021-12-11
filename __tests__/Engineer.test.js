const Engineer = require('../lib/Engineer.js');

test('creates a Engineer object', () => {
    const engineer = new Engineer('Michael', '1234', 'michaels@gmail.com', 'michealscott');

    expect(engineer.name).toEqual(expect.any('Michael'));
    expect(engineer.id).toEqual(expect.any('1234'));
    expect(engineer.email).toEqual(expect.any('michaels@gmail.com'));
    expect(engineer.github).toEqual(expect.any('michaelscott'));
});