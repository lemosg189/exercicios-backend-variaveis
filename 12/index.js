let montante = 90_000;
let capitalInicial = 60_000;
let qtsMeses = 24;

taxaDeJuros = ((montante / capitalInicial) ** (1 / qtsMeses) - 1) * 100;

console.log(taxaDeJuros);

console.log(`O seu financiamento de ${capitalInicial} reais teve uma taxa 
de juros de ${taxaDeJuros}%, pois após ${qtsMeses} meses você teve que 
pagar ${montante} reais.`)