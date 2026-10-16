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

// Realiza o cálculo e exibe o resultado
function calcular(operacao) {
    const campo1 = document.getElementById("numero1");
    const campo2 = document.getElementById("numero2");
    const textoResultado = document.getElementById("resultado");

    // Verifica se os elementos existem
    if (!campo1 || !campo2 || !textoResultado) {
        console.error("Erro: elementos HTML não encontrados.");
        return;
    }

    // Valida os campos
    if (campo1.value.trim() === "" || campo2.value.trim() === "") {
        textoResultado.textContent = "⚠️ Preencha os dois números.";
        return;
    }

    const a = campo1.valueAsNumber;
    const b = campo2.valueAsNumber;

    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        textoResultado.textContent = "⚠️ Digite números válidos.";
        return;
    }

    let resultado;
    let simbolo;

    // Escolhe a operação
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
                    "⚠️ Não é possível dividir por zero.";
                return;
            }

            resultado = dividir(a, b);
            simbolo = "÷";
            break;

        default:
            textoResultado.textContent = "⚠️ Operação inválida.";
            return;
    }

    // Confere o resultado
    if (!Number.isFinite(resultado)) {
        textoResultado.textContent = "⚠️ Resultado inválido.";
        return;
    }

    // Formata os números em português
    const formatar = (numero) =>
        numero.toLocaleString("pt-BR", {
            maximumFractionDigits: 10
        });

    // Mostra a conta na página
    textoResultado.textContent =
        `${formatar(a)} ${simbolo} ${formatar(b)} = ${formatar(resultado)}`;
}

// Confirma que o JavaScript foi carregado
console.log("Calculadora carregada com sucesso!");
