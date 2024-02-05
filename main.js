let display = document.getElementById('display');


function appendDisplay(input){
    display.value+=input;
}

function calculateValue(){
    display.value = eval(display.value)
    
}
function clearDisplay(){
    display.value = ''
}