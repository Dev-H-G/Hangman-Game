const names = ["ali", "hossein", "davvod", "mahdi", "mohsen", "hasan", "reza", "amirali", "amirhossein", "amirreza", "amirmahdi", "amirmohammad"];
let randomName = "";
let words = [];
let guess = "";
let mistake = 0;
console.log(randomName);
function selectRandom() {
    randomName = names[Math.floor(Math.random() * names.length)];
    document.querySelector(".keyword").addEventListener("click", keyReceiver1)
window.addEventListener("keydown", keyReceiver2)
}
function setUnderLine() {
    let splitedName = randomName.split("");
    let mappedName = splitedName.map(letter => (words.indexOf(letter) >= 0 ? letter : "_"));
    guess = mappedName.join("")
    document.getElementById("kalameh").innerHTML = `<p>${guess}</p>`
}
function checkIfWon() {
    if (randomName === guess) {
        document.getElementById("kalameh").querySelector("p").style.display = "block";
        document.getElementById("image").querySelector("img").src = `assets/winner.png`;
    }
}
function checkIfLost() {
    if (mistake === 6) {
        document.getElementById("kalameh").querySelector("p").style.display = "block";
        document.getElementsByClassName("payam").innerHTML = `<p>Random name is : ${randomName}</p>`
    }

} function picUpdate() {
    let image =document.getElementById("image").querySelector("img");
    image.src = `assets/hangman${mistake}.png`
}
function keyHandler(letter) {
    letter = letter.toLowerCase();
    document.getElementById(letter.toUpperCase()).className = "used";
    words.indexOf(letter) === -1 ? words.push(letter) : null;
    if (randomName.indexOf(letter) >= 0) {
        setUnderLine()
        checkIfWon()
    } else if (randomName.indexOf(letter) === -1) {
        mistake++;
        checkIfLost();
        picUpdate()
    }
}
function keyReceiver1(event) {
    keyHandler(event.target.id)
}
function keyReceiver2(event) {
    keyHandler(event.key)
}

selectRandom()
setUnderLine()
