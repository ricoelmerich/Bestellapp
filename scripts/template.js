function categoryTemplate(dishesIndex) {
    return `<div class="background-color-white">
    <h3>${myDishes[dishesIndex].category}</h3>
    </div>`
}

function dishTemplate(dishesIndex) {
    return`<div class="background-color-white dishes">${myDishes[dishesIndex].name}
    <button onclick="addToBasket(${dishesIndex})"><img src="assets/favicon/+.png" class="button" alt=""></button>
    </div>`
}

function selectedDishTemplate (item){
    return `<div class="selectedDish">${item.name}, ${item.price}
    <span class="quantity">x €${item.quantity}</span>
    </div>`
}