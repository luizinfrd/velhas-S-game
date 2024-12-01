const jogador1 = "X";
const jogador2 = "O";
let jogadorAtual = jogador1;

function fazerJogada() {
    let indice = parseInt(document.getElementById("jogada").value);
    if (isNaN(indice) || indice < 1 || indice > 9) {
        alert("Por favor, insira um número entre 1 e 9.");
        return;
    }

    let casa = document.getElementById("casa" + indice);
    if (casa.innerHTML !== "") {
        alert("Essa casa já foi marcada. Escolha outra.");
        return;
    }

    casa.innerHTML = jogadorAtual;

    if (verificarVitoria()) {
        alert(jogadorAtual + " venceu!");
        resetarJogo();
        return;
    }

    jogadorAtual = (jogadorAtual === jogador1) ? jogador2 : jogador1;
}

function verificarVitoria() {
    const vitoria = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ];

    for (let i = 0; i < vitoria.length; i++) {
        let [a, b, c] = vitoria[i];
        a = document.getElementById("casa" + a).innerHTML;
        b = document.getElementById("casa" + b).innerHTML;
        c = document.getElementById("casa" + c).innerHTML;

        if (a !== "" && a === b && a === c) {
            return true;
        }
    }

    return false;
}

function resetarJogo() {
    for (let i = 1; i <= 9; i++) {
        document.getElementById("casa" + i).innerHTML = "";
    }
    jogadorAtual = jogador1;
}
