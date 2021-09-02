let loaderEl = document.getElementById("loader")
let btnEl = document.getElementById("btn")
let timerEl = document.getElementById("timer-el")

btnEl= addEventListener("click", startSpin)

function startSpin(){
    // console.log("button clicked")
    loaderEl.classList.toggle("spinning")
    if(loaderEl.classList.contains("spinning")){
        btn.textContent = "Loading"
        timerEl.textContent= "🐱"
        timer()
    } else {
        btn.textContent = "Stop"
    }
}

