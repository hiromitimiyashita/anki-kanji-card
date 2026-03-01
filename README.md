# 🎴 Anki Kanji Card Template

Um template moderno, responsivo e modular para o estudo de Kanji no Anki. Desenvolvido com separação de arquivos (HTML/CSS/JS) para facilitar a manutenção e edição através de editores externos (como Neovim, Antigravity, VS Code).

## 🚀 Funcionalidades

* **Design Responsivo:** Layout adaptável que funciona perfeitamente no PC (max-width de 1270px) e no mobile (quebra de colunas inteligente e layout de empilhamento).
* **Modo Claro / Escuro:** Cores mapeadas via variáveis CSS (`:root`), sincronizadas nativamente com a classe `.nightMode` do Anki. As ilustrações ajustam o brilho ou invertem a cor automaticamente para manter o contraste.
* **Simulador Live Preview:** Ambiente de desenvolvimento local com um botão customizado para alternar entre "Frente" e "Verso", simulando o comportamento real do Anki no navegador.
* **Grid Fixo para Compound Words:** Estrutura em CSS Grid que trava o Kanji na lateral e empilha as traduções e imagens da ordem dos traços de forma limpa.

## 📂 Estrutura do Projeto

A separação de arquivos garante que você não precise editar código diretamente na interface limitada do Anki.

| Arquivo | Descrição |
| :--- | :--- |
| `front.html` | Estrutura HTML da parte da frente do card. |
| `back.html` | Estrutura HTML do verso do card. |
| `style.css` | Folha de estilos unificada (cores, variáveis e media queries). |
| `index.html` | Simulador do Anki. Carrega o layout no navegador para testes. |
| `app.js` | Lógica do simulador que injeta dados fictícios (`mockData`) para renderizar as variáveis do Anki (ex: `{{Kanji}}`). |
| `.gitignore` | Arquivos ignorados pelo Git (caches de IDE, pastas de Live Server, etc). |

## 💻 Como rodar o ambiente de desenvolvimento

1. Clone este repositório no seu sistema.
2. Abra a pasta na sua IDE favorita.
3. Inicie um **Live Server** na raiz do projeto.
4. O arquivo `index.html` será aberto no navegador.
5. Ao salvar o `style.css`, a página atualiza instantaneamente. Use o botão flutuante para testar os layouts de pergunta e resposta.

## 📦 Como instalar no Anki

Quando a edição estiver finalizada, copie os arquivos para dentro das configurações de cartão do Anki:

1. Abra o Anki > **Ferramentas** > **Gerenciar Tipos de Nota**.
2. Selecione o seu tipo de nota e clique em **Cartões...**
3. Cole o conteúdo de `front.html` na aba **Modelo da Frente**.
4. Cole o conteúdo de `back.html` na aba **Modelo do Verso**.
5. Cole o conteúdo de `style.css` na aba **Estilo**.

## 🖼️ Arquivos de Mídia (Imagens do Layout)

As imagens estáticas usadas na interface (como a imagem de fundo e as regras de caligrafia) devem ser adicionadas manualmente na pasta oculta `collection.media` do seu sistema operacional. 

**Importante:** Adicione o prefixo `_` no nome do arquivo (ex: `_fundo_front.jpg`) caso a imagem seja exclusiva do CSS/HTML e não seja chamada por um campo específico do card. Isso impede que o Anki delete a imagem durante a limpeza de mídias não utilizadas.

## 📝 Padrão de Commits

Este projeto utiliza o padrão [Conventional Commits](https://www.conventionalcommits.org/):
* `feat:` - Novas funcionalidades (ex: novo bloco de informação no HTML).
* `fix:` - Correções de bugs (ex: ajuste de alinhamento no celular).
* `style:` - Mudanças visuais e CSS.
* `refactor:` - Otimização de código sem impacto visual.