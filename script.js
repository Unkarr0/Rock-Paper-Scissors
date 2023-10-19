
function game()
{

    function getComputerChoice(objects)
    {
        
    
        let object = objects[Math.floor(Math.random()*objects.length)];
        return object;
        
    } 

for (let i=0;i<5;i++)
{
    const objects = Array('paper', 'rock', 'scissors');
    const computerSelection = getComputerChoice(objects);
    console.log(computerSelection);
    const playerSelection = prompt("Paper, rock or scissors?").trim().toLowerCase();
    console.log(playerSelection);

    if(playerSelection === "")
    {
        console.log("No input buddy");
    }
    else
    {
        result = playRound(playerSelection, computerSelection);
        console.log(result);
    }
}


function playRound(playerSelection, computerSelection) {


    if(playerSelection === computerSelection)
    {
        return "Draw! " + playerSelection + " loves " + computerSelection;
    }
    if((playerSelection === "rock" && computerSelection === "paper")||(playerSelection === "paper" && computerSelection === "scissors")||(playerSelection === "scissors" && computerSelection === "rock"))
    {
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }
    else 
    {
        return "You win! " + playerSelection + " beats " + computerSelection;
    }
        
  }
  }
  
game();
