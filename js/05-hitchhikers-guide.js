let response = window.prompt("Are you ready to play?(yes/no)");

if(response === "yes"){
    window.alert("You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall.") 
    let direction = window.prompt("Which direction would you like to head (please enter forward, left, or right).")  

    switch(direction) {
        case "forward":
          window.alert("You walk 100 yards and safely make your way out of the cave.")
          break;
        case "left":
          window.alert("Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown!")
          break;
        case "right":
          window.alert("You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever!")
          break;
          default: 
          window.alert("The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option.")
          console.log(rating)       
      } // end of switch loop
      let rating = window.prompt("Great job playing!! /n How would you rate the game (on a scale of 1 to 10)?")

          if(rating >= 6 && rating <=10){
            window.alert("Thank you!! Play again!")
          }else if(rating <= 5){
            window.alert("Thank you!! We are working hard to improve the game.")
          }else{
            window.alert("Thanks for playing.s")
          } // of checking raing
      //window.alert("Game is over.") 
}else{
    window.alert("Thank you! Play again sometime.")
}