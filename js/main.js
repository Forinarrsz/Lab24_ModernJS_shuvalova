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
const product = {
  name: "Смартфон",
  price: 50000,
  category: "Электроника",
  inStock: true
};
const { name, price, category, inStock } = product;

function printProduct({ name, price, category, inStock }) {
  
  console.log(`Товар: ${name}`);
  console.log(`Цена: ${price} руб.`);
  console.log(`Категория: ${category}`);
  console.log(`В наличии: ${inStock ? "Да" : "Нет"}`);
}

printProduct(product);
