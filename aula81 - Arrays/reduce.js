// Exemplo simples1
console.log(
  "===================================================================",
);
console.log("🚨  Exemplo simples.");
const num = [2, 4, 3, 5];

const total = num.reduce((accumulate, value) => {
  console.log(`Accumulate: ${accumulate} | Value: ${value}`);
  return accumulate + value;
}, 0);

console.log(`Final Value: ${total}`);

// Exemplo com tarefas
console.log(
  "===================================================================",
);
console.log("🚨  Exemplo com Tarefas");

const tasks = [
  { title: "Washing the car", concluded: false },
  { title: "Learn about JavaScript", concluded: true },
  { title: "Clean the bedroom", concluded: false },
  { title: "Make my job", concluded: true },
];

const countConcluded = tasks.reduce((accumulate, value) => {
  return value.concluded ? accumulate + 1 : accumulate;
}, 0);

console.log(`Number concluded tasks: ${countConcluded}`);

// Exemplo com tarefas
console.log(
  "===================================================================",
);
console.log("🚨  Exemplo com Estoque");

const stock = [
  { product: "broom", quantity: 15 },
  { product: "toothbrush", quantity: 9 },
  { product: "poty", quantity: 3 },
  { product: "wheel", quantity: 12 },
  { product: "stair", quantity: 7 },
];

const countGoods = stock.reduce((accumulate, value) => {
  console.log(`Accumulated items: ${accumulate}`);
  return accumulate + value.quantity;
}, 0);

console.log(`✅  Quantity of Stock: ${countGoods}`);

// Desafio hard
// Exemplo com tarefas
console.log(
  "===================================================================",
);
console.log("🚨  Exemplo Hard");

const stockObject = stock.reduce((acc, i) => {
  acc[i.product] = i.quantity;
  return acc;
}, {});

console.log(`Object from Array:`, stockObject);

console.log(
  "===================================================================",
);
console.log("🚨  Exemplo Hard - Spread Operator");

const stockObjectSpreadOperator = stock.reduce(
  (acc, g) => ({
    ...acc,
    [g.product]: g.quantity,
  }),
  {},
);

console.log(
  `Object Stock from Array: ${JSON.stringify(
    stockObjectSpreadOperator,
    null,
    2,
  )}`,
);
