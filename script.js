
function game()
{





    
    

    let rock = document.querySelector("#rock");
    let paper = document.querySelector("#paper");
    let scissors = document.querySelector("#scissors");

    const p = document.createElement("p");
    const score = document.createElement("p");
    score.style.textAlign = "center";
    const display = document.querySelector("#display");

    let points = 0;
   
    
      function playRound(playerSelection) {

        const objects = Array('paper', 'rock', 'scissors');

        function getComputerChoice(objects)
        {
            
        
            let object = objects[Math.floor(Math.random()*objects.length)];
            return object;
            
        } 

        const computerSelection = getComputerChoice(objects);
        console.log(computerSelection);
   
   
        score.innerHTML = "Score: " + points;
       

        if(points === 5)
        {
          p.innerText = "You won the game! Congrats!";
          document.body.style.backgroundColor = "#9e66e3";

          display.appendChild(p);
        }
        else
        {
          if(playerSelection === computerSelection)
          {
              p.innerText = "Draw! " + playerSelection + " loves " + computerSelection;
  
              document.body.style.backgroundColor = "#fffd91";

              points = points + 0;

              display.appendChild(score);
              display.appendChild(p);
             
              console.log(playerSelection);
              
  
          }
          if((playerSelection === "rock" && computerSelection === "paper")||(playerSelection === "paper" && computerSelection === "scissors")||(playerSelection === "scissors" && computerSelection === "rock"))
          {
              p.innerText = "You lose! " + computerSelection + " beats " + playerSelection;
              document.body.style.backgroundColor = "#cc6056";

              points = points + 0;

              display.appendChild(score);
              display.appendChild(p);
              
              console.log(playerSelection);
          }
          else if((playerSelection === "paper" && computerSelection === "rock")||(playerSelection === "scissors" && computerSelection === "paper")||(playerSelection === "rock" && computerSelection === "scissors"))
          {
              p.innerText = "You win! " + playerSelection + " beats " + computerSelection;
              document.body.style.backgroundColor = "#8bc981";

              points = points + 1;

              display.appendChild(score);
              display.appendChild(p);
              
              console.log(playerSelection);
          }
        }
 

 
        console.log(points);
      
    }

    

    rock.addEventListener('click', function()
    {
      playRound("rock")
    }
    )
    paper.addEventListener('click', function()
    {
      playRound("paper")
    }
    )
    scissors.addEventListener('click', function()
    {
      playRound("scissors")
    }
    )


  }
    
game()

//I did this project