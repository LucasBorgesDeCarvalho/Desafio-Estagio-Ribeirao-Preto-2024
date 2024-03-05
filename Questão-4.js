/* 4) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada.

Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada? */

// Simulando os interruptores (0 para desligado, 1 para ligado)
const interruptor1 = 0;
const interruptor2 = 1;
const interruptor3 = 1;

// Verifica o estado das lâmpadas
if (interruptor1 === 1) {
    console.log("A lâmpada controlada pelo interruptor 1 está acesa.");
} else if (interruptor2 === 1) {
    console.log("A lâmpada controlada pelo interruptor 2 está acesa.");
} else {
    console.log("A lâmpada controlada pelo interruptor 3 está acesa.");
}
