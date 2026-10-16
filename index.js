console.log("=== Sistema da Turma ===");

//Implementação das Funções
function somar(a, b) {
    return a + b;
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
//Teste Das Funções
console.log("10 + 5 =", somar(10, 5));
console.log(positivo_negativo_zero(9))