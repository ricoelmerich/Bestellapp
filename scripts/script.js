function init() {
    renderCategories();
}

function renderCategories() {
    const categoryRef = document.getElementById('dishes-container');
    let shownCategory = [];

    for (let dishesIndex = 0; dishesIndex < dishes.length; dishesIndex++) {
        let actualCategory = dishes[dishesIndex].category;

        if (shownCategory.indexOf(actualCategory) === -1) {
            
        
        categoryRef.innerHTML += categoryTemplate(dishesIndex);
        shownCategory.push(actualCategory);
        }
    }
}