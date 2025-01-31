function pizzaHold(){
    //If the pizza is at the starting position
    if(pizza.getAttribute('position').x === 0){
        //get the pizza is
        let pizza = document.querySelector('#pizza');
        //animate the pizza moving into the oven
        pizza.setAttribute("animation", "property: position; to: 10 0 0; dur: 2000; easing: linear;")
        
        //change the color of the crust
        let pizzacrust = document.querySelector('#crust');
        pizzacrust.setAttribute("animation", "property:material.color; type:color; to:rgb(155, 110, 78); delay:2000; dur: 2000; easing: linear;")
        //change the color of the pizza base
        let pizzabase = document.querySelector('#pizzaBase');
        pizzabase.setAttribute("animation", "property: material.color; type:color; to:rgb(153, 128, 108); delay:2000; dur: 2000; easing: linear;")
        //change the color of the cheese
        let cheese = document.querySelector('#cheeseTopping');
        cheese.setAttribute("animation", "property: material.color; type:color; to:rgb(204, 139, 64); delay:2000; dur: 2000; easing: linear;")
        //change the color of the sauce
        let sauce = document.querySelector('#sauceTopping');
        sauce.setAttribute("animation", "property: material.color; type:color; to:rgb(139, 37, 37); delay:2000; dur: 2000; easing: linear;")

        //hide and move the menu so that the user cannot touch it while cooking the pizzza
        let toppingPanel = document.querySelector('#toppingsPanel');
        toppingPanel.setAttribute('visible', false);
        toppingPanel.setAttribute('position', "-5 3.5 100");

        //play the pizza sizzle sound after the pizza is under the oven
        let pizzaSizzle = document.querySelector('#cookingSound');
        setTimeout(function() {
            pizzaSizzle.play();
          }, 2000);
    }
    //if the pizza is already under the oven
    if(pizza.getAttribute('position').x === 10){
        //move it out from under the oven to the ending location
        pizza.setAttribute("animation", "property: position; to: 10 0 4; dur: 2000; easing: linear;");
    }
    //if the pizza is at the ending location
    if(pizza.getAttribute('position').z === 4){
        //hide and move the pizza so the player cannot touch it
        pizza.setAttribute('visible', false);
        pizza.setAttribute('position', "0 100 0");
        //Make the pizza box visible
        let pizzaBox = document.querySelector('#pizzaBox');
        pizzaBox.setAttribute('visible', true);
        
        //Make the pizza delivery window avaliable to the player
        let pizzaDevliver = document.querySelector('#deliveryWindow');
        pizzaDevliver.setAttribute('position', "0 -1.8 0");
    }

}
//if the player delivers the pizza
function pizzaDeliver(){
    //make the new pizza button visible on the menu
    let newPizzaButton = document.querySelector('#newPizzaButton');
    newPizzaButton.setAttribute('visible', true);
    newPizzaButton.setAttribute('position', "1.5 0 0.25");

    //hide the pizza box
    let pizzaBox = document.querySelector('#pizzaBox');
    pizzaBox.setAttribute('visible', false);

    //make the topping panels visible
    let toppingPanel = document.querySelector('#toppingsPanel');
    toppingPanel.setAttribute('visible', true);
    toppingPanel.setAttribute('position', "-5 3.5 -7");

    //turn the cheese back to uncooked
    let cheese = document.querySelector('#cheeseTopping');
    cheese.setAttribute("animation", "property: material.color; type:color; to:rgb(255, 255, 255); dur: 0; easing: linear;");

    //turn the sauce back to uncooked
    let sauce = document.querySelector('#sauceTopping');
    sauce.setAttribute("animation", "property: material.color; type:color; to:rgb(166, 50, 50); dur: 0; easing: linear;");

    //turn the crust back to uncooked
    let pizzacrust = document.querySelector('#crust');
    pizzacrust.setAttribute("animation", "property: material.color; type:color; to:rgb(206,174,149); dur: 0; easing: linear;");

    //turn the pizza base back to uncooked
    let pizzabase = document.querySelector('#pizzaBase');
    pizzabase.setAttribute("animation", "property: material.color; type:color; to:rgb(244,217,196); dur: 0; easing: linear;");

    
    //hide the pizza delivery window
    let pizzaDeliver = document.querySelector('#deliveryWindow');
    pizzaDeliver.setAttribute('position', "0 100 0");

}
//if the new pizza button is clicked
function makeNewPizza(){
    //hide the new pizza button
    let newPizzaButton = document.querySelector('#newPizzaButton');
    newPizzaButton.setAttribute('visible', false);
    newPizzaButton.setAttribute('position', "-3 100 8");

    //make the pizza base reappear on the table
    let pizza = document.querySelector('#pizza');
    pizza.setAttribute('visible', true);
    pizza.setAttribute('position', '0 0 0');

    //hide the pizza toppings
    //hide the sauce
    let sauce = document.querySelector('#sauceTopping');
    sauce.setAttribute('visible', false);

    //hide the cheese
    let cheese = document.querySelector('#cheeseTopping');
    cheese.setAttribute('visible', false);
    
    //hide all the pepperoni
    let pepperoni = document.getElementsByClassName('pepperoniTopping');
    for (var i = 0; i < pepperoni.length; i++) {
        pepperoni[i].setAttribute('visible', false)
    }
    //hide all the olives
    let olives = document.getElementsByClassName('olivesTopping');
    for (var i = 0; i < olives.length; i++) {
        olives[i].setAttribute('visible', false);
    }
    //hide all the ham
    let ham = document.getElementsByClassName('hamTopping');
    for (var i = 0; i < ham.length; i++) {
        ham[i].setAttribute('visible', false);
    }
    //hide all the peppers
    let pepper = document.getElementsByClassName('pepperTopping');
    for (var i = 0; i < pepper.length; i++) {
        pepper[i].setAttribute('visible', false);
    }
    //hide all the meat
    let meat = document.getElementsByClassName('meatTopping');
    for (var i = 0; i < meat.length; i++) {
        meat[i].setAttribute('visible', false);
    }
}