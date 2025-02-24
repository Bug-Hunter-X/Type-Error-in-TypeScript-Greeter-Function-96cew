function greeter(person: string | string[]): string {
  if (typeof person === 'string') {
    return "Hello, " + person;
  } else {
    return "Hello, " + person.join(', ');
  }
}

let user = ["Jane Doe", "John Smith"];

console.log(greeter(user)); // Outputs: Hello, Jane Doe, John Smith

console.log(greeter("Jane Doe")); //Outputs: Hello, Jane Doe