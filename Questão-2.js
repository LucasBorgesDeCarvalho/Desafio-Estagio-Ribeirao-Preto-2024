/*
2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.



IMPORTANTE:

Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código; */

// Programa para gerar a sequência de Fibonacci e verificar se um número pertence a ela

// Programa para gerar a sequência de Fibonacci até o termo informado

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function fibonacci(numero) {
    let n1 = 0;
    let n2 = 1;

    // Caso especial para os primeiros dois termos
    if (numero === 1) return 0;
    if (numero === 2) return 1;

    // Gera a sequência até o termo desejado
    for (let i = 3; i <= numero; i++) {
        const proximoTermo = n1 + n2;
        n1 = n2;
        n2 = proximoTermo;
    }

    return n2;
}

rl.question('Informe um número: ', (numeroInformado) => {
    const resultado = fibonacci(parseInt(numeroInformado));
    console.log(`O termo ${numeroInformado} da sequência de Fibonacci é ${resultado}.`);
    rl.close();
});

// Para rodar tem que colocar no terminal (node Questão-2.js)