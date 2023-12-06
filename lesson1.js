let student = prompt("Qual é o nome do aluno? ");

let n1 = prompt("Digite a primeira nota: ");
let n2 = prompt("Digite a segunda nota: ");
let n3 = prompt("Digite a terceira nota: ");

let average = (Number(n1) + Number(n2) + Number(n3)) / 3;

let result = average > 6;

if (result) {
  console.log("Parabéns! " + student + " Sua média foi: " + average);
} else {
  console.log(student +"você está de recuperação, continue estudando. Sua média foi: " + average);
}


/*
skills: prompt, operadores matemáticos, concatenação, condicional
*/