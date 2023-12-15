document.body.innerText = "olá mundo";

const pessoa = {
  nome: 'igor ',
  sobreNome: 'nascimento',
  idade: 21,
  endereco: {
    numero: 10,
    rua: 'avaneida zequina freire',
    corDaCasa: 'azul'
  }
};

var l = document.getElementById('app');

l.body.innerText = JSON.stringify(Object.values(pessoa));

var numero = 23;

var numero2 = 22;

function casasDoBairro(numero,numero2) {
  return numero * numero2;
};

var resultado = casasDoBairro(numero,numero2)

document.body.innerText = 'o valor do calculo é de '+ Object.values({resultado});