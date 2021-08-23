const Employee = require('../lib/Intern');


describe('Intern', () => {
    it('should create a new employee object', function(){
        let employee = new Employee();
        expect(typeof employee).toBe('object');
    });
    

    it('should generate name, id, email, school when passed into the function', function(){
        let name = "Chris";
        let id = "ID";
        let email = "email"
        let school = "school"
        let title = "Intern"

        const employee = new Employee(name,id,email,school)

        expect(employee.name).toEqual(name);
        expect(employee.id).toEqual(id);
        expect(employee.email).toEqual(email)
        expect(employee.school).toEqual(school);
        expect(employee.title).toEqual("Intern");

    });

})