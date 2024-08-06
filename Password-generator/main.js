const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordEl = document.getElementById("password-el");
console.log(passwordEl)
let passwordEl2 = document.getElementById("password-el2");
console.log(passwordEl2)
let passwordButton = document.getElementById("password-button");
console.log(passwordButton)
function generateRandomPassword() {
    let password = '';
    for (let i = 0; i < 16; i++) { // Adjust the length as needed
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}
console.log(generateRandomPassword())
function givePassword() {
    passwordButton.addEventListener("click", function() {
        const password1 = generateRandomPassword();
        const password2 = generateRandomPassword();
        passwordEl.textContent = password1;
    passwordEl2.textContent = password2;
    });
}
givePassword()
/*
const characters = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
    "U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n",
    "o","p","q","r","s","t","u","v","w","x","y","z", "0","1","2","3","4","5","6","7",
    "8","9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[",
    "}","}",",","|",":",";","<",">",".","?","/"
];

let passwordEl = document.getElementById("password-el");
let passwordEl2 = document.getElementById("password-el2");
let passwordButton = document.getElementById("password-button");

function generateRandomPassword() {
    let password = '';
    for (let i = 0; i < 12; i++) { // Adjust the length as needed
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}

function givePassword() {
    passwordButton.addEventListener("click", function() {
        const password1 = generateRandomPassword();
        const password2 = generateRandomPassword();
        passwordEl.textContent = password1;
        passwordEl2.textContent = password2;
    });
}

// Initialize event listener
givePassword();
*/