
function computerchoice()
{
   

    const options = ["Rock", "Paper", "Scissor"];

    const random = Math.floor(Math.random() * options.length);

    return options[random];
};


function playerchoice()
{
    let choice = prompt("please enter your coice");
    return choice;
};
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