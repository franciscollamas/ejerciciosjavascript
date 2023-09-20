
/** Ejercicio para esta sesion
 * 
 * Declarar 10 variables de cada tipo de dato sin tomar en cuenta objetos, arrays y null
 * Pueden variar entre las palabras reservadas var, let y const
 *      -number
 *      -string
 *      -boolean
 * 
 * Declarar variables numericas y realizar las operaciones aritmeticas basicas
 *      -suma
 *      -resta
 *      -multiplicacion
 *      -division
 * 
 * Declarar variables que concatenen cadenas de texto
 *      -5 mensajes diferentes en pantalla, sin limite de palabras.
 * 
 * Declarar 5 variables y convertirlas a otro tipo de dato
 * 
 *  CONSIDERACIONES: poner en practica las mejores practicas para declaracion de variables.
 * Imprimir los resultados en pantalla con un console.log()
 */
//variables de tipo number


const numero1 = 5;
let numero2 = 10;
var numero3 = 15;


//variables de tipo string
const cadena1 = "Casa";
let cadena2 = "de Toño";
var cadena3 = "Casa de Toño";

//variables de tipo boolean

const esVerdadero = true;
let esFalso = false;
var condition = true;
const soltero = true;
let viudo = false;
var hijos = false;
const casado =true;


// Realizar operaciones aritméticas básicas
const suma = numero1 + numero2;
const resta = numero3 - numero1;
const multiplicacion = numero2 * numero3;
const division = numero3 / numero1;


// Declarar variables que concatenen cadenas de texto
let caminos = 'caminos'
let michoacan = 'michoacan'
let pueblos = "pueblos"
let pasando = "pasando"



let lugar = caminos + michoacan + pasando;
let cancion = pasando + pueblos + caminos;

// Declarar 5 variables y convertirlas a otro tipo de dato
const numeroComoString = String(numero1);
const cadenaComoNumero = parseInt(cadena1);
const booleanComoNumero = Number(esVerdadero);
const numeroComoBoolean = Boolean(numero2);
const cadenaComoBoolean = Boolean(cadena2);


x = 9;
console.log(x);
var x;