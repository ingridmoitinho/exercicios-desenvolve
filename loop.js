function tabuadaSoma(valor) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${valor} + ${i} = ${valor + i}`);
    }
}

function tabuadaSubtracao(valor) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${valor} - ${i} = ${valor - i}`);
    }
}

function tabuadaMultiplicacao(valor) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${valor} * ${i} = ${valor * i}`);
    }
}

function tabuadaDivisao(valor) {
    for (let i = 1; i <= 10; i++) {
        if (i !== 0) {
            console.log(`${valor} / ${i} = ${(valor / i).toFixed(2)}`);

        } else {
            console.log(`${valor} / ${i} = undefined`);
        }
    }
}

tabuadaSoma(7);
console.log('-------------------');
tabuadaSubtracao(7);
console.log('-------------------');
tabuadaMultiplicacao(7);
console.log('-------------------');
tabuadaDivisao(7);
