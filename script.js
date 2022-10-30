// getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string
function getComputerChoice() {
    const options = ['Rock', 'Paper', 'Scissors']
    let index = Math.floor(Math.random() * 3)
    return options[index]
}

// getResult compares playerChoice & computerChoice and returns the score accordingly
function getResult(playerChoice, computerChoice) {
// All situations where human draws, set `score` to 0
if(playerChoice === computerChoice) return 0

// All situations where human wins, set `score` to 1
if(playerChoice === 'Rock' && computerChoice === 'Scissors') return 1
if(playerChoice === 'Paper' && computerChoice === 'Rock') return 1
if(playerChoice === 'Scissors' && computerChoice === 'Paper') return 1

// Otherwise human loses (aka set score to -1)
return -1
}

// showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice
function showResult(score, playerChoice, computerChoice) {
    let resultDiv = document.getElementById('result')
    let result
    if(score == -1) result = "You Lose!"
    if(score == 0) result = "It's a Draw!"
    if(score == 1) result = "You Win!"
    resultDiv.innerText = result

    let playerScore = document.getElementById('player-score')
    let hands = document.getElementById('hands')
    playerScore.innerText = `${Number(playerScore.innerText) + score}`
    hands.innerText = `👱 ${playerChoice} vs 🤖 ${computerChoice}`
}

// Calculate who won and show it on the screen
function onClickRPS(playerChoice) {
    let computerChoice = getComputerChoice()
    let score = getResult(playerChoice.value, computerChoice)
    showResult(score, playerChoice.value, computerChoice)
}


// Make the RPS buttons actively listen for a click and do something once a click is detected 
function playGame() {
    rpsButtons = document.querySelectorAll('.rpsButton')
    
    rpsButtons.forEach(button => {
        button.onclick = () => {
            onClickRPS(button)
        }
    });

    endButton = document.getElementById('endGameButton')
    endButton.onclick = () => endGame()
}

// endGame function clears all the text on the DOM **
function endGame() {
    let playerScore = document.getElementById('player-score')
    let hands = document.getElementById('hands')
    let result = document.getElementById('result')
    playerScore.innerText = ''
    hands.innerText = ''
    result.innerText = ''
}

playGame()