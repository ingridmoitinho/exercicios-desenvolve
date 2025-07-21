// Dados de alunos
const students = [
  { name: "João", age: 20, grades: [85, 90, 78] },
  { name: "Maria", age: 19, grades: [92, 95, 89] },
  { name: "Pedro", age: 21, grades: [70, 65, 80] },
  { name: "Ana", age: 18, grades: [60, 75, 68] },
  { name: "Carlos", age: 22, grades: [90, 88, 92] }
];

// c) Contar aprovados e reprovados
console.log("\nc) Contagem de aprovações:");
const approvedCount = studentsWithStatus.filter(student => student.status === "Aprovado").length;
const failedCount = studentsWithStatus.filter(student => student.status === "Reprovado").length;
console.log(`Aprovados: ${approvedCount}`);
console.log(`Reprovados: ${failedCount}`);

