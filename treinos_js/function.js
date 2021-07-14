let nome = 'Jorge';
function funcao(nome) {
    console.log('Olá ' + nome);
}
funcao(nome);
function retorno(idade){
    let idadeDobro = idade*2;
    return idadeDobro;
}
console.log(retorno(15));
/*
Funções são semlhantes ao funcionamento de métodos
Pode se passar parametros para seu funcionamento
Chamar a função é só escrever: function(parametro)
*/
let idadeMinima = function idade(n){
    return n+10;
}
console.log('Você tem '+idadeMinima(9));
/*Outro jeito de criar a function */

/*Arrow function*/ 
let dados = (num) => num*10
console.log(dados(2));

//CRIAR FUNÇÕES PEQUENAS PARA MELHOR VISUALIZAÇÃO
