---
name: Lotus
description: Massagem em Porto Alegre; um mapa de reflexologia à noite, desenhado em linha creme.
colors:
  ink: "#2F231B"
  earth: "#584333"
  clay: "#B3704E"
  ochre: "#8B7A66"
  sand: "#C1B097"
  cream: "#E2D5C3"
typography:
  hero:
    fontFamily: "Italiana, Times New Roman, serif"
    fontSize: "clamp(4rem, 13vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: "0.04em"
  display:
    fontFamily: "Italiana, Times New Roman, serif"
    fontSize: "clamp(2.6rem, 6.4vw, 5rem)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Italiana, Times New Roman, serif"
    fontSize: "clamp(2.2rem, 4vw, 3.1rem)"
    fontWeight: 400
    lineHeight: 1.02
  title:
    fontFamily: "Italiana, Times New Roman, serif"
    fontSize: "clamp(1.7rem, 3.4vw, 2.4rem)"
    fontWeight: 400
    lineHeight: 1.1
  body:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 500
    lineHeight: 1.2
  button:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 600
    letterSpacing: "0.005em"
rounded:
  focus: "4px"
  frame: "1.25rem"
  panel: "1.5rem"
  pill: "999px"
spacing:
  gutter: "clamp(1rem, 4vw, 3.5rem)"
  section: "clamp(5rem, 11vw, 9.5rem)"
  measure: "34rem"
  container: "72rem"
components:
  button-primary:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0 1.6rem"
    height: "3.25rem"
  button-primary-small:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 1.15rem"
    height: "2.6rem"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.cream}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0 1.6rem"
    height: "3.25rem"
  tag-provisorio:
    textColor: "currentColor"
    rounded: "{rounded.pill}"
    padding: "0.05rem 0.5rem"
  menu-region:
    textColor: "{colors.sand}"
    rounded: "{rounded.pill}"
    padding: "0.1rem 0.6rem"
  map-panel:
    textColor: "{colors.cream}"
    rounded: "{rounded.panel}"
    padding: "clamp(1.5rem, 3vw, 2.5rem)"
  body-point:
    textColor: "{colors.cream}"
    typography: "{typography.label}"
    height: "2.75rem"
  body-point-active:
    backgroundColor: "{colors.clay}"
    textColor: "{colors.cream}"
  frame:
    rounded: "{rounded.frame}"
---

# Design System: Lotus

## Overview

**Creative North Star: "O Mapa de Reflexologia à Noite"**

A Lotus é uma folha de mapa marrom-escura sobre a qual tudo é desenhado em traço fino creme, com a mesma espessura da linha luminosa do vídeo de abertura. A lótus do filme, o corpo de costas no mapa, as réguas entre as massagens, o contorno das fotos e a lótus do fechamento são a mesma linha, e todos entram na tela sendo traçados. O lugar escolhido acende em terracota; nada mais acende.

Abaixo do mapa, a folha dá lugar a campos inteiros de cor, um por seção: marrom quente, areia, creme e, no fechamento, terracota. A densidade é baixa e calma: muito respiro vertical, texto curto, uma ação por campo. A tipografia faz o par com a linha: Italiana, uma romana fina do mesmo peso do traço, para tudo que é nome; Hanken Grotesk para ler e para agir.

O mundo recusa o padrão visual de spa (foto de pedras e velas, grade de cards de serviço iguais). Serviços são linhas de um cardápio separadas por réguas traçadas, não cartões.

**Key Characteristics:**
- Paleta fechada de seis cores, definida pelo cliente.
- Traço único de 1 a 1,6 px para linhas, ícones, contornos e marca.
- Todo elemento novo entra sendo traçado ou "acendendo" (opacidade, às vezes com desfoque), nunca pulando.
- A ação (WhatsApp) é sempre o elemento de maior contraste do campo, em forma de pílula.
- Campos de cor inteiros por seção, sem cartões flutuando sobre eles.

## Colors

Seis terras quentes, do quase-preto ao creme; a terracota é o único acento.

### Primary
- **Terracota** (clay): a região escolhida. Ponto ativo do mapa, linha-guia ativa, anel de foco, seleção de texto, cursor de digitação e o campo inteiro do fechamento. Fora disso não aparece.

