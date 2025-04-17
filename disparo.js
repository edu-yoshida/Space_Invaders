let ultimoDisparo = 0;
const intervaloDisparo = 1500; // Intervalo entre cada disparo em milissegundos

// Função responsável por executar o disparo
function disparo() {
    const posicaoAtual = window.Coordenada(); // Certifique-se que essa função retorna {x, y}

    // Cria o projetil
    const projetil = document.createElement("div");
    projetil.classList.add("projetil");

    // Posiciona o projetil na tela com base na coordenada
    projetil.style.position = "absolute";
    projetil.style.left = `${posicaoAtual.x}px`;
    projetil.style.top = `${posicaoAtual.y}px`;

    // Estilização básica (pode ser substituída por CSS externo)
    projetil.style.width = "10px";
    projetil.style.height = "10px";
    projetil.style.backgroundColor = "red";
    projetil.style.borderRadius = "50%";

    // Adiciona o projetil ao corpo do documento
    document.body.appendChild(projetil);

    console.log(`Disparo! x:${posicaoAtual.x}px, y:${posicaoAtual.y}px`);
}

// Pressão de tecla
document.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.repeat) {
        tentarDisparar();
    }
});

function tentarDisparar() {
    const inicioContador = Date.now();
    if (inicioContador - ultimoDisparo >= intervaloDisparo) {
        disparo();
        ultimoDisparo = inicioContador;
    }
}
