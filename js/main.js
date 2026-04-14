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
// console.log("\n===Деструктуризация объектов===");
// const user = {
//   name: "Алиса",
//   age: 25,
//   city: "Москва",
// };

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

// const mas1 = [834,276,537];
// const mas2 = [334,543,466];
// const massives = [...mas1, ...mas2];
// function findMax(...numbers) {
//   return Math.max(...numbers);
// }
// console.log(findMax(23,343453,3454));

// const obj1 = {
//   name: "Leon",
//   lastName: "Kennedy",
// };
// const obj2 = {
//   age: 21,
//   city: "raccon city",
// };
// const objects = {...obj1, ...obj2};
// console.log(objects);

// import { greet, add, PI } from "./utils";
// console.log("Modules:");
// console.log(greet("Leon"));
// console.log("5+3=", add(5,3));
// console.log(PI);

// import { multiply as умножить } from "./utils";
// console.log("4*7=", умножить(4,7));

// import * as Utils from "./utils.js";
// console.log(Utils.greet("Scott"));
// console.log("Умножение:", Utils.multiply(3,9));

// import { cube, square, E } from "./math.js";
// console.log("cube:",cube(3));
// console.log("square:",square(3));
// console.log("const:",E);

// console.log("promises");
// const simplePromise = new Promise((resolve, reject) => {
//   const success = true;
//   if (success) {
//     resolve("great!");
//   } else {
//     reject("error");
//   }
// });
// simplePromise
// .then((result) => console.log("result:", result))
// .catch((error) => console.log("Error:", error));

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`прошло ${ms} миллисекунд`);
    }, ms);
  });
}
// delay(1000)
// .then((message) => console.log(message));

// function fetchUserData(userId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(userId > 0) {
//           resolve({
//             id: userId,
//             name: "van Ivanov",
//             email: "abc@mail.com",
//           });
//         } else {reject("error");}
//     }, 1500);
//   })
// }
// fetchUserData(1) 
// .then((user) => console.log("user:", user))
// .catch((error) => console.log("error:", error));

// function step1() {
//   return new Promise((resolve) => {
//     setTimeout(() =>resolve(`шаг 1 завершен`), 500);
//   });
// }

// function step2(previousRes) {
//   return new Promise((resolve) => {
//     setTimeout(() =>resolve(`${previousRes} -> шаг 2 завершен`), 500);
//   });
// }

// function step2(previousRes) {
//   return new Promise((resolve) => {
//     setTimeout(() =>resolve(`${previousRes} -> шаг 3 завершен`), 500);
//   });
// }

// step1()
// .then((result1) => step2(result1))
// .then((result2) => step3(result2))
// .then((finalRes) => console.log("final Res", finalRes))
// .catch((error) => console.log("ошибка в цепочке", error));

// function checkInventory(produc, inStock) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (inStock) {
//         resolve(`товар в наличии`);
//       } else {
//           reject(`Товара нет на складе`);
//       }
//     },1000);
//   })
// }

// checkInventory("phone", true)
// .then((message) => console.log(message))
// .catch(error => console.error(error));

//lab 25

// console.log("async/await");

// async function greet() {
//   return "Hi!";
// }

// greet().then((message) => console.log(message));
// function getWeather() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({temp: 22, condition: "sunny"});
//     }, 1000);
//   });
// }

// async function showWeather() {
//   console.log("loading...");
//   const weather = await getWeather();
//   console.log(`temp: ${weather.temp}C, ${weather.condition}`);
// }
// showWeather();

// async function fetchData(shoudFail) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (shoudFail) {
//         reject("loading error");
//       } else {
//         resolve({data: "data"});
//       }
//     },800);
//   });
// }
// async function getData() {
//   try {
//     const res = await fetchData(false);
//     console.log("great:", res.data);

//     const failedRes = await fetchData(true);
//     console.log("error of start :)");
//   } catch(error) {
//     console.log("error:", error);
//   }
// }
// getData();

async function cookDinner() {
  console.log("stat cooking");

  const pasta = await Delay(1000).then(() => "pasta complete");
  console.log(pasta);

  
  const souse = await Delay(500).then(() => "souse complete");
  console.log(souse);

  
  const salad = await Delay(700).then(() => "salad complete");
  console.log(salad);
  console.log("Pasta is ready");

}
cookDinner().then((result) => console.log(result));

async function cookDinnerFast() {
  console.log("Готовим всё одновременно");

  const [pasta, souse, salad] = await Promise.all([
    delay(1000).then(() => "pasta is ready"),
    delay(500).then(() => "souse is ready"),
    delay(700).then(() => "salad is ready"),

  ]);
  console.log(pasta, souse, salad);
  return "ужин готов быстрее";
}
cookDinnerFast().then((result) => console.log(result));
//no practice 10.3