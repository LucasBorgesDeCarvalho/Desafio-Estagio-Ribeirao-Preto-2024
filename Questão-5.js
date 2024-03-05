/*
5) Escreva um programa que inverta os caracteres de um string.


IMPORTANTE:

a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

b) Evite usar funções prontas, como, por exemplo, reverse;
 */

// Função para inverter uma string

function inverterString(string) {
    let resultado = "";
    for (let i = string.length - 1; i >= 0; i--) {
        resultado += string[i];
    }
    return resultado;
}

// Exemplo de uso:
const minhaString = "Olá, mundo!";
const stringInvertida = inverterString(minhaString);
console.log(`String invertida: ${stringInvertida}`);
