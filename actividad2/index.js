var nombre = prompt("Ingrese su nombre:");
var apellido = prompt("Ingrese su apellido:");
var cedula = prompt("Ingrese su cedula:");
var hordiur = prompt("Ingrese la cantidad de horas diurnas que trabajo en la quincena:");
var horvesp = prompt("Ingrese la cantidad de horas vespertinas que trabajo en la quincena:");
var hornoct = prompt("Ingrese la cantidad de horas nocturnas que trabajo en la quincena:");

var sueldosd = (675 * hordiur) + (700 * horvesp) + (956.23 * hornoct);

console.log(sueldosd);

if (sueldosd < 85000)
   {
    var ahorhabi = sueldosd * 0.001
    var segusoci = sueldosd * 0.0015
    var sueldocd = sueldosd - (ahorhabi + segusoci)
   }
else if (sueldosd >= 85000 && sueldosd <= 150000)
    {
    var ahorhabi = sueldosd * 0.0015
    var segusoci = sueldosd * 0.002
    var sueldocd = sueldosd - (ahorhabi + segusoci)
    }
else
    {
    var ahorhabi = sueldosd * 0.003
    var segusoci = sueldosd * 0.0025
    var sueldocd = sueldosd - (ahorhabi + segusoci)
    }   

document.write("Nombre: " + nombre + "<br>") ;
document.write("Apellido: " + apellido + "<br>") ;
document.write("Cedula: " + cedula + "<br>") ;
document.write("Horas diurnas trabajadas: " + hordiur + "<br>") ;
document.write("Horas vespertinas trabajadas: " + horvesp + "<br>") ;
document.write("Horas nocturnas trabajadas: " + hornoct + "<br>") ;
document.write("Sueldo quincenal sin deduccion: " + sueldosd.toFixed(2) + "<br>") ;
document.write("Descuento de ahorro habitacional: " + ahorhabi.toFixed(2) + "<br>") ;
document.write("Descuento de seguro social: " + segusoci.toFixed(2) + "<br>") ;
document.write("Sueldo quincenal con deduccion: " + sueldocd.toFixed(2) + "<br>") ;

