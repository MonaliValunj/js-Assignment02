let coinFlip = Math.round(Math.random()*10)
let choice = window.prompt("Head or Tails: (h/t) ")

 /*
 here I am trying to get a number between 0 - 10 
 if the num is < 5  = heads
 if the number is > 5 = tails 

 
  */

if(coinFlip < 5 && choice === "h"){
    document.write("coinFlip: "+ coinFlip + " choice: " + choice + "<br>")
    document.write("The flip was heads and you chose heads...you win!")
}else if(coinFlip < 5 && choice === "t"){
    document.write("coinFlip: "+ coinFlip + " choice: " + choice + "<br>")
    document.write("The flip was heads but you chose tails...you lose!")
} else if(coinFlip > 5 && choice === "t"){
    document.write("coinFlip: "+ coinFlip + " choice: " + choice + "<br>")
    document.write("The flip was tails and you chose tails...you win!")
}else if(coinFlip > 5 && choice === "h"){
    document.write("coinFlip: "+ coinFlip + " choice: " + choice + "<br>")
    document.write("The flip was tails but you chose heads...you lose!")
} else {
    document.write("Invalid Input. Please Enter h/t.")
}