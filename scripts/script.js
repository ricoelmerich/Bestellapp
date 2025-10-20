let basket = [];

const deliveryFee = 5;

function init() {
  renderCategories();
}

function renderCategories() {
  const categoryRef = document.getElementById("dishes-container");
  let shownCategory = [];

  for (let dishesIndex = 0; dishesIndex < myDishes.length; dishesIndex++) {
    let actualCategory = myDishes[dishesIndex].category;

    if (shownCategory.indexOf(actualCategory) === -1) {
      let imagePath = categoryImages[actualCategory];
      categoryRef.innerHTML += categoryTemplate(actualCategory, imagePath);
      shownCategory.push(actualCategory);
    }

    categoryRef.innerHTML += dishTemplate(dishesIndex);
  }
}


function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1); // Kategorien groß schreiben
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
      quantity: 1,
    });
  }

  renderBasket();
}


function increaseQuantity(dishesIndex) {
  for (let basketIndex = 0; basketIndex < basket.length; basketIndex++) {
    if (basket[basketIndex].index === dishesIndex) {
      basket[basketIndex].quantity++;
      break;
    }
  }
  renderBasket();
}


function decreaseQuantity(dishesIndex) {
  for (let basketIndex = 0; basketIndex < basket.length; basketIndex++) {
    if (basket[basketIndex].index === dishesIndex) {
      basket[basketIndex].quantity--;
      if (basket[basketIndex].quantity <= 0) {
        basket.splice(basketIndex, 1); // Gericht entfernen
      }
      break;
    }
  }
  renderBasket();
}


function renderBasket() {
  let basketItemsRef = document.getElementById("basket-items");
  let basketTotalRef = document.getElementById("basket-total");
  const deliverySwitch = document.getElementById("deliverySwitch");
  basketItemsRef.innerHTML = "";

  let total = 0;

  for (let basketIndex = 0; basketIndex < basket.length; basketIndex++) {
    let item = basket[basketIndex];
    basketItemsRef.innerHTML += selectedDishTemplate(item);
    total += item.price * item.quantity;
  }
  if (deliverySwitch.checked) {
    total += deliveryFee;
  }

  basketTotalRef.innerHTML = `${total.toFixed(2)} €`;
}


function order() {
  let basketRef = document.getElementById("basket");

  if (basket.length > 0) {
    basket = [];
    renderBasket();
    basketRef.innerHTML = "<strong>Danke für die Bestellung</strong>";
  }
}


function toggleMenu() {
  event.stopPropagation();
  const menuRef = document.getElementById("menu");
  menuRef.classList.toggle("display-none");
}


function toggleDelivery() {
  let deliveryCostsRef = document.getElementById("delivery-costs");
  const deliverySwitch = document.getElementById("deliverySwitch");

  if (deliverySwitch.checked) {
    deliveryCostsRef.innerHTML += `<br>${deliveryFee.toFixed(2)} €`;
  } else {
    deliveryCostsRef.innerHTML = `Lieferung`;
  }
  renderBasket();
}


function removeOverlay(event) {
  const menuRef = document.getElementById("menu");
  if (!menuRef.contains(event.target)) {
    menuRef.classList.add("display-none");
  }
}


function removeOverlayOnScroll() {
  const menuRef = document.getElementById("menu");
  if (!menuRef.classList.contains("display-none")) {
    menuRef.classList.add("display-none");
  }
}


function toggleBasket() {
  let basket = document.getElementById("basket");

  if (basket.classList.contains("visible")) {
    basket.classList.remove("visible");
    basket.style.display = "none";
  } else {
    basket.classList.add("visible");
    basket.style.display = "flex";
  }
  moveToggleBasketBtn();
}


function moveToggleBasketBtn() {
  let basketToggleBtn = document.getElementById("basket-toggle");
  basketToggleBtn.classList.toggle("position-top");
}
