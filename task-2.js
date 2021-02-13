const total = 100;
let ordered = 50;
let message;

message =
  ordered > total
    ? 'На складе недостаточно товаров!'
    : 'Заказ оформлен, с вами свяжется менеджер';

console.log(message);

ordered = 20;
message =
  ordered > total
    ? 'На складе недостаточно товаров!'
    : 'Заказ оформлен, с вами свяжется менеджер';
console.log(message);

ordered = 30;
message =
  ordered > total
    ? 'На складе недостаточно товаров!'
    : 'Заказ оформлен, с вами свяжется менеджер';
console.log(message);

ordered = 130;
message =
  ordered > total
    ? 'На складе недостаточно товаров!'
    : 'Заказ оформлен, с вами свяжется менеджер';
console.log(message);
