const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","("-")","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]
let passwordEl = document.getElementById("password-el");
console.log(passwordEl)
let passwordEl2 = document.getElementById("password-el2");
console.log(passwordEl2)
let passwordButton = document.getElementById("password-button");
console.log(passwordButton)

passwordButton.addEventListener("click", function () {
    let randomIndexOne = Math.floor(Math.random() * characters.length);
    console.log(randomIndexOne)
    let randomIndexTwo = Math.floor(Math.random() * characters.length);
    console.log(randomIndexTwo)
    passwordEl.textContent = characters[randomIndexOne];
    passwordEl2.textContent = characters[randomIndexTwo];
    renderPassword() 
  });
  function renderPassword() {
    for (let i = 15; i <16; i+=15) {
        passwordEl.textContent += characters[i]
        passwordEl2.textContent += characters[i]
        console.log(renderPassword() )
    }
}
