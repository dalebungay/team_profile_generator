const Manager = require('../lib/Manager');
const manager = new Manager('Clarence', '1', 'dalebungay@gmail.com', '111');

test('test if we can get the constructor value for the manager object', () => {
    expect(manager.name).toBe('Clarence');
    expect(manager.id).toBe('1');
    expect(manager.email).toBe('dalebungay@gmail.com');
    expect(manager.officeNumber).toBe('111');
});

test('test if we can get the name value from the getName() method', () =>{
    expect(manager.getName()).toBe('Clarence');
});

test('test if we can get the id value from the getId() method', () => {
    expect(manager.getId()).toBe('1');
});

test('test if we can get the email value from the getEmail() method', () => {
    expect(manager.getEmail()).toBe('d;alebungay@gmail.com')
});

test('test if we can get the office number from the getOfficeNumber() method', () => {
    expect(manager.getOfficeNumber()).toBe('111');
})

test('test if we can get the Role value from the getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
});