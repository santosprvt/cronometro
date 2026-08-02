# Cronômetro

Um cronômetro simples feito com HTML, CSS e JavaScript puro.

## Funcionalidades

- Início da contagem do tempo em horas, minutos e segundos
- Pausa da contagem a qualquer momento, mantendo o tempo atual
- Zeramento do cronômetro, reiniciando o tempo para `00:00:00`
- Atualização dinâmica do tempo na tela a cada segundo

## Como usar

1. Baixe ou clone os arquivos do projeto.
2. Certifique-se de que a estrutura de pastas segue o caminho referenciado no `index.html` (`assets/css/style.css` e `assets/js/script.js`).
3. Abra o arquivo `index.html` em qualquer navegador.
4. Use os botões para iniciar, pausar e zerar o cronômetro.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (manipulação de DOM, eventos, `setInterval`)

## Como funciona

O tempo é controlado por um `setInterval` que incrementa a contagem de segundos a cada 1000ms. O valor é convertido para o formato `HH:MM:SS` usando um objeto `Date` e exibido na tela.
