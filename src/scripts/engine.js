const pianoKeys = document.querySelectorAll('.piano-keys .key');
let audio = new Audio("/src/tunes/a.wav");

// 🔑 1. DECLARAÇÃO CORRIGIDA: Inicialize a variável mapeKeys como um array vazio.
let mapeKeys = [];

const playSound = (key) => {
    // 1. Define a fonte do áudio
    audio.src = `src/tunes/${key}.wav`;
    // 2. Toca o áudio
    audio.play();

    // 3. Seleciona a tecla do piano (seletor de atributo corrigido do erro anterior)
    const clickKey = document.querySelector(`[data-key="${key}"]`)

    // 4. Adiciona/Remove a classe 'active'
    if (clickKey) {
        clickKey.classList.add("active")

        setTimeout(() => {
            clickKey.classList.remove("active");
        }, 150)
    }
}


pianoKeys.forEach(key => {
    const keyData = key.dataset.key;


    // 2. Popula o array mapeKeys com as teclas disponíveis
    mapeKeys.push(keyData);

    key.addEventListener('click', () => {
        playSound(keyData);
        // O mapeKeys.push() já foi feito acima, não precisa repetir aqui.
    });
});

document.addEventListener("keydown", (e) => {
    // 3. Verifica se a tecla pressionada está no array de teclas mapeadas
    if (mapeKeys.includes(e.key)) {
        playSound(e.key)
    }
});