let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];


let lenghtArray = bgColorsArray.length
let buttonElement = document.getElementById("button");
let bgContainerElement = document.getElementById("bgContainer");
let randomNumber = Math.ceil(Math.random() * 10)
console.log(randomNumber)

function changeColor() {
    let randomNumber = Math.ceil(Math.random() * 10)
    console.log(randomNumber)
    if (randomNumber < lenghtArray) {
        bgContainerElement.style.backgroundColor = bgColorsArray[randomNumber];
    }

}