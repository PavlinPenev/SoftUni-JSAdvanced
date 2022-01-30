function inheritReplaceToString() {
    
    class Person {

        constructor(name, email) {
    
            this.name = name;
            this.email = email;
    
        }
    
        toString() {
    
            return `${this.constructor.name} (name: ${this.name}, email: ${this.email})`;
    
        }
    }
    
    class Teacher extends Person {
    
        constructor(name, email, subject) {
    
            super(name, email);
            this.subject = subject;
    
        }
    
        toString() {
    
            return super.toString().replace(')', ', ') + `subject: ${this.subject})`;
    
        }
    }
    
    class Student extends Person {
    
        constructor(name, email, course) {
    
            super(name, email);
            this.course = course;
    
        }
    
        toString() {
    
            return super.toString().replace(')', ', ') + `course: ${this.course})`;
    
        }
    }
    
    return {
    
        Person,
        Teacher,
        Student
    
    }

}