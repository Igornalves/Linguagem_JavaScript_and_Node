// Variáveis ​​são contêineres para armazenamento de dados
// Variáveis ​​JavaScript podem ser declaradas de 4 maneiras:

// Usando var
// Usando let
// Usando const

// Exemplo abaixo:.

var x = 4

var y = 5

var z = x + y

console.log('')

console.log("valor da variavel z é de: ", z)

var f = "ola mundo"

console.log('')

console.log(f)

const e = 5

const u = 6

const w = e + u

console.log('')

console.log("valor da variavel W é de: ", w)

console.log('')

// Quando usar var, let ou const?

// 1. Sempre declare variáveis

// 2. Sempre use const se o valor não deve ser alterado

// 3. Sempre use constse o tipo não deve ser alterado (Arrays e Objetos)

// 4. Só use let se não puder usar const

// 5. Use apenas varse você DEVE oferecer suporte a navegadores antigos.


// Uma variável const não pode ser reatribuída:

const PI = 3.141592653589793;
// PI = 3.14; vai da ERRO SE TENTA atribuir um novo valor nela
// PIe = PI + 10; da mesma forma aqui 

console.log(PI)

// A palavra-chave consté um pouco enganosa.

// Não define um valor constante. Ele define uma referência constante a um valor.

// Por causa disso você NÃO pode:

// - Reatribuir um valor constante
// - Reatribuir uma matriz constante
// - Reatribuir um objeto constante

// Mas você pode:

// - Alterar os elementos da matriz constante
// - Alterar as propriedades do objeto constante

// Exemplo de Matrizes constantes

console.log('')

const carros = ["BMW","Ferrari","Fiat"]

console.log(carros)

console.log('\ncolocando um carro no lugar do fiat\n')

carros[2] = "Toyota"

console.log(carros)

console.log('\nAdcionado um carro na colecao da garagem:\n')

carros.push("Audi")

console.log(carros)


// Exemplo de Objetos constantes:.

