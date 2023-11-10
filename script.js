let car = {
  name: "Mers",
  year: 2023,
  color: "Black",
};

let { name: model, weight = 2000, ...cars } = car;
console.log(weight, cars);

function sum(name, surname, ...args) {
  let sum = 0;

  args.forEach((el) => (sum += el));

  return sum;
}

console.log(sum("Rasuljon", "Adhamov", 3, 4, 5));
