function renderCategories() {
    const categoryRef = document.getElementById('dishes-container');

    for (let categoryIndex = 0; categoryIndex < dishes.length; categoryIndex++) {
        categoryRef += categoryTemplate(categoryIndex);
        
    }
}