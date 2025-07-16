// Desafio a) Crie um sistema de classificação de notas: - 0-59: F - 60-69: D - 70-79: C - 80-89: B - 90-100: A

const nota = 72;

console.log("A nota do aluno é:", nota);

if (nota >= 90 && nota <= 100) {
    console.log("Classificação: A");
} else if (nota >= 80 && nota <= 89) {
    console.log("Classificação: B");
} else if (nota >= 70 && nota <= 79) {
    console.log("Classificação: C");
} else if (nota >= 60 && nota <= 69) {
    console.log("Classificação: D");
} else if (nota >= 0 && nota <= 59) {
    console.log("Classificação: F");
} else {
    console.log("Nota inválida. Por favor, insira um valor entre 0 e 100.");
}
