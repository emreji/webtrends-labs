export class Person {
    constructor(aName) {
        this.name = aName; 
        this.email;
    }
    
}

export class Student extends Person {
    constructor(x) {
        super(x);
        this.number;
        this.studentEmail;
        this.amount = 0;
    }
    charge(x) {
        this.amount = this.amount + x;
    }
}