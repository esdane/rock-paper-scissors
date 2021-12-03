const choices = ["rock", "paper", "scissors"];

function computerPlay(){
    return choices[Math.floor(Math.random()*choices.length)]
  }
  
let playerScore = 0
let computerScore = 0

let CountBtnClicks= 0;

const btn = document.querySelectorAll(".btn");
const container = document.querySelector("#container");
const result = document.createElement('div');
result.classList.add("result");

const para =document.createElement("p")
result.appendChild(para)

container.appendChild(result);


function onePlay(){

  btn.forEach((btn) => {
  btn.addEventListener("click", (e) =>{
    
    playerPlay = (e.target.id);
   alert(playRound());

   para.textContent = ("computer score: " + computerScore) + " " + ("player score: "  + playerScore);
  
   CountBtnClicks += 1;
  console.log(CountBtnClicks);

  if(CountBtnClicks === 5){
    result.textContent = para.textContent + winner();
  } else return;

  })
})

}


onePlay();

function winner(){
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

 
function playRound(playerSelection, computerSelection){
    playerSelection =playerPlay.toLowerCase();
    computerSelection= computerPlay();
    console.log("computer played " + computerSelection);

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

  /*alert(playRound())

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
 console.log(winner());*/

 
  


  

 

 