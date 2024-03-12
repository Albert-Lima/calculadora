var sectionShow = document.querySelector("#sectionShow")
var resultBox = document.querySelector('#resultBox')

//buttons operações:
var somaBtt = document.querySelector("#bttSoma")
var subBtt = document.querySelector("#bttSubt")
var multBtt = document.querySelector("#bttMult")
var divisBtt = document.querySelector("#bttDiv")

//buttuns to select numbers:
var num1 = document.querySelector("#num1")
var num2 = document.querySelector("#num2")
var num3 = document.querySelector("#num3")
var num4 = document.querySelector("#num4")
var num5 = document.querySelector("#num5")
var num6 = document.querySelector("#num6")
var num7 = document.querySelector("#num7")
var num8 = document.querySelector("#num8")
var num9 = document.querySelector("#num9")
var num0 = document.querySelector("#num0")

var deleteBTT =  document.querySelector("#bttDelete")
var equalButton = document.querySelector("#equalButton")


//função para somar:
var currentInput = ''

function update(){
    sectionShow.innerHTML = currentInput
}

function Delete(){
    currentInput = currentInput.slice(0, -1)
    update()
}
deleteBTT.addEventListener("click", Delete)


//funções de adição das operações
function soma(op){
    if(!currentInput){
        op = ""
        update()
    }else if(currentInput.slice(-1) == "+" || currentInput.slice(-1) == "-" || currentInput.slice(-1) == "x" || currentInput.slice(-1) == "/"){
        op = ""
        update()
    }else{
        op = "+"
        currentInput += op
        update()
    }
}
somaBtt.addEventListener("click", soma)

function subt(op){
    if(!currentInput){
        op = ""
        update()
    }else if(currentInput.slice(-1) == "+" || currentInput.slice(-1) == "-" || currentInput.slice(-1) == "x" || currentInput.slice(-1) == "/"){
        op = ""
        update()
    }else{
        op = "-"
        currentInput += op
        update()
    }
}
subBtt.addEventListener("click", subt)

function mult(op){
    if(!currentInput){
        op = ""
        update()
    }else if(currentInput.slice(-1) == "+" || currentInput.slice(-1) == "-" || currentInput.slice(-1) == "x" || currentInput.slice(-1) == "/"){
        op = ""
        update()
    }else{
        op = "x"
        currentInput += op
        update()
    }
}
multBtt.addEventListener("click", mult)

function divis(op){
    if(!currentInput){
        op = ""
        update()
    }else if(currentInput.slice(-1) == "+" || currentInput.slice(-1) == "-" || currentInput.slice(-1) == "x" || currentInput.slice(-1) == "/"){
        op = ""
        update()
    }else{
        op = "/"
        currentInput += op
        update()
    }
}
divisBtt.addEventListener("click", divis)






//função para mostrar redultado da operação:
function Result(){
    try {
        var resultado = eval(currentInput);

        // Verifique se o resultado é um número finito
        if (isFinite(resultado)) {
            resultBox.textContent = resultado;
            currentInput = ""
            update()
        } else {
            // Se o resultado não for um número finito, mostre uma mensagem de erro
            throw new Error("Erro no cálculo");
        }
    } catch (error) {
        // Se houver um erro, mostre uma mensagem de erro no display
        resultBox.textContent = "Erro";
    }
}
equalButton.addEventListener("click", Result)





//funções de adição  dos números
function appendONE(number){
    var number = 1
    currentInput += number
    update()
}
num1.addEventListener("click", appendONE)

function appendTWO(number){
    var number = 2
    currentInput += number
    update()
}
num2.addEventListener("click", appendTWO)

function appendTHREE(number){
    var number = 3
    currentInput += number
    update()
}
num3.addEventListener("click", appendTHREE)

function appendFOUR(number){
    var number = 4
    currentInput += number
    update()
}
num4.addEventListener("click", appendFOUR)

function appendFIVE(number){
    var number = 5
    currentInput += number
    update()
}
num5.addEventListener("click", appendFIVE)

function appendSIX(number){
    var number = 6
    currentInput += number
    update()
}
num6.addEventListener("click", appendSIX)

function appendSEVEN(number){
    var number = 7
    currentInput += number
    update()
}
num7.addEventListener("click", appendSEVEN)

function appendH(number){
    var number = 8
    currentInput += number
    update()
}
num8.addEventListener("click", appendH)

function appendNINE(number){
    var number = 9
    currentInput += number
    update()
}
num9.addEventListener("click", appendNINE)

function append0(number){
    var number = 0
    currentInput += number
    update()
}
num0.addEventListener("click", append0)