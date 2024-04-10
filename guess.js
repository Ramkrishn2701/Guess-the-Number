let number=Math.trunc(Math.random(0,20)*20)+1;
let score=20 ;
document.querySelector('.finalscore').innerHTML=score;
console.log(number);
document.querySelector('.message').innerHTML='Start Guessing';


document.querySelector(".play").addEventListener("click",function(){
    const guess=Number(document.querySelector('.input').value);
    console.log(typeof guess); 
    // console.log(number);
    // console.log(document.querySelector('.input').value);
    
    if(guess==number){
        if(score<1){
            document.querySelector('.message').innerHTML='you lose';
        
        }
        else{
            //setting high score
            document.querySelector('.highscore').textContent=score;
            document.querySelector('.message').innerHTML="hurray victory";
            document.querySelector('.guessingnumber').textContent=number;
            document.querySelector('body').style.backgroundColor="#00ff00";
        }
    }
    else if(!guess){
        document.querySelector('.message').innerHTML='please enter number';
    }
    else if(guess>number){
        if(score<1){
            document.querySelector('.message').innerHTML='you lose';
        }
        else{
            document.querySelector('.message').innerHTML="too high";
            score--;
            document.querySelector('.finalscore').innerHTML=score;
            
        }       
    }
    else if(guess<number){
        if(score<1){
            document.querySelector('.message').innerHTML='you lose';
        }
        else{
            document.querySelector('.message').innerHTML="too low";
            score--;
            document.querySelector('.finalscore').innerHTML=score;
            
        }
    }
   
});

document.querySelector('.playagain').addEventListener('click',function(){
    number=Math.trunc(Math.random(0,20)*20)+1;
    
    console.log('working');
    score=20;
    document.querySelector('.finalscore').innerHTML=score;
    // console.log(score);
    document.querySelector('.guessingnumber').innerHTML="?";
    document.querySelector('.message').innerHTML="Start Guessing";    
    document.querySelector('body').style.backgroundColor="";
    // document.querySelector('.input label').type=reset;
    
})


