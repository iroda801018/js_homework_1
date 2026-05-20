const products = [
    { id: 1, name: "MacBook Air", price: 1000, rating: 4.8, category: "Laptops" },
    { id: 2, name: "IPone 15", price: 900, rating: 4.5, category: "Phonnes" },  
    { id: 3, name: "Mouse", price: 50, rating: 3.9, category: "Accessories" },
    { id: 4, name: "Monitor", price: 300, raiting: 4.1, category: "Accessories" },
    { id: 5, name: "KeyBoard", price: 80, rating: 4.3, category: "Accessories" }
];

console.log("Товары с высоким рейтингом ( > 4.2) ");
const highRated = products.filter(item => item.rating > 4.2);
console.log(highRated);

console.log("\n Товары из выбранных категорий ");
products.forEach(item => {
    if (item.category === "laptops" || item.category === "phones") {
        console.log(`${item.id}: ${item.name} - ${item.price}`);
    }
});

console.log("\n Цены со скидкой 20% ");
products.forEach(item => {
    let discountPrice = item.price * 0.8; 
    console.log(`${item.price} - ${discountPrice}`);
});
