// a) 1, 3, 5, 7, ___
// Próximo elemento: 9
const a = [1, 3, 5, 7];
const proximoA = a[a.length - 1] + 2;
console.log(`a) Próximo elemento: ${proximoA}`);

// b) 2, 4, 8, 16, 32, 64, ___
// Próximo elemento: 128
const b = [2, 4, 8, 16, 32, 64];
const proximoB = b[b.length - 1] * 2;
console.log(`b) Próximo elemento: ${proximoB}`);

// c) 0, 1, 4, 9, 16, 25, 36, ___
// Próximo elemento: 49
const c = [0, 1, 4, 9, 16, 25, 36];
const proximoC = c[c.length - 1] + 13;
console.log(`c) Próximo elemento: ${proximoC}`);

// d) 4, 16, 36, 64, ___
// Próximo elemento: 100
const d = [4, 16, 36, 64];
const proximoD = d[d.length - 1] + 36;
console.log(`d) Próximo elemento: ${proximoD}`);

// e) 1, 1, 2, 3, 5, 8, ___
// Próximo elemento: 13
const e = [1, 1, 2, 3, 5, 8];
const proximoE = e[e.length - 1] + 5;
console.log(`e) Próximo elemento: ${proximoE}`);

// f) 2, 10, 12, 16, 17, 18, 19, ___
// Próximo elemento: 20
const f = [2, 10, 12, 16, 17, 18, 19];
const proximoF = f[f.length - 1] + 1;
console.log(`f) Próximo elemento: ${proximoF}`);
