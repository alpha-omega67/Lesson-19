const numbers = [1, 2, 3, 4, 5];

const result = [];

for (let i = 0; i < numbers.length; i++) {
  result.push(numbers[i] * 2);
}

console.log(result);

const result2 = numbers.map((el) => {
  return el * 2;
});

console.log(result2);

const users = [
  { name: "Artem", age: 18 },
  { name: "Elman", age: 23 },
  { name: "Oleg", age: 15 },
];

const names = users.map((el) => {
  return el.name;
});

console.log(names);

const workings = users.filter((el) => {
  return el.age > 20;
});

console.log(workings);

const findUser = users.find((el) => {
  return el.name === "Elman";
});

console.log(findUser);

const numbers2 = [10, 20, 40, 100, 150];

const isHave = numbers2.some((el) => {
  return el === 150;
});

console.log(isHave);

const altuxi = users.every((el) => {
  return users.age >= 18;
});

console.log(altuxi);

const numbers3 = [10, 20, 30, 40, 50];

const result3 = numbers3.reduce((sum, number) => {
  return sum + number;
}, 0);

console.log(result3);

const fruits = ["Яблоко", "Ананас", "Апельсин"];

const result4 = fruits.reduce((acc, fruit, index) => {
  acc[index] = fruit;
  return acc;
}, {});

console.log(result4);

const upNumber = numbers3.reduce((acc, number) => {
  if (number > acc) {
    return number;
  }
  return acc;
}, numbers3[0]);

console.log(upNumber);
