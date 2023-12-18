// Retorne no console todas as imagens do site
const img = document.querySelectorAll("img");
console.log(img);
// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagemAnimais = document.querySelectorAll('img[src^="./img/imagem"]');
console.log(imagemAnimais);
// Selecione todos os links internos (onde o href começa com #)
const links = document.querySelectorAll('[href^="#"]');
console.log(links);
// Selecione o primeiro h2 dentro de .animais-descricao
const h2 = document.querySelector(".animais-descricao h2");
console.log(h2);
// Selecione o último p do site
const paragrafo = document.querySelectorAll("p");
console.log(paragrafo[--paragrafo.length]);
