console.log("=== Sistema da Turma ===");

//Implementação das Funções
function somar(a, b) {
    return a + b;
}
function parOuImpar (numero) {
    if (numero % 2 === 0) {
        console.log("par");
    } else {
        console.log("impar");
    }
}

//Teste Das Funções
console.log("10 + 5 =", somar(10, 5));
console.log("numero é par ou impar =", parOuImpar(10));