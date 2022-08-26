const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Clarence', '1', 'dalebungay@gmail.com', 'dalebungay');

test('test if we can get the constructor value for the employee object', () => {
    expect(engineer.name).toBe('Clarence');
    expect(engineer.id).toBe('1');
    expect(engineer.email).toBe('dalebungay@gmail.com');
});

test('test if we can get the name value from the getName() method', () =>{
    expect(engineer.getName()).toBe('Clarence');
});

test('test if we can get the id value from the getId() method', () => {
    expect(engineer.getId()).toBe('1');
});

test('test if we can get the email value from the getEmail() method', () => {
    expect(engineer.getEmail()).toBe('dalebungay@gmail.com');
});

test('test if we can get the github username from the get getGithub() method', () => {
    expect(engineer.getGithub()).toBe('dalebungay');
});

test('test if we can get the Role value from the getRole() method', () => {
    expect(engineer.getRole()).toBe('Engineer');
});