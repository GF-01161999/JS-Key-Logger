let keyCode = document.getElementById("keycode-body");
let input = document.getElementsByTagName("input");
let pressedKey = document.getElementById("pressedKey-body");
let keyId = document.getElementById("keyId-body");

window.addEventListener("keydown", function(event){  
    let key = event.key 
    pressedKey.textContent = key; 

    let code = event.keyCode; 
    keyCode.textContent = code; 

    let id = event.code; 
    keyId.textContent = id;
})
