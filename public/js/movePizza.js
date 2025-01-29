function pizzaHold(){
    let pizza = document.querySelector('#pizza');
    pizza.setAttribute('visible', false);
    pizza.setAttribute('position', "0 100 0");
    let pizzaBox = document.querySelector('#pizzaBox');
    pizzaBox.setAttribute('visible', true);

    let pizzaDevliver = document.querySelector('#deliveryWindow');
    pizzaDevliver.setAttribute('position', "0 -1.8 0");
}
function pizzaDeliver(){
    let newPizzaButton = document.querySelector('#newPizzaButton');
    newPizzaButton.setAttribute('visible', true);
    newPizzaButton.setAttribute('position', "1.5 0 0.25");

    let pizzaBox = document.querySelector('#pizzaBox');
    pizzaBox.setAttribute('visible', false);

    let pizzaDevliver = document.querySelector('#deliveryWindow');
    pizzaDevliver.setAttribute('position', "0 100 0");
}
function makeNewPizza(){
    let pizza = document.querySelector('#pizza');
    pizza.setAttribute('visible', true);
    pizza.setAttribute('position', '0 0 0');

    let sauce = document.querySelector('#sauceTopping');
    sauce.setAttribute('visible', false);

    let newPizzaButton = document.querySelector('#newPizzaButton');
    newPizzaButton.setAttribute('visible', false);
    newPizzaButton.setAttribute('position', "-3 100 8");

    let cheese = document.querySelector('#cheeseTopping');
    cheese.setAttribute('visible', false);
    
    let pepperoni = document.getElementsByClassName('pepperoniTopping');
    for (var i = 0; i < pepperoni.length; i++) {
        pepperoni[i].setAttribute('visible', false)
    }

    let olives = document.getElementsByClassName('olivesTopping');
    for (var i = 0; i < olives.length; i++) {
        olives[i].setAttribute('visible', false);
    }

    let ham = document.getElementsByClassName('hamTopping');
    for (var i = 0; i < ham.length; i++) {
        ham[i].setAttribute('visible', false);
    }

    let pepper = document.getElementsByClassName('pepperTopping');
    for (var i = 0; i < pepper.length; i++) {
        pepper[i].setAttribute('visible', false);
    }

    let meat = document.getElementsByClassName('meatTopping');
    for (var i = 0; i < meat.length; i++) {
        meat[i].setAttribute('visible', false);
    }
}

function pizzaAnimation(){

}

//function pizzaHold(){
    //FRAME.registerComponent('rotation-reader', {
        //tick: function () {
          //console.log(this.el.object3D.position);
        //}
      //});
//}