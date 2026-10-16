"use strict";

// Operações matemáticas
function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    return a / b;
}

// Formata números no padrão brasileiro
function formatar(numero) {
    return numero.toLocaleString("pt-BR", {
        maximumFractionDigits: 10
    });
}

// Realiza o cálculo
function calcular(operacao) {
    const campo1 = document.getElementById("numero1");
    const campo2 = document.getElementById("numero2");
    const textoResultado = document.getElementById("resultado");

    if (campo1.value.trim() === "" || campo2.value.trim() === "") {
        textoResultado.textContent = "Preencha os dois números.";
        return;
    }

    const a = campo1.valueAsNumber;
    const b = campo2.valueAsNumber;

    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        textoResultado.textContent = "Digite números válidos.";
        return;
    }

    let resultado;
    let simbolo;

    switch (operacao) {
        case "somar":
            resultado = somar(a, b);
            simbolo = "+";
            break;

        case "subtrair":
            resultado = subtrair(a, b);
            simbolo = "−";
            break;

        case "multiplicar":
            resultado = multiplicar(a, b);
            simbolo = "×";
            break;

        case "dividir":
            if (b === 0) {
                textoResultado.textContent =
                    "Não é possível dividir por zero.";
                return;
            }

            resultado = dividir(a, b);
            simbolo = "÷";
            break;

        default:
            textoResultado.textContent = "Operação inválida.";
            return;
    }

    if (!Number.isFinite(resultado)) {
        textoResultado.textContent = "Resultado fora do limite numérico.";
        return;
    }

    textoResultado.textContent =
        `${formatar(a)} ${simbolo} ${formatar(b)} = ${formatar(resultado)}`;
}

// Configura os botões quando a página carrega
document.addEventListener("DOMContentLoaded", function () {
    const botoes = document.querySelectorAll("[data-operacao]");
    const campo1 = document.getElementById("numero1");
    const campo2 = document.getElementById("numero2");
    const textoResultado = document.getElementById("resultado");
    const botaoLimpar = document.getElementById("limpar");

    botoes.forEach(function (botao) {
        botao.addEventListener("click", function () {
            calcular(botao.dataset.operacao);
        });
    });

    botaoLimpar.addEventListener("click", function () {
        campo1.value = "";
        campo2.value = "";
        textoResultado.textContent = "O resultado aparecerá aqui.";
        campo1.focus();
    });
});
