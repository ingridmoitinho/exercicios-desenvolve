// Desafio  c) Crie uma verificação que diga se uma pessoa pode dirigir (precisa ser maior de idade E ter habilitação)

const idade = 20;
let temHabilitacao = false

if (idade < 18) {
    temHabilitacao = false;
}

console.log("--- Verificação de Permissão para Dirigir (com segurança) ---");
console.log(`Analisando: Idade ${idade}, Possui Habilitação: ${temHabilitacao}`);

if (idade < 18) {
    console.log("Resultado: Não pode dirigir! (É menor de idade).");
} else if (idade >= 18 && temHabilitacao === true) {
    console.log("Resultado: Pode dirigir! Dirija com segurança.");
} else {
    console.log("Resultado: Não pode dirigir! (Falta a habilitação).");
}