let userName = prompt("Введите ваше имя:");
let userAgeInput = prompt("Введите ваш возраст:");
let userAge = Number(userAgeInput);
if (isNaN(userAge) || userAgeInput === "") {
    alert("Ошибка: Пожалуйста, введите возраст числом!");
} else {
    alert(`Привет, ${userName}! Тебе ${userAge} лет.`);
}


