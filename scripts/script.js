let basket = [];

function init() {
    renderCategories();
}

function renderCategories() {
    const categoryRef = document.getElementById('dishes-container');
    let shownCategory = [];

    for (let dishesIndex = 0; dishesIndex < myDishes.length; dishesIndex++) {
        let actualCategory = myDishes[dishesIndex].category;

        if (shownCategory.indexOf(actualCategory) === -1) {

        categoryRef.innerHTML += categoryTemplate(dishesIndex);
        shownCategory.push(actualCategory);
        }

        categoryRef.innerHTML += dishTemplate(dishesIndex);
    }
}

function addToBasket(dishesIndex) {
       let found = false;
    for (let indexBasket = 0; indexBasket < basket.length; indexBasket++) {
        if (basket[indexBasket].index === dishesIndex) {
            basket[indexBasket].quantity++;
            found = true;
            break;
        }
    }
    if (!found) {
        basket.push({
            index: dishesIndex,
            name: myDishes[dishesIndex].name,
            price: myDishes[dishesIndex].price,
            quantity: 1
        });
    }

    renderBasket();
}

function renderBasket() {
    let basketRef = document.getElementById('basket');
    basketRef.innerHTML = "";

    for (let indexBasket = 0; indexBasket < basket.length; indexBasket++) {
        let item = basket[indexBasket]
        
        basketRef.innerHTML += selectedDishTemplate(item);
    }
}


