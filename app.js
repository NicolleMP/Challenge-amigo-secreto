let amigos = [];

function adicionarAmigo() {
    let nome = document.querySelector("input").value;

    if (nome === "") {
        alert("Por favor, insira um nome.");
    } else {
        amigos.push(nome);
        limparCampo();
        exibirAmigos();
    }
}

function exibirAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        listaAmigos.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Não há amigos disponíveis para sortear.");
        resultadoSorteio.innerHTML = "";
    }

    let gerarIndiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[gerarIndiceAleatorio];

    let resultadoSorteio = document.getElementById("resultado");

    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    resultadoSorteio.innerHTML = `O amigo secreto sorteado é: ${amigoSorteado}`
}

function limparCampo() {
    let campo = document.querySelector("input");
    campo.value = "";
}
