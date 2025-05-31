let userscore = 0;
let compscore = 0;

let z = document.querySelector("#userscore");
let y = document.querySelector("#computerscore");
let w = document.querySelector("#msg")

let choicess = document.querySelectorAll(".choice");


const computerchoice = () => {
    const options = ["rock" , "paper","scissor"];
    let a = Math.floor(Math.random()*3);
    return options[a];
}

const scorecalulator = (userchoice , b) =>{
     if(userchoice === "rock" && b === "rock" )
     {
          w.innerText = "Both choose ROCK match tied...play next round";
          w.style.backgroundColor = "white";
          w.style.Color = "black";
     }

     if(userchoice === "paper" && b === "paper" )
     {
          w.innerText = "Both choose PAPER match tied...play next round";
          w.style.backgroundColor = "white";
          w.style.Color = "black";
     }

     if(userchoice === "scissor" && b === "scissor" )
     {
          w.innerText = "Both choose SCISSOR match tied...play next round";
          w.style.backgroundColor = "white";
          w.style.Color = "black";
     }
     
     if(userchoice === "paper" && b === "rock" )
     {
          userscore++;
          z.innerText = userscore;
          w.innerText = "User choose PAPER and computer choose ROCK .....User won this round...Play next round";
          w.style.backgroundColor = "forestgreen";
          w.style.Color = "black";
     }
     
     if(userchoice === "rock" && b === "scissor")
     {
          userscore++;
          z.innerText = userscore;
          w.innerText = "User choose ROCK and computer choose SCISSOR .....User won this round...Play next round";
          w.style.backgroundColor = "forestgreen";
          w.style.Color = "black";
     }

     if(userchoice === "rock" && b === "paper")
     {
        compscore++;
        y.innerText = compscore;
        w.innerText = "User choose ROCK and computer choose PAPER .....Computer won this round...Play next round";
        w.style.backgroundColor = "red";
          w.style.Color = "black";
     }

     if(userchoice === "paper" && b === "scissor")
     {
        compscore++;
        y.innerText = compscore;
        w.innerText = "User choose PAPER and computer choose SCISSOR .....Computer won this round...Play next round";
        w.style.backgroundColor = "red";
          w.style.Color = "black";
     }

     if(userchoice === "scissor" && b === "rock")
     {
        compscore++;
        y.innerText = compscore;
        w.innerText = "User choose SCISSOR and computer choose ROCK .....Computer won this round...Play next round";
        w.style.backgroundColor = "red";
          w.style.Color = "black";
     }

     if(userchoice === "scissor" && b === "paper")
     {
          userscore++;
          z.innerText = userscore;
          w.innerText = "User choose SCISSOR and computer choose PAPER.....User won this round...Play next round";
          w.style.backgroundColor = "forestgreen";
          w.style.Color = "black";
     }


}
const playgame = (userchoice) => {
    
    console.log(`User chose ${userchoice}`);
    let b = computerchoice();
    console.log(`Computer choose ${b}`);
    scorecalulator(userchoice,b);

}

choicess.forEach((i) => {
    
    i.addEventListener("click", () => {
        const userchoice = i.getAttribute("id");
        playgame(userchoice);
        
    } )
}) 

const newgame = () =>{
    userscore = 0;
    compscore = 0;
    z.innerText = userscore;
    y.innerText = compscore;
    w.innerText = "Play your move";
    w.style.backgroundColor = "bisque";
    w.style.Color = "black";
}
let resetgame = document.querySelector("#reset");

resetgame.addEventListener("click" , () => {
    newgame();
})