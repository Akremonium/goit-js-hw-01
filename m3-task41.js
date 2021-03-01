const atTheOldToad = {
  potions: [
    { name: 'Зелье скорости', price: 460 },
    { name: 'Дыхание дракона', price: 780 },
    { name: 'Каменная кожа', price: 520 },
  ],
  // Пиши код ниже этой строки
  getPotions() {
    return this.potions;
  },
  addPotion(potionName) {
    if (this.potions.includes(potionName)) {
      return `Зелье ${potionName} уже есть в инвентаре!`;
    }

    this.potions.push(potionName);
  },
  removePotion(potionName) {
    const { potions } = this;
    const potionsNames = [];

    for (const potion of potions) {
      potionsNames.push(potion.name);
    }
    if (!potionsNames.includes(potionName)) {
      return `Зелья ${potionName} нет в инвентаре!`;
    }

    for (let i = 0; i < potions.length; i += 1) {
      if (potions[i].name === potionName) {
        potions.splice(i, 1);
      }
    }
  },
  updatePotionName(oldName, newName) {
    const { potions } = this;
    const potionsNames = [];

    for (const potion of potions) {
      potionsNames.push(potion.name);
    }
    if (!potionsNames.includes(oldName)) {
      return `Зелья ${oldName} нет в инвентаре!`;
    }

    for (let i = 0; i < this.potions.length; i += 1) {
      if (potions[i].name === oldName) {
        potions[i].name = newName;
      }
    }
  },
};

console.log(atTheOldToad.addPotion({ name: 'Невидимка', price: 620 }));

console.log(atTheOldToad.addPotion({ name: 'Зелье силы', price: 270 }));

console.log(atTheOldToad.removePotion('Дыхание дракона'));

console.log(atTheOldToad.removePotion('Зелье скорости'));

// console.log(atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф'));

console.log(atTheOldToad.getPotions());

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Пиши код ниже этой строки
//   const values = [];
//   for (const product of products) {
//     const keys = Object.keys(product);
//     for (const key of keys) {
//       if (key === propName) {
//         values.push(product[key]);
//       }
//     }
//   }
//   return values;
// }

// console.log(getAllPropValues(price));
