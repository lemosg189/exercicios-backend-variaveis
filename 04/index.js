let capital = 1000;
let txJuros = 0.125;
let tempoMeses = 5;

let montante = capital * ((1 + txJuros) ** tempoMeses);

console.log(montante);

