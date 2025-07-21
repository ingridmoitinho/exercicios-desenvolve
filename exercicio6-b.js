// Dados de alunos
const students = [
  { name: "João", age: 20, grades: [85, 90, 78] },
  { name: "Maria", age: 19, grades: [92, 95, 89] },
  { name: "Pedro", age: 21, grades: [70, 65, 80] },
  { name: "Ana", age: 18, grades: [60, 75, 68] },
  { name: "Carlos", age: 22, grades: [90, 88, 92] }
];

// b) Determinar aprovação/reprovação
console.log("\nb) Situação dos alunos:");
const studentsWithStatus = studentsWithAverage.map(student => {
  const status = student.average >= 70 ? "Aprovado" : "Reprovado";
  return { ...student, status };
});
studentsWithStatus.forEach(student => {
  console.log(`${student.name}: ${student.status}`);
});