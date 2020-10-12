export class Class {
  constructor(name, professor) {
    this.name = name;
    this.professor = professor;
  }

  classInfo() {
    return `Class: ${this.name} Professor: ${this.professor}`;
  }
}

export class Student {
  constructor(name, phone, email, currentClass) {
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.currentClass = currentClass;
  }

  contactInfo() {
    return `Name: ${this.name} Phone: ${this.phone} E-mail: ${this.email}`;
  }
}

// Class Instance
export const python = new Class("Python", "Daniel Floyd");

// Student Instance
export const cory = new Student(
  "Cory",
  "5555555555",
  "coryb@ss.com",
  python
);