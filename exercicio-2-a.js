// Desafio: a) Extraia o primeiro nome usando o método slice ou substring

const firstName = "Maria";
const lastName = "Silva";
const fullName = firstName + " " + lastName;
const primeiroNome = fullName.substring(0, fullName.indexOf(" "));

console.log(`O primeiro nome é: ${primeiroNome}`);

const greeting = `Olá, meu nome é ${firstName} ${lastName}!`;
console.log(greeting);

console.log("Comprimento do nome:", fullName.length);
console.log("Nome em maiúsculas:", fullName.toUpperCase());
console.log("Nome em minúsculas:", fullName.toLowerCase());
