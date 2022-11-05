

const {gets, print} = require ('./funcoes-auxiliares');

const numerosSorteado = [];

for (let i = 0; i < 5; i++) {
    const numerosSorteados = gets();
    numerosSorteado.push(numerosSorteados);
}

let maiorValor = 0;

for (let i = 0; i < numerosSorteado.length; i++) {
    const numerosSorteados = numerosSorteado[i];
    if (numerosSorteados > maiorValor) {
        maiorValor = numerosSorteados;
    }
    
}
print('O maior valor é: ' + maiorValor);