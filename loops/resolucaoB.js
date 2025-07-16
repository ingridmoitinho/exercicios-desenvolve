const arrNuemeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const somaNumros = (arr) => arr.reduce((acc, curr) => acc + curr, 0);

console.log(`A soma dos números é: ${somaNumros(arrNuemeros)}`);