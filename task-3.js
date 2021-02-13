let input = prompt('Please sign in');
const ADMIN_PASSWORD = 'goIt';
let message;

if (input === null) {
  message = 'Отменено пользователем';
} else if (input === ADMIN_PASSWORD) {
  message = 'Добро пожаловать';
} else {
  message = 'Доступ запрещён, неверный пароль!';
}

alert(message);
