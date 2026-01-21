let nick = "Leonardo";
let arr = ["LP", "Br", "Monteiro"]; // It is an array.
let person = { // It is an object. 
  name: "Leo",
  age: 30,
  surname: "Monteiro",
}; 

// for in - WORK UPON INDEXES OF THE ITERABLE
for (let i in nick) {
  console.log(nick[i]);
}

console.log("#".repeat(10));

for (let i in person) {
  console.log(i, person[i]);
}

console.log("#".repeat(10));

// for of - WORK UPON THE VALUES OF OBJECT
for (let i of nick) {
  console.log(i);
}

console.log("#".repeat(10));

for (let i of arr) {
  console.log(i);
}
