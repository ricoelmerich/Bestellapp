function categoryTemplate(actualCategory, imagePath) {
    return `<div>
    <h3>${capitalize(actualCategory)}</h3>
    <img src="${imagePath}" alt="" class="category-image">
    </div>`
}

function dishTemplate(dishesIndex) {
    return`<div class="dishes">
    <div class="dishes-info">
    <h3>${myDishes[dishesIndex].name} </h3>
    <br> ${myDishes[dishesIndex].price}€
    <p>${myDishes[dishesIndex].description}</p>
    </div>
    <button class="add-button" onclick="addToBasket(${dishesIndex})"><img src="assets/favicon/+.png" class="add-button-img" alt=""></button>
    
    </div>`
}

function selectedDishTemplate (item){
    return `<div class="selectedDish">${item.name}, ${item.price}€
    <span class="quantity">x${item.quantity}<button onclick="decreaseQuantity(${item.index})">-</button><button onclick="increaseQuantity(${item.index})">+</button></span>
    </div>`
}