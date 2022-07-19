let player, computer

const choices=['rock','paper','scissors']

const game = choice=>{
    if(choices.includes(choice.toLowerCase())){
         computer=choices[Math.floor(Math.random()*3)]
         player=choice.toLowerCase()
        if(player==='rock' && computer=='paper'){
              return `player : ${choice} ::: computer : ${computer} => computer WINS`
        }else if(player==='rock' && computer=='scissors'){
            return `player : ${choice} ::: computer : ${computer} => computer WINS`
        }else if(player==='rock' && computer=='scissors'){
            return `player : ${choice} ::: computer : ${computer} =>  player WINS`
        }else if(player==='scissors' && computer=='paper'){
            return `player : ${choice} ::: computer : ${computer} => player WINS`
        }else if(player==='scissors' && computer=='rock'){
            return `player : ${choice} ::: computer : ${computer} => computer WINS`
        }else if(player==='paper' && computer=='rock'){
            return `player : ${choice} ::: computer : ${computer} => player WINS`
        }else if(player==='paper' && computer=='scissors'){
            return `player : ${choice} ::: computer : ${computer} => computer WINS`
        }else{
            return `player : ${choice} ::: computer : ${computer} => DRAW`
        }
    }else{
        return`${choice} is invalid`
    }
    }
    let body = document.querySelector('body')


    //select all the buttons
    let buttons = document.querySelectorAll('button')

    buttons.forEach(button => {
        button.addEventListener('click', function(){
            let h1 = document.createElement('h1')
            h1.textContent = game(button.textContent).split(' => ')[1]
            
            let table = document.createElement('table')
            let thead = document.createElement('thead')
            thead.innerHTML= '<tr><th>Player</th><th>Computer</th></tr>'
            table.appendChild(thead)
            let tbody = document.createElement('tbody')
            tbody.innerHTML =`<tr><td>${player}</td><td>${computer}</td></tr>`
            table.appendChild(tbody)

            body.appendChild(table)
            body.appendChild(h1)
           
        })
    })