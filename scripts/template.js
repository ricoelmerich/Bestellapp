function categoryTemplate(dishesIndex, imagePath) {
    return `<div class="background-color-white">
    <h3>${myDishes[dishesIndex].category}</h3>
    <img src="${imagePath}" alt="" class="category-image">
    </div>`
}

function dishTemplate(dishesIndex) {
    return`<div class="background-color-white dishes">${myDishes[dishesIndex].name}
    <button onclick="addToBasket(${dishesIndex})"><img src="assets/favicon/+.png" class="button" alt=""></button>
    </div>`
}

function selectedDishTemplate (item){
    return `<div class="selectedDish">${item.name}, ${item.price}€
    <span class="quantity">x${item.quantity}<button onclick="decreaseQuantity(${item.index})">-</button><button onclick="increaseQuantity(${item.index})">+</button></span>
    </div>`
}