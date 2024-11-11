//RANDOM PASSWORD GENERATOR

const inputPassEl = document.getElementById('inputPassword');
const lengthEl = document.getElementById('length');
const LlettersEl = document.getElementById('Lletters');
const UlettersEl = document.getElementById('Uletters');
const numberEl = document.getElementById('number');
const symbolsEl = document.getElementById('symbols');
const buttonEl = document.getElementById('clickbutton');

const randomFunction = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number:getRandomNumber,
    symbol:getRandomSymbols
};

buttonEl.addEventListener(`click`, () =>{
    const length = +lengthEl.value;
    const hasLower = LlettersEl.checked;
    const hasUpper = UlettersEl.checked;
    const hasNumber = numberEl.checked;
    const hasSymbol = symbolsEl.checked;

    inputPassEl.innerText = generatePassword( 
        hasLower,
        hasUpper, 
        hasSymbol,
        hasNumber,
        length
        );
});

function generatePassword(lower, upper, symbol, number, length){
    let generatePassword = '';

    const typesCount = lower + upper + symbol + number;
    
    const typesArr = [{ lower },{ upper },{ symbol },{ number }].filter
    (
        item => Object.values(item)[0]
        );
    console.log(`typesArr: `, typesArr);
    if(typesCount === 0){
        return ``;
    }


    for(let i = 0; i < length; i += typesCount){
        typesArr.forEach(type => {
           const funcName = Object.keys(type)[0];

           generatePassword += randomFunction[funcName]();
        });
    }


    const finalPassword = generatePassword.slice(0, length);
    return finalPassword;
}


function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random()*26)+97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random()*26)+65);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random()*10)+48);
}

function getRandomSymbols() {
    const symbols = `!@#$%&*+=?/\(){}^`;
    return symbols [Math.floor(Math.random() * symbols.length)]
}

                    
