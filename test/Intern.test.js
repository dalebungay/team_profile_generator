const Intern = require('../lib/Intern');
const intern = new Intern('Clarence', '1', 'dalebungay@gmail.com', 'UCB');

test('test if we can get the constructor value for the intern object', () => {
    expect(intern.name).toBe('Clarence');
    expect(intern.id).toBe('1');
    expect(intern.email).toBe('dalebungay@gmail.com');
    expect(intern.school).toBe('UCB');
});

test('test if we can get the name value from the getName() method', () =>{
    expect(intern.getName()).toBe('Clarence');
});

test('test if we can get the id value from the getId() method', () => {
    expect(intern.getId()).toBe('1');
});

test('test if we can get the email value from the getEmail() method', () => {
    expect(intern.getEmail()).toBe('dalebungay@gmail.com');
});

test('test if we can get school value from the getSchool() method', () => {
    expect(intern.getSchool()).toBe('UCB');
});

test('test if we can get the Role value from the getRole() method', () => {
    expect(intern.getRole()).toBe('Intern');
});