let score =  JSON.parse(localStorage.getItem('score'));
      
     updateScoreElement();
      let isAutoPlaying = false;
      let intervalId;

      /*const autoPlay = () => {

      };*/
      function autoPlay()
      {
        if (!isAutoPlaying){
          intervalId = setInterval(
          () =>{
            const myMove = pickCoputerMove();
            
            playGame(myMove);
          },1000
        );
        isAutoPlaying = true;
      }
      else{
        clearInterval(intervalId);
        isAutoPlaying=false;
      }
      }

      document.querySelector('.js-rock-button')
      .addEventListener('click',()=> {
        playGame('rock');
      }
      );

      document.querySelector('.js-paper-button')
      .addEventListener('click', () => {
        playGame('paper');
      });

      document.querySelector('.js-scissors-button')
      .addEventListener('click', () =>
      {
        playGame('scissors')
      });

      document.body.addEventListener('keydown', (event)=>
      {
        if(event.key === 'r'){
       playGame('rock');
       
        }
        else if(event.key === 'p'){
          playGame('paper');
            }

        else if(event.key === 's')
        {
          playGame('scissors');
        }
      });

      function playGame(myMove) {
        pickCoputerMove();

        if (myMove==='rock'){
          if (computerMove==='rock'){
            result = 'tie';
          }
          else if (computerMove==='scissors')
          {
            result = 'you won';
          }
          else {
            result='you lost';
          }
        }
        else if (myMove==='scissors')
        {
          if (computerMove==='scissors')
        {
          result='tie';

        }
        else if (computerMove==='rock'){
        result = 'you lost';
        }
        else {
          result = 'you won';
        }
        }
        else if(myMove==='paper') {
          if (computerMove=== 'rock'){
          result = 'you won';
          }
          else if (computerMove==='paper'){
            result = ' tie';
          }
          else  {

            result ='you lost';
          }
          
      }

      


        if(result === 'you won')
      {
        score.wins= score.wins +1 ;
      }
      else if (result === 'you lost')
      {
        score.losses ++ ; 
      }
      else {
        score.ties++ ;
      }
        localStorage.setItem('score', JSON.stringify(score));

        updateScoreElement();
        
        document.querySelector('.js-result').innerHTML = `${result}`;
        document.querySelector('.js-moves').innerHTML =` You <img src="images/${myMove}-emoji.png" class="move-icon">
        <img src="images/${computerMove}-emoji.png" class="move-icon"> Computer`;
      }
      

      function updateScoreElement(){
        document.querySelector('.js-score').innerHTML = ` wins:  ${score.wins}  losses:  ${score.losses}   ties :  ${score.ties}`;
      }
      
    let computerMove = '';
      function pickCoputerMove() {
        
    const randomNumber = Math.random();
    
    
    if ( randomNumber >=0 && randomNumber < 1/3)
    {
      computerMove = 'rock' ;
   
      

    }
    else if (randomNumber >=1/3 && randomNumber <=2/3 ){

      computerMove = 'paper' ;
      
    }
    else {
    computerMove = 'scissors';
    
    }
    return computerMove;
    
    }
    