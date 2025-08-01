// Explicit Type Casting
const string1 = '42'
const integer1 = parseInt(string1)
console.log(typeof string1, string1)
console.log(typeof integer1, integer1)

const binary = '1011'
const decimal = parseInt(binary, 2)
console.log(typeof binary, binary)
console.log(typeof decimal, decimal)


// Implicit type casting
const sum = 5 + '3'
console.log(sum)

const number = 43
const boolean1 = true
const boolean2 = false
console.log(`Numero + buleano: ${number + boolean2}`)
console.log(`Buleano + buleano: ${boolean2 + boolean2}`)