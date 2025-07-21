// Dados de alunos
const students = [
  { name: "João", age: 20, grades: [85, 90, 78] },
  { name: "Maria", age: 19, grades: [92, 95, 89] },
  { name: "Pedro", age: 21, grades: [70, 65, 80] },
  { name: "Ana", age: 18, grades: [60, 75, 68] },
  { name: "Carlos", age: 22, grades: [90, 88, 92] }
];

// e) Calcular média geral da turma
console.log("\ne) Média da turma:");
const classAverage = studentsWithAverage.reduce((sum, student) => sum + student.average, 0) / studentsWithAverage.length;
console.log(`Média geral da turma: ${classAverage.toFixed(2)}`);