var sectionShow = document.querySelector("#sectionShow")
var resultBox = document.querySelector('#resultBox')

//buttons operações:
var somaBtt = document.querySelector("#bttSoma")
var subBtt = document.querySelector("#bttSubt")
var multBtt = document.querySelector("#bttMult")
var divisBtt = document.querySelector("#bttDiv")
var percentButton = document.querySelector("#percentButton")
var point = document.querySelector("#point")

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


//funções básicas:
var currentInput = ''

function update(){
    sectionShow.innerHTML = currentInput
}

function Delete(){
    if(resultBox !== "0"){
        resultBox.textContent = "0"
        update()
    }
    currentInput = currentInput.slice(0, -1)
    update()
}
deleteBTT.addEventListener("click", Delete)

function Point(op){
    if(currentInput.slice(-1) == "."){
        op = ""
        update()
    }else{
        op = "."
        currentInput += op
        update()
    }
}
point.addEventListener("click", Point)


//funções de adição das operações
function calcularPorcentagem(expressao) {
    let indicePorcentagem = expressao.indexOf("%");
    if (indicePorcentagem === -1 || indicePorcentagem === 0) {
        return expressao;
    }
    let parteAntesPorcentagem = expressao.slice(0, indicePorcentagem);

    try {
        let resultadoParteAntes = eval(parteAntesPorcentagem);
        let expressaoCalculada = expressao.replace(parteAntesPorcentagem + "%", resultadoParteAntes);
        return currentInput = expressaoCalculada;
    } catch (error) {
        console.error("Erro ao calcular a porcentagem:", error);
        return expressao;
    }
}

function percent(op){
    if(!currentInput){
        op = ""
        update()
    }else if(currentInput.slice(-1) == "+" || currentInput.slice(-1) == "-" || currentInput.slice(-1) == "x" || currentInput.slice(-1) == "/" || currentInput.slice(-1) == "%"){
        op = ""
        update()
    }else{
        op = "%"
        currentInput += op
        update()
    }
}
percentButton.addEventListener("click", percent)

function soma(op){
    if(!currentInput){
        op = ""
        update()
    }else if(currentInput.slice(-1) == "+" || currentInput.slice(-1) == "-" || currentInput.slice(-1) == "x" || currentInput.slice(-1) == "/"|| currentInput.slice(-1) == "%"){
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
    }else if(currentInput.slice(-1) == "+" || currentInput.slice(-1) == "-" || currentInput.slice(-1) == "x" || currentInput.slice(-1) == "/" || currentInput.slice(-1) == "%"){
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
    }else if(currentInput.slice(-1) == "+" || currentInput.slice(-1) == "-" || currentInput.slice(-1) == "x" || currentInput.slice(-1) == "/" || currentInput.slice(-1) == "%"){
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
    }else if(currentInput.slice(-1) == "+" || currentInput.slice(-1) == "-" || currentInput.slice(-1) == "x" || currentInput.slice(-1) == "/" || currentInput.slice(-1) == "%"){
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
        calcularPorcentagem()
        var resultado = eval(currentInput);
        if (isFinite(resultado)) {
            resultBox.textContent = resultado;
            currentInput = ""
            update()
        }
        else {
            throw new Error("Erro no cálculo");
        }
    } catch (error) {
        resultBox.textContent = "Erro";
    }
}
equalButton.addEventListener("click", Result)



//funções de adição  dos números
function appendONE(number){
    if(currentInput.slice(-1) == "%"){
        number = ""
        currentInput += number
        update()
    }else{
        number = 1
        currentInput += number
        update()
    }
}
num1.addEventListener("click", appendONE)

function appendTWO(number){
    if(currentInput.slice(-1) == "%"){
        number = ""
        currentInput += number
        update()
    }else{
        number = 2
        currentInput += number
        update()
    }
}
num2.addEventListener("click", appendTWO)

function appendTHREE(number){
    if(currentInput.slice(-1) == "%"){
        number = ""
        currentInput += number
        update()
    }else{
        number = 3
        currentInput += number
        update()
    }
}
num3.addEventListener("click", appendTHREE)

function appendFOUR(number){
    if(currentInput.slice(-1) == "%"){
        number = ""
        currentInput += number
        update()
    }else{
        number = 4
        currentInput += number
        update()
    }
}
num4.addEventListener("click", appendFOUR)

function appendFIVE(number){
    if(currentInput.slice(-1) == "%"){
        number = ""
        currentInput += number
        update()
    }else{
        number = 5
        currentInput += number
        update()
    }
}
num5.addEventListener("click", appendFIVE)

function appendSIX(number){
    if(currentInput.slice(-1) == "%"){
        number = ""
        currentInput += number
        update()
    }else{
        number = 6
        currentInput += number
        update()
    }
}
num6.addEventListener("click", appendSIX)

function appendSEVEN(number){
    if(currentInput.slice(-1) == "%"){
        number = ""
        currentInput += number
        update()
    }else{
        number = 7
        currentInput += number
        update()
    }
}
num7.addEventListener("click", appendSEVEN)

function appendH(number){
    if(currentInput.slice(-1) == "%"){
        number = ""
        currentInput += number
        update()
    }else{
        number = 8
        currentInput += number
        update()
    }
}
num8.addEventListener("click", appendH)

function appendNINE(number){
    if(currentInput.slice(-1) == "%"){
        number = ""
        currentInput += number
        update()
    }else{
        number = 9
        currentInput += number
        update()
    }
}
num9.addEventListener("click", appendNINE)

function append0(number){
    if(currentInput.slice(-1) == "%"){
        number = ""
        currentInput += number
        update()
    }else{
        number = 0
        currentInput += number
        update()
    }
}
num0.addEventListener("click", append0)