const Employee = require('../lib/Engineer');


describe('Engineer', () => {
    it('should create a new employee object', function(){
        let employee = new Employee();
        expect(typeof employee).toBe('object');
    });
    

    it('should generate an  when passed into the function', function(){
        let name = "Chris";
        let id = "ID";
        let email = "email"
        let github = "github"
        let title = "Engineer"

        const employee = new Employee(name,id,email,github)

        expect(employee.name).toEqual(name);
        expect(employee.id).toEqual(id);
        expect(employee.email).toEqual(email)
        expect(employee.github).toEqual(github);
        expect(employee.title).toEqual("Engineer");

    });

})

