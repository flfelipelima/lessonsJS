let result = prompt("Advinhe o número que estou pensando? Está entre 0 e 10");
let randomNumber = Math.round(Math.random() * 10);
let xAttemps = 1;

while (Number(result) != randomNumber) {
  result = prompt("Errou, tente novamente");
  xAttemps++;
}

alert(`Parabéns! Você advinhou o número em ${xAttemps} tentativas`);
console.log(randomNumber);

/* 
skills: função math, operadores
*/
