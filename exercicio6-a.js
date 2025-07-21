// Dados de alunos
const students = [
    { name: "João", age: 20, grades: [85, 90, 78] },
    { name: "Maria", age: 19, grades: [92, 95, 89] },
    { name: "Pedro", age: 21, grades: [70, 65, 80] },
    { name: "Ana", age: 18, grades: [60, 75, 68] },
    { name: "Carlos", age: 22, grades: [90, 88, 92] }
];
// a) Calcular média de cada aluno
const studentsWithAverage = students.map(student => {
    const sum = student.grades.reduce((acc, grade) => acc + grade, 0);
    const average = sum / student.grades.length;
    return {
        ...student,
        average: average.toFixed(2)
    };
});
console.log("Médias dos alunos:");
studentsWithAverage.forEach(student => {
    console.log(`${student.name}: ${student.average}`);
});