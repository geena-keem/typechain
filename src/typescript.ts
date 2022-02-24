  // #1
  const sayHi = (name: string, age: number, gender: string): string => {
    return `Hello ${name}, you are ${age}, you are a ${gender}!`;
  };

  console.log(sayHi("gee-na", 30, "female"));



  // #2 interface
  interface Human {
    name: string,
    age: number,
    gender: string
  }
  
  const person = {
    name: "gee-na",
    age: 30,
    gender: "female"
  }

  const sayHi2 = (person: Human): string => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!2`;
  }

  console.log(sayHi2(person));


  
  // #3 class
  class Human2 {
    public name: string;
    public age: number;
    public gender: string;

    constructor(name: string, age: number, gender: string) {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }
  }

  const geena = new Human2("gee-----na", 30, "female");

  const sayHi3 = (person: Human): string => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!3`;
  }

  console.log(sayHi3(geena));

  export {};