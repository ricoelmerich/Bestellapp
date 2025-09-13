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
    let basketRef = document.getElementById('basket');
    basketRef.innerHTML += basketTemplate(dishesIndex);
}

