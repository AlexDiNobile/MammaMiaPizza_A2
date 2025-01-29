//AFRAME is a contant reference to Aframe's global methods and constants
//we need to "register" new components so that Aframe knows what to get are by the HTML definitions
function addSauce(){
    let topping = document.querySelector('#sauceTopping');
    topping.setAttribute('visible', true);
}
function addCheese(){
    let topping = document.querySelector('#cheeseTopping');
    topping.setAttribute('visible', true);
}
function addPepperoni(){
    let topping = document.getElementsByClassName('pepperoniTopping');
    for (var i = 0; i < topping.length; i++) {
        topping[i].setAttribute('visible', true)
    }
}
function addOlives(){
    let topping = document.getElementsByClassName('olivesTopping');
    for (var i = 0; i < topping.length; i++) {
        topping[i].setAttribute('visible', true);
    }
}
function addHam(){
    let topping = document.getElementsByClassName('hamTopping');
    for (var i = 0; i < topping.length; i++) {
        topping[i].setAttribute('visible', true);
    }
}
function addPepper(){
    let topping = document.getElementsByClassName('pepperTopping');
    for (var i = 0; i < topping.length; i++) {
        topping[i].setAttribute('visible', true);
    }
}
function addMeat(){
    let topping = document.getElementsByClassName('meatTopping');
    for (var i = 0; i < topping.length; i++) {
        topping[i].setAttribute('visible', true);
    }
}

function logIt(Pizza){
    console.log(Pizza)
}