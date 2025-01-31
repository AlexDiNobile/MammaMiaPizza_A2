//If the add sauce function is called
function addSauce(){
    //get the sauce id
    let topping = document.querySelector('#sauceTopping');
    //Make the sauce visible
    topping.setAttribute('visible', true);
}
//If the add cheese function is called
function addCheese(){
    //get the cheese id
    let topping = document.querySelector('#cheeseTopping');
    //Make the cheese visible
    topping.setAttribute('visible', true);
}
//If the add pepperoni function is called
function addPepperoni(){
    //get the pepperoni class
    let topping = document.getElementsByClassName('pepperoniTopping');
    //Make all the pepperonis visible
    for (var i = 0; i < topping.length; i++) {
        topping[i].setAttribute('visible', true)
    }
}
//If the add olives function is called
function addOlives(){
    //get the olives class
    let topping = document.getElementsByClassName('olivesTopping');
    //Make all the olives visible
    for (var i = 0; i < topping.length; i++) {
        topping[i].setAttribute('visible', true);
    }
}
//If the add ham function is called
function addHam(){
    //get the ham class
    let topping = document.getElementsByClassName('hamTopping');
    //Make all the ham visible
    for (var i = 0; i < topping.length; i++) {
        topping[i].setAttribute('visible', true);
    }
}
//If the add pepper function is called
function addPepper(){
    //get the pepper class
    let topping = document.getElementsByClassName('pepperTopping');
    //Make all the pepper visible
    for (var i = 0; i < topping.length; i++) {
        topping[i].setAttribute('visible', true);
    }
}
//If the add meat function is called
function addMeat(){
    //get the meat class
    let topping = document.getElementsByClassName('meatTopping');
    //Make all the meat visible
    for (var i = 0; i < topping.length; i++) {
        topping[i].setAttribute('visible', true);
    }
}