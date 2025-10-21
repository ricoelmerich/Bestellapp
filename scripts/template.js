function categoryTemplate(actualCategory, imagePath) {
    return `<div>
    <h2 id="${actualCategory}-section">${capitalize(actualCategory)}</h2>
    <img src="${imagePath}" alt="" class="category-image">
    </div>`
}


function dishTemplate(dishesIndex) {
    return`<div class="dishes">
    <div class="dishes-info">
    <h3>${myDishes[dishesIndex].name} </h3>
    <br> ${myDishes[dishesIndex].price.toFixed(2)} €
    <p>${myDishes[dishesIndex].description}</p>
    </div>
    <button class="add-button" onclick="addToBasket(${dishesIndex})"><img src="assets/favicon/+.png" class="add-button-img" alt=""></button>
    
    </div>`
}


function selectedDishTemplate (item){
    return `<div class="selected-dish">${item.name} ${item.price.toFixed(2)} €
    <span class="quantity">x${item.quantity}<button onclick="decreaseQuantity(${item.index})"><img src="assets/favicon/minus-1270000_640.png" class="basket-quantity-button"></button>
    <button onclick="increaseQuantity(${item.index})"><img src="assets/favicon/+.png" class="basket-quantity-button"></button>
    <button id="${item}-dish" onclick="deleteDish(${item.index})">X</button></span>
    </div>`
}