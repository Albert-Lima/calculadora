var sectionShow = document.querySelector("#sectionShow")

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
        window.alert("selecione um número primeiro!")
    }
    if(currentInput.slice(-1) == " + "){
        window.alert("selecione um número!")
    }else{
        var op = " + "
        currentInput += op
        update()
    }
}
somaBtt.addEventListener("click", soma)

function subt(op){
    var op = " - "
    currentInput += op
    update()
}
subBtt.addEventListener("click", subt)

function mult(op){
    var op = " x "
    currentInput += op
    update()
}
multBtt.addEventListener("click", mult)

function divis(op){
    var op = " / "
    currentInput += op
    update()
}
divisBtt.addEventListener("click", divis)


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