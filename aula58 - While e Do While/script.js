const arr = [1, 3, 6, 2];
const obj = {
  name: "Leo",
  Age: 30,
  weight: 69,
};
let rand = Math.floor(Math.random() * (10 - 5 + 1) + 5);
let i = 0;

// WHILE NORMAL
// while (i < arr.length) {
//   console.log(arr[i]);
//   i++;
// }

// DO/WHILE
do {
  let keys = Object.keys(obj);
  let key = keys[i];
  console.log(key, " - ", obj[key]);
  i++;
} while (i < Object.keys(obj).length);
