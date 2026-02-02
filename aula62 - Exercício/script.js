function fizzBuzz(number) {
  if (typeof number !== "number") {
    return number;
  }

  if (number % 3 === 0 && number % 5 === 0) return "FizzBuzz";
  if (number % 3 === 0) return "Fizz";
  if (number % 3 === 0) return "Buzz";
  return number;
}

// console.log("1", fizzBuzz("1"));

for (i = 0; i <= 100; i++) {
    let result = fizzBuzz(i)
    console.log(i, result)
};