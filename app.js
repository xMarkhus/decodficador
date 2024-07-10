// Função para validar o texto de entrada
function validarTexto(texto) {
    const regex = /^[a-z\s]*$/;
    if (!regex.test(texto)) {
        alert("O texto deve conter apenas letras minúsculas e sem acentos.");
        return false;
    }
    return true;
}

// Função para criptografar o texto
function criptografar() {
    const inputText = document.getElementById("input-text").value;
    if (!validarTexto(inputText)) return;

    const outputText = inputText
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById("output-text").value = outputText;
    document.getElementById("copy-button").style.display = "block";
}

// Função para descriptografar o texto
function descriptografar() {
    const inputText = document.getElementById("input-text").value;
    if (!validarTexto(inputText)) return;

    const outputText = inputText
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById("output-text").value = outputText;
    document.getElementById("copy-button").style.display = "block";
}

// Função para copiar o texto para a área de transferência
function copiarTexto() {
    const outputText = document.getElementById("output-text");
    outputText.select();
    document.execCommand("copy");
    alert("Texto copiado!");
}

// Função para verificar o texto de entrada e exibir/esconder elementos
function verificarTexto() {
    const inputText = document.getElementById("input-text").value;
    const mensagemVazia = document.getElementById("mensagem-vazia");
    const textoDigitado = document.getElementById("texto-digitado");

    if (inputText.trim() === "") {
        mensagemVazia.style.display = "block";
        textoDigitado.style.display = "none";
    } else {
        mensagemVazia.style.display = "none";
    }
}

// Função para exibir o texto digitado na área de saída
function mostrarTextoDigitado() {
    const outputText = document.getElementById("output-text").value;
    const textoDigitado = document.getElementById("texto-digitado");
    const liveText = document.getElementById("live-text");

    if (outputText.trim() !== "") {
        textoDigitado.style.display = "block";
        liveText.value = outputText;
    } else {
        textoDigitado.style.display = "none";
    }
}
