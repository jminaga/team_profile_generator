const Employee = require('../lib/Employee');


describe('Employee', () => {
    it('should create a new employee object', function(){
        let employee = new Employee();
        expect(typeof employee).toBe('object');
    });
    

    it('should generate an ID when passed into the function', function(){
        let name = "Chris";
        let id = "ID";
        let email = "email"
        let title = "manager"
        const employee = new Employee(name,id,email)
        expect(employee.name).toEqual(name);
        expect(employee.id).toEqual(id);
        expect(employee.email).toEqual(email);
        expect(employee.title).toEqual("Employee");
    });

})

