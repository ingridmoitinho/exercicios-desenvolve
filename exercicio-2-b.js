// Desafio: b) Verifique se o nome completo contém a letra 'a'
const firstName = "Maria";
const lastName = "Silva";
const fullName = firstName + " " + lastName;
console.log("Nome completo:", fullName);

const greeting = `Olá, meu nome é ${firstName} ${lastName}!`;
console.log(greeting);

console.log("Comprimento do nome:", fullName.length);
console.log("Nome em maiúsculas:", fullName.toUpperCase());
console.log("Nome em minúsculas:", fullName.toLowerCase());

const verificarLetraA = fullName.toLowerCase().includes("a");
console.log(`O nome completo tem a letra 'A' : ${verificarLetraA}`);
