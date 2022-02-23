  // #1
  const sayHi = (name: string, age: number, gender: string): string => {
    return `Hello ${name}, you are ${age}, you are a ${gender}!`
  };

  console.log(sayHi("gee-na", 30, "female"));


  // #2 interfaces
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
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!2`
  }

  console.log(sayHi2(person))


  export {};