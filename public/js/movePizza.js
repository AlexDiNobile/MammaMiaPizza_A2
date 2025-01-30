function pizzaHold(){
    if(pizza.getAttribute('position') != "10 0 0"){
        let pizza = document.querySelector('#pizza');
        pizza.setAttribute("animation", "property: position; to: 10 0 0; dur: 2000; easing: linear;")

        let pizzacrust = document.querySelector('#crust');
        pizzacrust.setAttribute("animation", "property:material.color; type:color; to:rgb(166,140,121); delay:2000; dur: 2000; easing: linear;")
        let pizzabase = document.querySelector('#pizzaBase');
        pizzabase.setAttribute("animation", "property: material.color; type:color; to:rgb(183,163,147); delay:2000; dur: 2000; easing: linear;")
        console.log(pizza.getAttribute('position').x);
    }
    if(pizza.getAttribute('position').x === 10){
        pizza.setAttribute("animation", "property: position; to: 10 0 4; dur: 2000; easing: linear;")
        console.log("The Pizza is here");
    }
    if(pizza.getAttribute('position').z === 4){
        pizza.setAttribute("animation", "property: position; to: 10 0 4; dur: 2000; easing: linear;")
        console.log("The Pizza is here2");
        pizza.setAttribute('visible', false);
        pizza.setAttribute('position', "0 100 0");
        let pizzaBox = document.querySelector('#pizzaBox');
        pizzaBox.setAttribute('visible', true);
    
    
        let pizzaDevliver = document.querySelector('#deliveryWindow');
        pizzaDevliver.setAttribute('position', "0 -1.8 0");
    }

}



function pizzaDeliver(){
    let newPizzaButton = document.querySelector('#newPizzaButton');
    newPizzaButton.setAttribute('visible', true);
    newPizzaButton.setAttribute('position', "1.5 0 0.25");

    let pizzaBox = document.querySelector('#pizzaBox');
    pizzaBox.setAttribute('visible', false);


    let pizzaDeliver = document.querySelector('#deliveryWindow');
    pizzaDeliver.setAttribute('position', "0 100 0");

    let pizzacrust = document.querySelector('#crust');
    pizzacrust.setAttribute("animation", "property: material.color; type:color; to:rgb(206,174,149); dur: 0; easing: linear;")
    let pizzabase = document.querySelector('#pizzaBase');
    pizzabase.setAttribute("animation", "property: material.color; type:color; to:rgb(244,217,196); dur: 0; easing: linear;")

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

//function pizzaHold(){
    //FRAME.registerComponent('rotation-reader', {
        //tick: function () {
          //console.log(this.el.object3D.position);
        //}
      //});
//}