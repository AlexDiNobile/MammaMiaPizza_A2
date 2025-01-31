function teleport(teleName){
    //Get teleporter pad data
    let telePad1 = document.querySelector('#pizzaTelePad'); 
    let telePad2 = document.querySelector('#ovenTelePad'); 
    let telePad3 = document.querySelector('#windowTelePad'); 
    //If the screen is a mobile window
    if (window.screen.width < 900 ) {
        //place all the teleport pads
        telePad1.setAttribute('position', "-4.7 -0.1 0");
        telePad2.setAttribute('position', "1.4 -0.1 0");
        telePad3.setAttribute('position', "0 -0.1 4.4");
    }
    //if the screen is not a window
    if(window.screen.width >= 900){
        //remove all the teleport pads
        telePad1.setAttribute('position', "-4.7 100 0");
        telePad2.setAttribute('position', "1.4 100 0");
        telePad3.setAttribute('position', "0 100 4.4");
    }

    //If the teleport pad clicked is the teleporter pad in front of pizza
    if(teleName == '#pizzaTelePad'){
        //teleport the player to that location
        let player = document.querySelector('#mainCam');
        player.setAttribute('position', "-4.7 2 0");
    }
    //If the teleport pad clicked is the teleporter pad near the oven
    if(teleName == '#ovenTelePad'){
        //teleport the player to that location
        let player = document.querySelector('#mainCam');
        player.setAttribute('position', "1.4 2 0");
    }
    //If the teleport pad clicked is the teleporter pad in front of the window
    if(teleName == '#windowTelePad'){
        //teleport the player to that location
        let player = document.querySelector('#mainCam');
        player.setAttribute('position', "0 2 4.4");
    }

}