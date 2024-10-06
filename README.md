## Íris: Visualizador de Áudio Interativo

Íris é um projeto que utiliza a biblioteca P5.js para criar um visualizador de áudio interativo, oferecendo uma representação visual das frequências de um arquivo de áudio em tempo real. O projeto foi desenvolvido para facilitar a criação de visualizações dinâmicas de som, sendo ideal para experiências visuais imersivas.

## Funcionalidades

- **Análise de Frequências em Tempo Real**: O visualizador capta as frequências de áudio e as transforma em formas geométricas que se movimentam conforme a música.
- **Controle de Reprodução**: Play/Pause integrado para controlar a reprodução do áudio e das animações.
- **Exportação da Visualização**: Possibilidade de salvar uma imagem da visualização gerada.

## Tecnologias Utilizadas

- **P5.js**: Biblioteca para criar gráficos interativos.
- **P5.sound**: Complemento para trabalhar com áudio no P5.js.
- **HTML5 e CSS3**: Estrutura e estilo da interface do usuário.

## Como Funciona

1. **Selecionar o Áudio**: O usuário escolhe um arquivo de áudio no formato .mp3 utilizando o botão "Escolher Arquivo". O código faz o upload do arquivo local e o carrega para a reprodução e visualização.
2. **Visualização**: As frequências de áudio são processadas pela função `fft.analyze()` da biblioteca P5.sound, que captura as bandas de frequência e as transforma em formas geométricas no canvas.
3. **Interatividade**: O usuário pode iniciar ou pausar o áudio clicando no botão "Play". A animação se adapta dinamicamente ao som e a interface gráfica rotaciona conforme o tempo de reprodução.
4. **Salvar Visualização**: A qualquer momento, o usuário pode salvar uma imagem do estado atual da visualização clicando no botão "Salvar".

## Como Usar

### Passo a Passo:

1. Escolha um arquivo de áudio clicando em "Escolher Arquivo".
2. Inicie a visualização clicando no botão "Play".
3. Pause ou retome o áudio a qualquer momento usando o mesmo botão.
4. Salve a visualização clicando no botão "Salvar".

## Requisitos

- Navegador compatível com HTML5 e JavaScript.

## Estrutura de Arquivos

- **index.html**: Página principal contendo a interface e referências aos scripts.
- **sketch.js**: Script que controla a visualização do áudio e a interação com o usuário.
- **style.css**: Estilos para a página HTML e os botões.

## Possíveis Melhorias

- Suporte para diferentes formatos de áudio.
- Animações mais complexas, variando conforme a intensidade e ritmo da música.
- Personalização da cor das ondas de som.

## Créditos

Este projeto utiliza os seguintes recursos:

- **Google Fonts**: [Playfair/Roboto] - [https://fonts.google.com]
- **p5.js** - [https://p5js.org/](https://p5js.org/)

Agradeço aos desenvolvedores dessas ferramentas incríveis!
