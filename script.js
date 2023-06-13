'use strict';
//variable
let secrectNumber=Math.trunc(Math.random()*20)+1;
let score=20;
let highscore =0;

//display messge
const displayMessage=function(message){
    document.querySelector('.message').textContent=message;
}

//display score
const displayScore=function(score){
    document.querySelector('.score').textContent=score;
}

// function start
document.querySelector('.btn-check').addEventListener('click',
function(){
    const guess= Number(document.querySelector('.guess').value);
    console.log(guess,typeof guess);

//input num is incorrect
    if(!guess){
        // document.querySelector('.message').textContent='no number😥 !'
        displayMessage('no number😥 !');
        }

        //input number is correct
    else if(guess==secrectNumber){
        // document.querySelector('.message').textContent='Correct Number🎉👍 !';
        displayMessage('Correct Number🎉👍 !');
        //highscore
        if(score>highscore){
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
        }
        //backgroud color
       document.querySelector('body').style.backgroundColor='#60b347';
       document.querySelector('.number').style.width='30rem';
       document.querySelector('.number').textContent=secrectNumber;
    
    }
   
    //input number is high
    else if(guess!=secrectNumber){
        if(score>1){ document.querySelector('.message').textContent=guess>secrectNumber ?'📈 Too high!':'📉Too low!';
        score--;
        // document.querySelector('.score').textContent=score;
        displayScore(score);
}  
else {
    // document.querySelector('.message').textContent='You loose game!😥';
    displayMessage('You loose game!😥');
    document.textContent('.score').textContent=0;
}

    }});
    //function end


//again
document.querySelector('.button1').addEventListener('click',function(){
    score=20;
    document.querySelector('.score').textContent=score;

    highscore=0;
    secrectNumber=Math.trunc(Math.random()*20)+1;
    document.querySelector('.number').textContent='?';
    document.querySelector('body').style.backgroundColor='#111';
       document.querySelector('.number').style.width='15rem';
    //    document.querySelector('.guess').value='
    displayMessage('start guessing..');}
    );
     

