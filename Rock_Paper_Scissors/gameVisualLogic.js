
function computerPlay (){
    let options = ['rock','paper','scissors']
    aleatorio = Math.floor(Math.random()*(options.length))
  console.log(aleatorio)
    return options[aleatorio]
}

function playRound(pOpt, cpuOption){
 
  resultado.innerText = '';
  let turn  = ' usr: '+ pOpt + ' <-> cpu: ' + cpuOption 
  if(pOpt === cpuOption){
    resultado.innerText = turn+' DRAW';
    return 1
  }
  else if ((pOpt === 'rock' &&  cpuOption === 'scissors' )|| (pOpt === 'paper' && cpuOption === 'rock' ) || (pOpt === 'scissors' && cpuOption === 'paper' )){
    resultado.innerText =  turn + ' YOU WIN';
    return 0
  }
  else{
    resultado.innerText = turn + ' YOU LOOSE';
    return 2
  }
}
function uploadScore(score){
  score.innerText =  parseInt(score.innerText)+1;
  
}
function game(event){
   
    let playerInput = event.target.innerText;
    let pOpt = playerInput.toLowerCase()
    let result = playRound(pOpt,computerPlay())
    uploadScore(score[result])


}
function startScore(e){
 score.forEach(element => element.innerText = 0 );
 resultado.innerText ='';

}

window.onload = startScore;



const btns =document.querySelectorAll('.opt');
const score = document.querySelectorAll('.score__number')
const resultado = document.querySelector('.resultado')
const iniciar = document.querySelector('#restart')

btns.forEach(element => element.addEventListener('click', game));
iniciar.addEventListener('click', startScore)

