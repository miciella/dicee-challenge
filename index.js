
let randomNumber1 = Math.floor((Math.random()*6)+1)

let randomDiceImage = "dice"+randomNumber1+".png"
let img1 = document.querySelectorAll("img")[0]
img1.setAttribute("src", randomDiceImage)

let img2 = document.querySelectorAll("img")[1]
let randomNumber2 = Math.floor((Math.random()*6)+1)
let randomDiceImage2 = "dice"+randomNumber2+".png"
img2.setAttribute("src", randomDiceImage2)

let getTag = document.querySelector("h1")

if(randomNumber1 > randomNumber2){
    getTag.innerHTML = "🚩 Player 1 wins! "
}else if(randomNumber2 > randomNumber1){
    getTag.innerHTML = "Player 2 wins! 🚩"
}else{
    getTag.innerHTML = "Draw!"
}
