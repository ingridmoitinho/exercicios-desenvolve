const arrAleatorio = [100, 250, 2, 65, 75, 99, 185, 10];

//Resolucao simples
arrAleatorio.sort((a, b) => a - b);
console.log(arrAleatorio[0]);


//com loop
const menorValor = (arr) => {
    const valor = arr[0];
    arr.forEach((v) => {
        if (v < valor) {
            valor += v;
        }
    })

    return valor;
}

console.log(menorValor(arrAleatorio));