// console.log("\n===Деструктуризация массивов===");

// const colors = ["red", "green", "blue"];

// const color1 = colors[0];
// const color2 = colors[1];
// console.log(color1, color2);

// const [firstColor, secondColor, thirdColor] = colors;
// console.log(firstColor, secondColor, thirdColor);

// const [primary, , tertiary] = colors;
// console.log(primary, tertiary);

// const [c1, c2, c3, c4 = "yellow"] = colors;
// console.log(c4);
console.log("\n===Деструктуризация объектов===");
const user = {
  name: "Алиса",
  age: 25,
  city: "Москва",
};

// const userName = user.name;
// const userAge = user.age;

// const { name, age, city } = user;
// console.log(name, age, city);

// const { name: fullName, age: years } = user;
// console.log(fullName, years);

// const { name: n, country = "Россия" } = user;
// console.log(n, country);
// console.log("\n===Деструктуризация в параметрах===");

// function printUserOld(user) {
//   console.log(`Имя: ${user.name}`);
//   console.log(`Возраст: ${user.age}`);
//   console.log(`Город: ${user.city}`);
// }

// function printUser({ name, age, city }) {
//   console.log(`Имя: ${name}`);
//   console.log(`Возраст: ${age}`);
//   console.log(`Город: ${city}`);
// }

// printUserOld(user);
// console.log();
// printUser(user);

//practice
// const product = {
//   name: "Смартфон",
//   price: 50000,
//   category: "Электроника",
//   inStock: true
// };
// const { name, price, category, inStock } = product;

// function printProduct({ name, price, category, inStock }) {
  
//   console.log(`Товар: ${name}`);
//   console.log(`Цена: ${price} руб.`);
//   console.log(`Категория: ${category}`);
//   console.log(`В наличии: ${inStock ? "Да" : "Нет"}`);
// }

// printProduct(product);
// console.log("\n===Spread для массивов===");
// const arr1 = [1,2,3];
// const arr2 = [4,5,6];
// const combined = [...arr1, ...arr2];
// console.log("Объединённый массив", combined);
// const copy = [...arr1];
// console.log("копия массива:", copy);
// const extended = [0, ...arr1, 7, 8];
// console.log("Расширенный массив:", extended);
// console.log("\n===Spread для объектов===");

// const person = {
//   name: "Ivan",
//   age: 21,
// };
// const address = {
//   city: "Moscow",
//   street: "Lenin street",
// };
// const fullInfo = {...person, ...address};
// console.log("Full Info:", fullInfo);

// const personCopy = {...person};
// console.log("perosn copy:", personCopy);

// const updated = {...person, age:31, occupation: "developer"};
// console.log("new object: ", updated);

// console.log("\n===rest оператор===");
// function sum(...numbers) {
//   return numbers.reduce((total,num) => total+num, 0);
// };
// console.log("Сумма 1,2,3:", sum(1,2,3));
// console.log("Сумма 1,2,3,4,5:", sum(1,2,3,4,5));

// const numbers = [10,20,30,40,50];
// const [first, second, ...rest] = numbers;
// console.log("first:", first);
// console.log("second:", second);
// console.log("rest:", rest);

const mas1 = [834,276,537];
const mas2 = [334,543,466];
const massives = [...mas1, ...mas2];
function findMax(...numbers) {
  return Math.max(...numbers);
}
console.log(findMax(23,343453,3454));

const obj1 = {
  name: "Leon",
  lastName: "Kennedy",
};
const obj2 = {
  age: 21,
  city: "raccon city",
};
const objects = {...obj1, ...obj2};
console.log(objects);
