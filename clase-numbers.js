// 1. Tipo enetero y decimal
let entero = 43
let decimal = 43.10
console.log(typeof entero, typeof decimal)

// 2. Notacion científica
const cientifico = 5e3
console.log(cientifico, typeof cientifico)

// 3. Infinitos y NaN
let infinito = Infinity
let noEsUnNumero = NaN
console.log(infinito, typeof infinito)
console.log(noEsUnNumero, typeof noEsUnNumero)

// Solucionando errores de precisión
let resultado = 0.1 + 0.2
console.log(resultado)
console.log(resultado.toFixed(1)) // Solucion, que nos devuelva un solo decimal.

// probando
console.log((0.1 + 0.2) === 0.3) // false
console.log(resultado.toFixed(1) === 0.3.toFixed(1)) // Solucion: true

// Operaciones Avanzadas
console.log(`Raiz cuadrada: ${Math.sqrt(16)}`)
console.log(`Valor absoluto: ${Math.abs(-7)}`)
console.log(`Valor random: ${Math.random()}`)