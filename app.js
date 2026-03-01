const wrapper = document.getElementById('anki-wrapper');
const flipBtn = document.getElementById('flip-btn');
let isShowingFront = true;

// Dados falsos para simular as variáveis do Anki no seu navegador
const mockData = {
    '{{Kanji}}': '日',
    '{{SerialNumber}}': '001',
    '{{StrokeCount}}': '4',
    '{{Meanings}}': 'sun, day / sol, dia',
    '{{KunReading}}': 'ひ / -び / -か',
    '{{OnReading}}': 'ニチ / ジツ',
    '{{OldForm}}': '☉',
    '{{StrokeOrder}}': '丨 冂 冋 日',
    '{{Illustration}}': '☀️',
    '{{IllustrationExplanation}}': 'picture of the sun / figura do sol',
    '{{CompoundWords}}': '<div class="compound-item"><div class="cw-kanji"><ruby>毎日<rt>まいにち</rt></ruby></div><div class="cw-reading">まいにち</div><div class="cw-en">every day</div><div class="cw-pt">todos os dias</div><div class="cw-stroke">traços_img</div></div>'
};

// Função para substituir as chaves {{ }} pelos dados falsos
function parseAnkiTags(htmlString) {
    let parsedHtml = htmlString;
    for (const [tag, value] of Object.entries(mockData)) {
        parsedHtml = parsedHtml.split(tag).join(value);
    }
    return parsedHtml;
}

// Carrega o arquivo HTML correto
async function renderCard() {
    const fileToLoad = isShowingFront ? 'front.html' : 'back.html';

    try {
        const response = await fetch(fileToLoad);
        const html = await response.text();
        wrapper.innerHTML = parseAnkiTags(html);

        flipBtn.textContent = isShowingFront ? 'Mostrar Resposta' : 'Voltar para Pergunta';
    } catch (error) {
        wrapper.innerHTML = `<h2 style="color:red; text-align:center;">Erro ao carregar ${fileToLoad}. Você ligou o Live Server?</h2>`;
    }
}

// Alterna entre Front e Back
flipBtn.addEventListener('click', () => {
    isShowingFront = !isShowingFront;
    renderCard();
});

// Renderiza a frente logo que a página carrega
renderCard();