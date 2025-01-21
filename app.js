//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
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

function limparCampo() {
    let campo = document.querySelector("input");
    campo.value = "";
}
