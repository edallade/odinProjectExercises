function computerPlay (){
<<<<<<< HEAD
    let options = ('rock','paper','scissors')
    return options
}

=======
    let options = ['rock','paper','scissors']
    aleatorio = Math.floor(Math.random()*(options.length))
  console.log(aleatorio)
    return options[aleatorio]
}

function playRound(pOpt, cpuOption){
 
  
  if(pOpt === cpuOption){
    console.log('Tie ' +pOpt +' = '+cpuOption)
    return -1
  }
  else if (pOpt === 'rock' &&  cpuOption === 'scissors'){
    console.log( 'You win '+ pOpt + ' > ' + cpuOption)
    return 1
  }
  else if(pOpt === 'paper' && cpuOption === 'rock' ){
    console.log('You win '+ pOpt + ' > ' + cpuOption)
    return 1
  }
  else if(pOpt === 'scissors' && cpuOption === 'paper' ){
    console.log( 'You win '+ pOpt + ' > ' + cpuOption)
    return 1
  }
  else{
    console.log( 'You loose '+ cpuOption +' > '+ pOpt)
    return 0
  }
}

function game(){
    let score = {
        'player' : 0,
        'cpu' :0,
        'ties':0
    }
    let validOptions = ['rock','paper','scissors']
    for(let i = 0; i < 5 ; i++){
        let playerInput = prompt('introsuca su opcion')
        let pOpt = playerInput.toLowerCase()
        if (validOptions.indexOf(pOpt) == -1){
            alert('Option "'+pOpt + '" is invalid,please try again')
            i-=1
            continue
            }
       else{
            let result = playRound(pOpt,computerPlay())
            if (result === 1){
            score['player']+=1
            }
            else if(result === 0){
            score['cpu']+=1
            }
            else{
                score['ties']+=1
            }
        }
    }   
    console.log('final results cpu wins: '+score['cpu']+' user wins '+score['player']+ ' ties:' + score['ties'])
}

game()

>>>>>>> b0a81c86fd6f2f19801dc3361bf2c0ecf2c01b17
