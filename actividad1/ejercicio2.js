
var montoinicial = parseInt(prompt("¿Cuanto es el deposito inicial? "));
var montofindeano = montoinicial + 2750 //250bs por 11 meses
var interesanual = 15
var montoconinteres = montofindeano * interesanual/100 + montofindeano

document.write("Su monto total en su cuenta de ahorros es de "+montoconinteres +" Bolivares");
