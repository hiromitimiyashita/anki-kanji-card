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
    '{{StrokeOrder}}': '日',
    '{{Illustration}}': '☀️',
    '{{IllustrationExplanation}}': 'picture of the sun / figura do sol',
    '{{CompoundWords}}': `
<div class="compound-item">
&nbsp; <div class="cw-kanji"><ruby>毎日<rt>まいにち</rt></ruby></div>
&nbsp; <div class="cw-reading">まいにち</div>
&nbsp; <div class="cw-en">every day</div>
&nbsp; <div class="cw-pt">todos os dias</div>
&nbsp; <div class="cw-stroke stroke-diagram"><span>毎</span><span>日</span></div>
</div>

<div class="compound-item">
&nbsp; <div class="cw-kanji"><ruby>日記<rt>にっき</rt></ruby></div>
&nbsp; <div class="cw-reading">にっき</div>
&nbsp; <div class="cw-en">diary</div>
&nbsp; <div class="cw-pt">diário</div>
&nbsp; <div class="cw-stroke stroke-diagram"><span>日</span><span>記</span></div>
</div>

<div class="compound-item">
&nbsp; <div class="cw-kanji"><ruby>休日<rt>きゅうじつ</rt></ruby></div>
&nbsp; <div class="cw-reading">きゅうじつ</div>
&nbsp; <div class="cw-en">holiday</div>
&nbsp; <div class="cw-pt">feriado</div>
&nbsp; <div class="cw-stroke stroke-diagram"><span>休</span><span>日</span></div>
</div>

<div class="compound-item">
&nbsp; <div class="cw-kanji"><ruby>日本<rt>にほん</rt></ruby></div>
&nbsp; <div class="cw-reading">にほん</div>
&nbsp; <div class="cw-en">Japan</div>
&nbsp; <div class="cw-pt">Japão</div>
&nbsp; <div class="cw-stroke stroke-diagram"><span>日</span><span>本</span></div>
</div>

<div class="compound-item">
&nbsp; <div class="cw-kanji"><ruby>本日<rt>ほんじつ</rt></ruby></div>
&nbsp; <div class="cw-reading">ほんじつ</div>
&nbsp; <div class="cw-en">today</div>
&nbsp; <div class="cw-pt">hoje (formal)</div>
&nbsp; <div class="cw-stroke stroke-diagram"><span>本</span><span>日</span></div>
</div>`
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
        // Adicionado cache-busting (?v=timestamp) para evitar que o navegador guarde versões velhas no cache
        const response = await fetch(`${fileToLoad}?v=${new Date().getTime()}`);
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