const Employee = require('../lib/Manager');


describe('Manager', () => {
    it('should create a new employee object', function(){
        let employee = new Employee();
        expect(typeof employee).toBe('object');
    });
    

    it('should generate name, id, email, and office number when passed into the function', function(){
        let name = "Chris";
        let id = "ID";
        let email = "email"
        let officeNumber = "Office Number"
        let title = "Manager"

        const employee = new Employee(name,id,email,officeNumber)

        expect(employee.name).toEqual(name);
        expect(employee.id).toEqual(id);
        expect(employee.email).toEqual(email)
        expect(employee.officeNumber).toEqual(officeNumber);
        expect(employee.title).toEqual("Manager");

    });

})