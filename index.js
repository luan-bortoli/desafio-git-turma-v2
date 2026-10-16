console.log("=== Sistema da Turma ===");

//Implementação das Funções
function somar(a, b) {
    return a + b;
}

function potenciacao(a, b) {
    return a ** b;
}

function positivo_negativo_zero(a) {
    let resultado
    if (a === 0) {
        resultado = 'zero'
    } else if (a < 0) {
        resultado = 'negativo'
    } else if (a > 0) {
        resultado = 'positivo'
    }
    return resultado
}

function divisao(a, b) {
    return a / b;
}

function maiorNumero(numero, numero1) {
    if (numero > numero1){
        return numero;
    } else if (numero1 > numero){
        return numero1;
    }
}

//Teste Das Funções
console.log("10 + 5 =", somar(10, 5));
console.log("POTENCIAÇÃO: 10 ** 5 =", potenciacao(10, 5));
console.log("o maior numero é", maiorNumero(30, 20));
console.log("DIVISÃO: 10 / 5 =", divisao(10, 5));
console.log(positivo_negativo_zero(9))
