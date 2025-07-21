// Dados de alunos
const students = [
  { name: "João", age: 20, grades: [85, 90, 78] },
  { name: "Maria", age: 19, grades: [92, 95, 89] },
  { name: "Pedro", age: 21, grades: [70, 65, 80] },
  { name: "Ana", age: 18, grades: [60, 75, 68] },
  { name: "Carlos", age: 22, grades: [90, 88, 92] }
];

// d) Encontrar aluno com maior média
console.log("\nd) Melhor aluno:");
const bestStudent = studentsWithAverage.reduce((prev, current) => 
  (prev.average > current.average) ? prev : current
);
console.log(`Melhor desempenho: ${bestStudent.name} com média ${bestStudent.average.toFixed(2)}`);