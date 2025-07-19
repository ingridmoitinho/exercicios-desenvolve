// Desafio: c) Substitua "Silva" por outro sobrenome usando replace

const firstName = "Maria";
const lastName = "Silva";
const fullName = firstName + " " + lastName;
console.log("Nome completo:", fullName);

const novoNome = fullName.replace("Silva", "Marques");
console.log("Nome com novo sobrenome:", novoNome);

const greeting = `Olá, meu nome é ${firstName} ${lastName}!`;
console.log(greeting);

console.log("Comprimento do nome:", fullName.length);
console.log("Nome em maiúsculas:", fullName.toUpperCase());
console.log("Nome em minúsculas:", fullName.toLowerCase());
