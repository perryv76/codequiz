var startButton = document.getElementById("start-button")
var timer = 100
var timerElement = document.getElementById("timer")
var questionElement = document.getElementById("question")

startButton.addEventListener("click", function() {
    //to start a timer
    setInterval(function() {
            timerElement.innerHTML = timer
            timer--
        }, 1000)
        //ask a question
    questionElement.innerHTML = "what is a boolean?"
        //get answer
    answerElement.innerHTML = "true", "false"
})