function nahodneCislo(maximum, minimum) {
    let vysledek = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    return vysledek;
}


window.addEventListener("load", function () {

    let maxAttempts = 10
    let randomNumber = nahodneCislo(0, 100)
    // výpis náhodného čísla v konzoli: // console.log("nahodneCislo", randomNumber)

    let nejblizsiNizsiCislo = 0
    let nejblizsiVyssiCislo = 100
    let pocetPokusu = 0

    let submitButton = document.querySelector("#submit-button")
    let numberInput = document.querySelector("#number-input")
    let message = document.querySelector("#message")
    let playAgaingButton = document.querySelector("#play-again-button")
    let leftNumber = document.querySelector("#left-number")
    let rightNumber = document.querySelector("#right-number")

    function showPlayAgainButton (){
        playAgaingButton.style.display = "inline"
        submitButton.style.display = "none"
    }

    playAgaingButton.addEventListener("click", function () {
        //console.log("Play again!")
        document.location.reload()
    })

    //console.log("tlacitko", submitButton)