### Neutral
- **Marrom Escuro** (ink): a folha do mapa. Fundo do hero, do mapa do corpo e do rodapé; texto sobre todos os campos claros; o botão quando ele precisa ser escuro.
- **Marrom Quente** (earth): campo da seção de massagens; traço das linhas de formação sobre areia; trilho da barra de rolagem.
- **Ocre** (ochre): linha secundária. A coluna pontilhada do corpo e a barra de rolagem.
- **Areia** (sand): campo das seções "Quem cuida de você" e "Quem já veio"; no escuro, texto de apoio (duração, rótulo "Massagem indicada", regiões) e traços internos do corpo.
- **Creme** (cream): a linha e a ação. Texto principal no escuro, traço do corpo, botão principal, e o campo da seção "O espaço".

Transparências derivadas, usadas como tokens CSS: creme a 72% para texto secundário no escuro (88% sobre o marrom quente), creme a 32% para réguas e bordas finas, marrom escuro a 78% para texto secundário nos campos claros.

### Named Rules
**A Regra da Paleta Fechada.** Fundos, textos, bordas e botões usam só as seis cores e suas transparências. Os tons extras do código (#F0E4D2, #D9A887, #F2B48C, #000) existem apenas dentro da luz: o gradiente da linha do corpo, a lavagem que recolore o vídeo e o miolo do ponto ativo. Nunca viram fundo, texto ou campo.

**A Regra de Um Lugar Aceso.** A terracota marca a escolha. Em qualquer tela escura há no máximo uma região acesa; ela não decora títulos, ícones nem bordas em repouso.

## Typography

**Display Font:** Italiana (com Times New Roman, serif)
**Body Font:** Hanken Grotesk (com system-ui, sans-serif)

**Character:** Italiana tem o peso da linha do vídeo, então os nomes parecem desenhados com o mesmo traço do mapa. Hanken Grotesk é neutra e firme, e carrega leitura, preços e botões.

### Hierarchy
- **Hero** (Italiana 400, clamp(4rem, 13vw, 6rem), 0,9, espaçamento +0,04em): só a palavra "Lotus" sob a flor. O título do fechamento usa a mesma escala (clamp(3rem, 9vw, 6rem), 0,98).
- **Display** (Italiana 400, clamp(2.6rem, 6.4vw, 5rem), 1,02): títulos de seção.
- **Headline** (Italiana 400, clamp(2.2rem, 4vw, 3.1rem), 1,02): o nome da região no painel do mapa.
- **Title** (Italiana 400, 1,7 a 2,6rem, 1,1 a 1,2): nomes de massagem, depoimentos, o endereço. Depoimentos ganham aspas curvas tipográficas.
- **Body** (Hanken 400, 1,0625rem, 1,6): leitura, com medida de 30 a 46ch e `text-wrap: pretty`.
- **Label** (Hanken 500, 0,82 a 0,95rem): pontos do mapa, regiões, rodapé, navegação. Em caixa normal, nunca em versal.
- **Button** (Hanken 600, 1,0625rem): ações. Preços em Hanken 600 com algarismos tabulares.

### Named Rules
**A Regra do Peso Único.** Italiana só existe em 400 e só para nomes (marca, seções, regiões, massagens, endereço, depoimentos). Ênfase dentro do texto vem de Hanken 600/700, nunca de Italiana em negrito ou itálico falso.

## Layout

Coluna central com limite de 72rem e margem lateral fluida (gutter). Cada seção ocupa a largura toda com seu próprio campo de cor e respiro vertical fluido (section); o fechamento respira mais (clamp(6rem, 14vw, 11rem)). Cabeçalhos de seção ficam numa medida de 34rem.

- **Hero:** altura de tela cheia (100svh) no desktop; o vídeo fica centralizado no alto com máscara radial e o texto centralizado embaixo.
- **Mapa:** duas colunas (corpo 1,15fr, painel 0,85fr); abaixo de 900px empilha corpo sobre painel e o painel rola para a vista ao escolher.
- **Massagens:** linhas de cardápio em três colunas (nome, duração, preço); abaixo de 560px vira duas, com a duração descendo para baixo do nome.
- **Sobre, depoimentos, espaço:** grades de duas colunas que viram uma abaixo de 760px.
- **Celular (até 760px):** a navegação some, o hero perde a altura cheia e o vídeo se alarga a 150vw, as ações empilham, e um botão de WhatsApp fixo no rodapé da tela aparece depois do hero (some sobre o hero, o painel do mapa e o fechamento, que já têm o seu).

Pontos de quebra: 900px, 760px, 560px.

## Elevation & Depth

O sistema é plano: a profundidade vem da troca de campos de cor e de luz, não de camadas. A linha do corpo tem um halo suave (brilho creme de 2px e sombra terracota de 12px), como a luz do vídeo. Sombras de verdade só aparecem como resposta: o botão sobe 2px no hover com sombra difusa, o ponto ativo respira um halo terracota, e o botão fixo do celular flutua com uma sombra baixa.

### Shadow Vocabulary
- **Lift do botão** (`box-shadow: 0 14px 30px -12px rgba(12, 8, 5, .7), 0 2px 6px rgba(12, 8, 5, .25)`): hover do botão principal.
- **Halo do ponto ativo** (`box-shadow: 0 0 0 7px rgba(179, 112, 78, .22), 0 0 22px 4px rgba(179, 112, 78, .55)`): região escolhida, respirando em 4s.
- **Dock** (`box-shadow: 0 12px 30px -10px rgba(20, 14, 10, .7)`): botão fixo do celular.
- **Brilho da linha** (`filter: drop-shadow(0 0 2px rgba(240, 228, 210, .55)) drop-shadow(0 2px 12px rgba(179, 112, 78, .45))`): o traço do corpo.

### Named Rules
**A Regra da Luz, Não da Pilha.** Superfícies em repouso são planas. Brilho pertence à linha e à escolha; sombra pertence ao hover e ao que flutua. Sombras duras deslocadas não existem neste mundo.

## Shapes

Duas famílias de forma. Tudo que se toca é pílula (999px): botões, tag provisório, regiões, ponto do mapa (círculo). Tudo que contém é um retângulo de cantos generosos: painel do mapa (1,5rem) e molduras de foto (1,25rem, contorno de 20px). Bordas são sempre de 1px em creme a 32% ou na cor do texto; a única exceção é o tracejado da tag provisório. O foco é um contorno terracota de 1,5px, afastado 4px, com raio de 4px.

**A Regra do Traço Único.** Linhas, ícones, a marca e os contornos usam traço de 1 a 1,6px com pontas e junções arredondadas. Ícones são SVG de contorno no mesmo traço, nunca preenchidos.

## Components

### Buttons
Pílulas calmas e luminosas: o botão é a coisa mais clara da tela.
- **Shape:** pílula (999px), altura mínima de 3,25rem, ícone de conversa em traço à esquerda.
- **Primary:** fundo creme, texto marrom escuro, padding horizontal de 1,6rem. É o único estilo das ações de WhatsApp sobre o escuro, sobre o marrom quente e sobre a terracota.
- **Small:** 2,6rem de altura, 1,15rem de padding, 0,95rem; só na barra do topo.
- **Hover / Focus:** sobe 2px e ganha a sombra de lift em 0,6s (ease-out); no clique volta em 0,15s. Foco: anel terracota.
- **Ink:** fundo marrom escuro, texto creme. Usado quando a ação precisa aparecer sobre campos claros (areia, creme): o botão fixo do celular troca para ink ao passar por essas seções.

### Link traçado
O link secundário ("Onde você sente?", "Como chegar"): texto em creme a 72% com uma régua de 1px que repousa em 35% da largura e se traça até 100% no hover (0,7s). Variante escura em marrom escuro que acende em terracota.

### Tag provisório
Marca de espaço reservado, enquanto o material real do cliente não chega: pílula com borda tracejada de 1px na cor do texto, Hanken 500 a 0,72rem, palavra "provisório" em minúsculas. Fica ao lado do texto reservado, ou no canto superior direito de uma moldura de foto. Sai quando o conteúdo real entra.

### Mapa do corpo (componente assinatura)
- **Figura:** corpo de costas em traço contínuo com gradiente creme (claro no alto, aquecendo para terracota-claro nos pés), traços internos em areia a 1px, coluna pontilhada em ocre. Desenha-se por stroke-dashoffset em 2,6s ao entrar na tela.
- **Pontos:** sete regiões. Cada uma tem âncora no corpo, linha-guia horizontal de 1px até a margem e um rótulo-botão (Label, alvo mínimo de 2,75rem) com um ponto circular de 0,8rem: contorno creme, miolo marrom escuro. Linhas e pontos chegam escalonados a partir de 2s, 0,12s cada.
- **Ativo:** o ponto enche de terracota e respira o halo; a âncora e a linha-guia acendem em terracota; o rótulo vai a creme pleno. Só um ativo por vez.
- **Painel:** retângulo de 1,5rem, borda creme a 32%, fundo marrom escuro a 60%. Mostra o nome da região (Headline), a sensação, um bloco de indicação entre réguas (rótulo em areia, nome em Hanken 600, duração e valor tabulares) e o botão principal "Agendar para [região]". A troca de conteúdo acende em 0,9s com desfoque saindo.

### Linhas do cardápio
Cada massagem é uma linha, não um card: nome em Title, duração em areia, preço em Hanken 600; descrição embaixo; regiões do corpo como pílulas de borda areia. As linhas são separadas por réguas de 1px que se traçam da esquerda para a direita (1,8s).

### Moldura de foto
Retângulo de 1,25rem com overflow oculto. Vazia, mostra a lótus em traço e uma legenda curta, com contorno de 1px que se traça como um único traço (2,4s) e a tag provisório no canto. Retrato 4:5 sobre areia; panorâmica 21:9 sobre creme (4:3 no celular).

### Navigation
Barra do topo sobre o hero, sem fundo: marca (lótus em traço + "Lotus" em Italiana 1,6rem) à esquerda, links em Label creme a 72% que vão a creme pleno no hover, botão pequeno à direita. Abaixo de 760px restam só a marca e o botão.

### Movimento
Duas curvas. **ease-draw** (cubic-bezier(0.45, 0, 0.15, 1)) para tudo que é traçado: corpo, réguas, contornos, lótus do fechamento, respiração do ponto ativo. **ease-out** (cubic-bezier(0.16, 1, 0.3, 1)) para tudo que acende ou responde: texto, hover, troca do painel, dock. Abaixo do hero o texto só acende (opacidade em 1,4s, 0,35s depois da sua régua); no hero e no painel ele também sobe e sai do desfoque. O texto do hero chega quando a flor do vídeo termina de se desenhar (cerca de 2,1s), em cascata de 0, 0,18 e 0,36s, e a barra do topo por último (0,7s). Com movimento reduzido, tudo aparece já desenhado e o vídeo para no quadro final.

**A Regra da Linha Primeiro.** Primeiro a linha se traça, depois o texto acende. Nada escala, quica ou pula.

## Do's and Don'ts

### Do:
- **Do** use só as seis cores da paleta e suas transparências para fundos, textos e bordas.
- **Do** desenhe linhas, ícones e contornos com traço de 1 a 1,6px, pontas arredondadas, na cor do texto do campo.
- **Do** dê a cada seção um campo de cor inteiro e mantenha o texto em marrom escuro sobre areia, creme e terracota.
- **Do** faça da ação de WhatsApp o elemento de maior contraste do campo: creme sobre escuro, marrom quente e terracota; ink sobre areia e creme.
- **Do** faça elementos novos entrarem traçados (ease-draw) ou acendendo (ease-out), e respeite o movimento reduzido mostrando o estado final.
- **Do** marque todo conteúdo reservado com a tag provisório até o material real chegar.

### Don't:
- **Don't** use a terracota como decoração em repouso; ela é a escolha e o campo do fechamento.
- **Don't** transforme os tons de luz (#F0E4D2, #D9A887, #F2B48C) em fundos, textos ou campos.
- **Don't** monte serviços como uma grade de cards iguais, nem use imagens de spa genéricas (pedras, velas).
- **Don't** use Italiana em negrito, em texto corrido ou em botões.
- **Don't** use ícones preenchidos, sombras duras deslocadas ou animações de escala e quique.
- **Don't** coloque o botão creme sobre campos areia ou creme, onde ele desaparece.
