// Create Manager class 
// Employee will extend into this class 

const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.title = "Manager";
    };

    getOfficeNumber() {
        return this.getOfficeNumber;
    }

    getRole() {
        return this.title;
    }
   
}

module.exports = Manager;