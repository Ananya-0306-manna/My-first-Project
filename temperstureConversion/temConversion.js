//TEMPERATURE CONVERSION

const textBox = document.getElementsByClassName("textBox")[0];
const firstType = document.getElementById("firstType");
const secondType = document.getElementById("secondType");
const ansBox = document.getElementsByClassName("ansBox")[0];

let temp;

function convert(){

    if(firstType.checked){
        temp = Number(textBox.value);
        temp = temp*9/5+32;
        ansBox.textContent = temp.toFixed(1) + " F";
    }
    else if(secondType.checked){
        temp = Number(textBox.value);
        temp = (temp - 32)*(5/9);
        ansBox.textContent = temp.toFixed(1) + " c";
    }
    else{
        ansBox.textContent = "Select a unit";
    }
}