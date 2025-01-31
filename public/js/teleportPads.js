function teleport(teleName){
    let telePad1 = document.querySelector('#pizzaTelePad'); 
    let telePad2 = document.querySelector('#ovenTelePad'); 
    let telePad3 = document.querySelector('#windowTelePad'); 
    if (window.screen.width < 900 ) {
        console.log("Less than 900");
        telePad1.setAttribute('position', "-4.7 -0.1 0");
        telePad2.setAttribute('position', "1.4 -0.1 0");
        telePad3.setAttribute('position', "0 -0.1 4.4");
    }
    if(window.screen.width >= 900){
        telePad1.setAttribute('position', "-4.7 100 0");
        telePad2.setAttribute('position', "1.4 100 0");
        telePad3.setAttribute('position', "0 100 4.4");
    }
    if(teleName == '#pizzaTelePad'){
        console.log(teleName);
        let player = document.querySelector('#mainCam');
        player.setAttribute('position', "-4.7 2 0");
    }
    if(teleName == '#ovenTelePad'){
        console.log(teleName);
        let player = document.querySelector('#mainCam');
        player.setAttribute('position', "1.4 2 0");
    }
    if(teleName == '#windowTelePad'){
        console.log(teleName);
        let player = document.querySelector('#mainCam');
        player.setAttribute('position', "0 2 4.4");
    }

}