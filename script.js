let areasArray = ['Upstage Right', 'Upstage Center', 'Upstage Left','Center Stage Right','Center Stage','Center Stage Left','Downstage Right','Downstage Center', 'Downstage Left']

let rightAnswer = ''

function playGame(){

    let randomNum = Math.floor(Math.random() * Math.floor(9));

    rightAnswer = document.getElementById('TriviaText').innerText = areasArray[randomNum]

}

let button1 = "Upstage Right"
let button2 = "Upstage Center"
let button3 = "Upstage Left"
let button4 = "Center Stage Right"
let button5 = "Center Stage"
let button6 = "Center Stage Left"
let button7 = "Downstage Right"
let button8 = "Downstage Center"
let button9 = "Downstage Left"

function guess(num) {
   if (num === 1 && rightAnswer === "Upstage Right"){
       alert("Correct!")
   } 
}

//Upstage Right, center, left
//Center Stage Right, center stage, center stage left
//downstage right downstage center downstage left