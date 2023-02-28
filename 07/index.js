let p0Infectadas = 1000;
let p0PodeInfectar = 4;
let tempoDias = 7;

let totalInfectadas = p0Infectadas * (p0PodeInfectar ** (tempoDias / 7));

console.log(totalInfectadas);