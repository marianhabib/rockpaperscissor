
function computerchoice()
{
   
    const options = ["Rock", "Paper", "Scissor"];
    const random = Math.floor(Math.random() * options.length);
    if(options[random] == "Rock")
    {document.getElementById("cmpchoice_img").src = "rock.png";}
    else if (options[random] == "Paper"){document.getElementById("cmpchoice_img").src = "paper.png";}
    else{document.getElementById("cmpchoice_img").src = "scissors.png";}
    return options[random];
};

function playerchoice(choice,childDiv)
{
    childDiv.classList.add("chosen");
    return choice.id;
}

function checkwinner(cchoice, pchoice)
{
    cchoice = cchoice.toUpperCase();
    pchoice = pchoice.toUpperCase();
    let result = "draw"
    if (cchoice === pchoice){ return result}
    else if ( (cchoice == "ROCK" && pchoice == "SCISSOR") || (cchoice == "PAPER" && pchoice == "ROCK") || (cchoice == "SCISSOR" && pchoice == "PAPER")  )
    {
        result = "computer";
        return result;
    }
    else if ( (pchoice == "ROCK" && cchoice == "SCISSOR") || (pchoice == "PAPER" && cchoice == "ROCK") || (pchoice == "SCISSOR" && cchoice == "PAPER")  )
    {
        result = "player";
        return result;
    }

}