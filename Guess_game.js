let low =1;
let high=10;
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
  }

  
let correcr_ans= getRandomIntInclusive(low,high);
let attempt=3;
let count=0;
for (let i=0;i<attempt;i++)
{
    
    let input=parseInt(prompt());
    if (input<correcr_ans)
    {
        alert("Correct answer is greater!");
    }
    else if (input>correcr_ans)
    {
        alert("Correct answer is smaller!");
    }
    else if(input==correcr_ans)
    {
        alert("You Win");
        break;
    }
    count++;
}
if(count==3)
{
    alert("You Lose!")
}
