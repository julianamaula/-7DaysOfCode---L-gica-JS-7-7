// Funções separadas para cada operações

let num1 = "";
let num2 = "";
let operacao = "";
let resultadoExibido = false;

function adicionarNumero(numero) {
    if (resultadoExibido) {
        limparDisplay();
    }
    document.getElementById("display").value += numero;
}

function definirOperacao(op) {
    if (document.getElementById("display").value === "") return;
    num1 = document.getElementById("display").value;
    operacao = op;
    document.getElementById("display").value = "";
}

function calcular() {
    if (num1 === "" || operacao === "" || document.getElementById("display").value === "") return;
    num2 = document.getElementById("display").value;
    let resultado;

    switch (operacao) {
        case "soma":
            resultado = parseFloat(num1) + parseFloat(num2);
            break;
        case "subtracao":
            resultado = parseFloat(num1) - parseFloat(num2);
            break;
        case "multiplicacao":
            resultado = parseFloat(num1) * parseFloat(num2);
            break;
        case "divisao":
            resultado = num2 == "0" ? "Erro" : parseFloat(num1) / parseFloat(num2);
            break;
        default:
            resultado = "Erro";
    }
    document.getElementById("display").value = resultado;
    resultadoExibido = true;
}

function limparDisplay() {
    document.getElementById("display").value = "";
    num1 = "";
    num2 = "";
    operacao = "";
    resultadoExibido = false;
}

function sairCalculadora() {
    document.getElementById("display").value = "Até a próxima!";
    setTimeout(() => {
        document.getElementById("display").value = "";
    }, 2000);
}