

var pesomenor40 = 0
var pesoentre40y50 = 0
var pesoentre50y60 = 0
var pesomayor60 = 0
var cantidadalumno = prompt("¿Cuantos alumnos va a registrar? ");

for (i=1; i<=cantidadalumno; i++) {
    var pesoalumno= prompt("Porfavor indique el peso del estudiante:  " + i);
    if (pesoalumno < 40){
        pesomenor40 += 1;
}
    else if (pesoalumno >= 40 && pesoalumno <= 50 ){
        pesoentre40y50 += 1;
    }

    else if (pesoalumno >= 50 && pesoalumno <= 60 ){
        pesoentre50y60 += 1;

}
    else if (pesoalumno > 60 ){
        pesomayor60 += 1;
}
}
document.write("Existen "+ pesomenor40 + " alumnos con un peso menor a 40kg" + "<br />" );
document.write("Existen "+ pesoentre40y50 + " alumnos con un peso mayor a 40kg y menor a 50kg" + "<br />" );
document.write("Existen "+ pesoentre50y60 + " alumnos con un peso mayor a 50kg y menor a 60kg" + "<br />" );
document.write("Existen "+ pesomayor60 + " alumnos con un peso mayor de 60kg" + "<br />" );
