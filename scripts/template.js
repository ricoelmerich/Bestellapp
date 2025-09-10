function categoryTemplate(dishesIndex) {
    return `<div class="background-color-white">
    <h3>${dishes[dishesIndex].category}</h3>
    </div>`
}

function dishTemplate(dishesIndex) {
    return`<div class="background-color-white">${dishes[dishesIndex].name}</div>`
}