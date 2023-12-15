// Objetos JavaScript

// variáveis ​​JavaScript são contêineres para valores de dados.
// Este código atribui um valor simples (Fiat) a uma variável chamada car:

var car = 'fiat'

const carros = {
    marcar: 'BMW',
    placa: '23djd3f',
    ano: 2022,
    color: 'Preto'
}

const pessoa = {
    primeiroNome: 'igor',
    segundoNome: 'nascimento',
    idade: 19,
    nomeCompleto: function(){
        return pessoa.primeiroNome + " " + pessoa.segundoNome;
    }
}

pessoa.nomeCompletoObj = pessoa.nomeCompleto();

console.log('')
console.log(carros)
console.log('')
// console.log(JSON.stringify(Object.values(pessoa)))
console.log(pessoa)
console.log('')
console.log()
console.log(pessoa.nomeCompletoObj)

