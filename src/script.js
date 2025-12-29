const btnJg = document.querySelector('.botaoJogar');
const msg = document.querySelector('.message')

const jogadasValidas = ["pedra", "papel", "tesoura"];

btnJg.addEventListener("click", () => {
    const p1 = document.getElementById('jogador1').value.toLowerCase().trim();
    const p2 = document.getElementById('jogador2').value.toLowerCase().trim();

    if(p1 === "" || p2 === ""){
        msg.textContent = "Os campos não podem estar vazios!"
    }
    else if (!jogadasValidas.includes(p1) || !jogadasValidas.includes(p2)) {
        msg.textContent = "Caractere desconhecido!"
    }
    else if (p1 === p2){
        msg.textContent = "Empate!"
    }
    else if (
        (p1 === "tesoura" && p2 === "papel") ||
        (p1 === "papel" && p2 === "pedra") ||
        (p1 === "pedra" && p2 === "tesoura")
    ) {
        msg.textContent = "Jogador 1 venceu!"
    }
    else {
        msg.textContent = "Jogador 2 venceu!"
    }

    setTimeout(() => {
        msg.textContent = "";
        document.getElementById('jogador1').value = "";
        document.getElementById('jogador2').value = "";
    }, 2000);
})