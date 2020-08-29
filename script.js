let areasArray = ['Upstage Right', 'Upstage Center', 'Upstage Left','Center Stage Right','Center Stage','Center Stage Left','Downstage Right','Downstage Center', 'Downstage Left']

let rightAnswer = ''

function playGame(){
    document.getElementById('playButton').style.display = 'none';
    let randomNum = Math.floor(Math.random() * Math.floor(9));

    rightAnswer = document.getElementById('TriviaText').innerText = areasArray[randomNum]
    console.log("rightAnswer from playgame()",rightAnswer)
}


function guess(num) {
    console.log("num, rightAnswer", num,rightAnswer)
   if (num === 1 && rightAnswer === "Upstage Right"){
       alert("Correct!, Try another?")
   } else if (num === 2 && rightAnswer === "Upstage Center") {
    alert("Correct!, Try another?")
   } else if (num === 3 && rightAnswer === "Upstage Left") {
    alert("Correct!, Try another?")
   } else if (num === 4 && rightAnswer === "Center Stage Right") {
    alert("Correct!, Try another?")
   } else if (num === 5 && rightAnswer === "Center Stage") {
    alert("Correct!, Try another?")
   } else if (num === 6 && rightAnswer === "Center Stage Left") {
    alert("Correct!, Try another?")
   } else if (num === 7 && rightAnswer === "Downstage Right") {
    alert("Correct!, Try another?")
   } else if (num === 8 && rightAnswer === "Downstage Center") {
    alert("Correct!, Try another?")
   } else if (num === 9 && rightAnswer === "Downstage Left") {
    alert("Correct!, Try another?")
   } else {
       alert("Sorry, that's " + areasArray[num-1] + ". Try again?")
   }

   rightAnswer = ''

   playGame();

}

//Upstage Right, center, left
//Center Stage Right, center stage, center stage left
//downstage right downstage center downstage left