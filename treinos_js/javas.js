let nome = 'Jorge';
const numero = 4;
/*
"const" é uma variável contante
"let" é uma variável mutável
*/
alert(`Olá ${nome}. ${numero}² é ` + Math.pow(4, 2));
/*
    `Texto ${variável} Texto`
    posso passar variáveis para evitar concatenar toda hora, chama-se interpolação
    Biblioteca Math traz muitas funções matemáticas que podem ser utilizadas
*/

let nomes = ['Jorge', 'Cocão']; /*Criando uma array */
console.log(nomes[0]); /*Acessando índice da array */
nomes.unshift('João'); /*Adiciona no começo */
nomes.push('João'); /*Adiciona no fim */
nomes.every('João'); /*Verifica todos os itens da array */

alert(nomes);