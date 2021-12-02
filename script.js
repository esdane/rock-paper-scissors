const choices = ["rock", "paper", "scissors"];

function computerPlay(){
    return choices[Math.floor(Math.random()*choices.length)]
  }

let playerScore = 0
let computerScore = 0
 
function playRound(playerSelection, computerSelection){
    playerPlay =  prompt("What do you play?\n\n(Rock, Paper, or Scissors):","");
    playerSelection =playerPlay.toLowerCase();
    computerSelection= computerPlay();

    if (playerSelection==computerSelection){
      return("It's a tie");
    } else if (playerSelection=="rock"){
          if (computerSelection=="scissors"){
            playerScore = ++playerScore;
        return("You win! Rock smashes scissors");
        
        } else {
          computerScore = ++computerScore;
          return("You lose! Paper covers rock"); 
        } 
    } else if (playerSelection=="paper"){
          if (computerSelection=="scissors"){
            computerScore = ++computerScore;
        return("You lose! Scissors cuts paper");
        } else {
          playerScore = ++playerScore;
          return("You win! Paper covers rock");
        } 
    } else if (playerSelection=="scissors"){
          if (computerSelection=="paper"){
            playerScore = ++playerScore;
        return("You win! Scissors cuts paper");
        } else {
          computerScore = ++computerScore;
          return("You lose! Rock smashes scissors"); 
        }           
    }
  }

 function game(){
   for(i=0;i<5;i++){
     alert(playRound());
     console.log("computer score: " + computerScore);
    console.log("player score: "  + playerScore);
   }
 }

 function winner(){
   game();
   if (playerScore===computerScore){
      alert("THIS ROUND IS A TIE" + "\n" + "\n" + playerScore +":"+ computerScore);
     return("THIS ROUND IS A TIE" + "\n" + "\n" + playerScore +":"+ computerScore);
   } else if (playerScore<computerScore){
        alert("YOU LOST THIS ROUND" + "\n" + "\n" + playerScore +":"+ computerScore);
      return("YOU LOST THIS ROUND" + "\n" + "\n" + playerScore +":"+ computerScore);
   } else {
        alert("YOU WON THIS ROUND" + "\n" + "\n" + playerScore +":"+ computerScore);
      return("YOU WON THIS ROUND" + "\n" + "\n" + playerScore +":"+ computerScore);
   }
 }
 console.log(winner());

 
  


  

 

 