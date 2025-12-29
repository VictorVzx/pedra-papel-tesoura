const btnJg = document.querySelector('.botaoJogar');
const msg = document.querySelector('.message')

const pedra = "pedra".toLowerCase().trim()
const papel = "papel".toLowerCase().trim()
const tesoura = "tesoura".toLowerCase().trim()

btnJg.addEventListener("click", () => {
    const p1 = document.getElementById('jogador1').value.toLowerCase().trim();
    const p2 = document.getElementById('jogador2').value.toLowerCase().trim();

    if (p1 == tesoura && p2 == papel){
        msg.textContent = "Jogador 1 venceu!";
    }
    else if(p1 == papel && p2 == tesoura){
        msg.textContent = "Jogador 2 venceu!"
    }
    else if(p1 == papel && p2 == pedra){
        msg.textContent = "Jogador 1 venceu!"
    }
    else if(p1 == pedra && p2 == papel){
        msg.textContent = "Jogador 2 venceu!"
    }
    else if(p1 == pedra && p2 == tesoura){
        msg.textContent = "Jogador 1 venceu!"
    }
    else if(p1 == tesoura && p2 == pedra){
        msg.textContent = "Jogador 2 venceu!"
    }
    else if (p1 == "" || p2 == ""){
        msg.textContent = "Os campos não podem estar vazios."
    }
    else if(p1 === p2) {
        msg.textContent = "Empate!"
    }
    else {
        msg.textContent = "Elemento inválido!"
    }

    setTimeout(() => {
        msg.textContent = "";
        document.getElementById('jogador1').value = "";
        document.getElementById('jogador2').value = "";
    }, 2000);
})