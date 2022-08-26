const Employee = require('../lib/Employee');
const employee = new Employee('Clarence', '1', 'dalebungay@gmail.com');

test('test if we can get the constructor value for the employee object', () => {
    expect(employee.name).toBe('Clarence');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('dalebungay@gmail.com');
});

test('test if we can get the name value from the getName() method', () =>{
    expect(employee.getName()).toBe('Clarence');
});

test('test if we can get the id value from the getId() method', () => {
    expect(employee.getId()).toBe('1')
});

test('test if we can get the email value from the getEmail() method', () => {
    expect(employee.getEmail()).toBe('dalebungay@gmail.com')
});

test('test if we can get the Role value from the getRole() method', () => {
    expect(employee.getRole()).toBe('Employee')
});