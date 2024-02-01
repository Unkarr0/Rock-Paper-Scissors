
function game()
{



  const objects = Array('paper', 'rock', 'scissors');

    function getComputerChoice(objects)
    {
        
    
        let object = objects[Math.floor(Math.random()*objects.length)];
        return object;
        
    } 

    let points = 0;



      const computerSelection = getComputerChoice(objects);
      console.log(computerSelection);
  
  
 

    let rock = document.querySelector("#rock");
    let paper = document.querySelector("#paper");
    let scissors = document.querySelector("#scissors");

    const p = document.createElement("p");
    const score = document.createElement("p");
    const display = document.querySelector("#display");

   


    function playRound(playerSelection, computerSelection) {

     
        if(playerSelection === computerSelection)
        {
            p.innerText = "Draw! " + playerSelection + " loves " + computerSelection;

            document.body.style.backgroundColor = "#fffd91";

            display.appendChild(p);

        }
        if((playerSelection === "rock" && computerSelection === "paper")||(playerSelection === "paper" && computerSelection === "scissors")||(playerSelection === "scissors" && computerSelection === "rock"))
        {
            p.innerText = "You lose! " + computerSelection + " beats " + playerSelection;
            document.body.style.backgroundColor = "#cc6056";
            display.appendChild(p);
        }
        else if((playerSelection === "paper" && computerSelection === "rock")||(playerSelection === "scissors" && computerSelection === "paper")||(playerSelection === "rock" && computerSelection === "scissors"))
        {
            p.innerText = "You win! " + playerSelection + " beats " + computerSelection;
            document.body.style.backgroundColor = "#8bc981"
            ;
            display.appendChild(p);
        }
    
      }




      rock.addEventListener('click', function()
      {
        playRound("rock", computerSelection)
      }
      )
      paper.addEventListener('click', function()
      {
        playRound("paper", computerSelection)
      }
      )
      scissors.addEventListener('click', function()
      {
        playRound("scissors", computerSelection)
      }
      )

   


    



  }
    

game()

//I did this project