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

    // Se já houver uma operação em andamento, calcula o resultado antes de definir uma nova operação
    if (num1 !== "" && operacao !== "") {
        calcular();
    }

    num1 = document.getElementById("display").value; // Armazena o número atual
    operacao = op; // Define a operação
    // Do not clear the display for percentage operation
    if (op !== "%") {
        document.getElementById("display").value = ""; // Clear display for other operations
    }
    resultadoExibido = false; // Permite a entrada de um novo número
}

function calcular() {
    if (num1 === "" || operacao === "" || document.getElementById("display").value === "") return;

    num2 = document.getElementById("display").value; // Armazena o segundo número
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

    if (resultado === "Erro") {
        document.getElementById("display").value = "Erro";
        limparDisplay();
    } else {
        document.getElementById("display").value = resultado;
        num1 = resultado.toString(); // Armazena o resultado como num1 para a próxima operação
        operacao = ""; // Reset the operation to allow for continuous calculations
        resultadoExibido = true; // Indica que o resultado está sendo exibido
    }
}

function calcularPorcentagem() {
    if (num1 === "" || operacao === "" || document.getElementById("display").value === "") return;

    num2 = document.getElementById("display").value;
    let resultado;

    switch (operacao) {
        case "soma":
            resultado = parseFloat(num1) + (parseFloat(num1) * parseFloat(num2) / 100);
            break;
        case "subtracao":
            resultado = parseFloat(num1) - (parseFloat(num1) * parseFloat(num2) / 100);
            break;
        case "multiplicacao":
            resultado = parseFloat(num1) * (parseFloat(num2) / 100);
            break;
        case "divisao":
            resultado = parseFloat(num1) / (parseFloat(num2) / 100);
            break;
        default:
            resultado = "Erro";
    }

    if (resultado === "Erro") {
        document.getElementById("display").value = "Erro";
        limparDisplay();
    } else {
        document.getElementById("display").value = resultado;
        num1 = resultado.toString(); // Armazena o resultado como num1 para a próxima operação
        resultadoExibido = true; // Indica que o resultado está sendo exibido
    }
}

function backspace() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
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

// Ensure to call calcularPorcentagem when the equals button is pressed
document.getElementById("equal").addEventListener("click", function() {
    if (operacao === "%") {
        calcularPorcentagem();
    } else {
        calcular();
    }
});
