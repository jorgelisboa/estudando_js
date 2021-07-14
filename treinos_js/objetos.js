/*
Criando objeto, chave: valor
let pessoa = {
    nome: '',
    idade: '',
    cursoAtual: ''
}
*/

function gerarPessoa(nome, email, curso){

    let pessoa = {
        nome: nome,
        email: email,
        curso: curso
    }

    return pessoa;
}
let nome = "Jorge";
let email = "teste@teste.com";
let curso = "Programação";

console.log(gerarPessoa(nome, email, curso));
let pessoa1 = gerarPessoa(nome, email, curso).curso;
console.log(pessoa1);