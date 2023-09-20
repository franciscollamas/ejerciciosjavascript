
/** Ejercicio 1
 * 
 * Elabora un programa que determine si una persona tiene edad
 * suficiente para votar
 * 
 * Debe recibir como parametro la edad
 * 
 * Consideraciones: utilizar la estructura if-else
 */

function puedevotar (edad) {
    if (edad >=18) {
        console.log ("PuedeVotar");}
    else {
        console.log ("Nopuedevotar")
    }

    } 

/** Ejercicio 2
 * 
 * Desarrolla un programa que permita obtener el promedio de un/a alumno/a
 * recibiendo como parametro 4 calificaciones
 * 
 * Si el promedio es aprobatorio (mayor o igual a 7) imprimir aprobado
 * en el caso de que no sea un promedio aprobatorio imprimir reporobado
 * 
 * Consideraciones: utilizar la estructura if-else
 * 
 */

function calculopromedio (calificacion1, calificacion2, calificacion3, calificacion4)
{
var sumacalificaciones = calificacion1 + calificacion2 + calificacion3 + calificacion4
var promedio = sumacalificaciones / 4 ;

if (promedio >=7) {
    console.log ("aprobado")
}
else {
    console.log ("reprobado")
}
}


/** Ejercicio 4
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 7 y 8
 * 
 * Debe recibir como parametro un numero, cual sea
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * 
 * Consideracion - Utilizar la estructura if-else
 * Casos de prueba: 56, 7, 8, 0, 224, 73
 */

function esDivisibleEntre7y8 (numero) {
    if (numero % 7 === 0 && numero % 8 === 0) {
        console.log(true);
    } else {
        console.log(false);
    }
}

/** Ejercicio 5
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 4 o 9
 * 
 * Debe recibir como parametro un numero aleatorio
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * Consideracion - Utilizar la estructura if-else
 */

function esDivisibleentre4y9 (numero){
    if (numero % 9 === 0 && numero % 4 ===0){
        console.log(true);
    }
    else {
        console.log(false)
    }
}

/** Ejercicio 6
 * 
 * Crear un programa que funcione como una calculadora simple
 * que realice las operaciones aritmeticas basicas
 * 
 *  -suma
 *  -resta
 *  -multiplicacion
 *  -division
 * 
 * Debe recibir como parametros la operacion a realizar y dos numeros
 * Dependiendo de la opcion que se indique, realizar la operacion correspondiente
 * 
 * 1. suma
 * 2. resta
 * 3. multiplicacion
 * 4. division
 * 
 * Consideraciones: utilizar la estructura switch
 */

function calcular(operacion, num1, num2) {
    switch (operacion) {
        case "suma":
            console.log(num1 + num2);
            break;
        case "resta":
            console.log(num1 - num2);
            break; 
        case "multiplicacion":
            console.log(num1 * num2);
            break; 
        case "division":
            console.log(num1 / num2);
            break;
        default:
            console.log("Opción no válida");
    }
}

/** Ejercicio 7
 * 
 * Realizar un programa que reciba como parametro una categoria de peliculas
 * 
 * -accion
 * -drama
 * -comedia
 * -romance
 * -suspenso
 * -terror
 * 
 * Segun sea la categoria que se reciba, imprimir una recomendacion de pelicula
 * de acuerdo al parametro recibido
 * 
 * Consideraciones: utilizar la estructura switch
 */

function recomendarPelicula(categoria) {
    switch (categoria) {
        case "accion":
            console.log("Recomendación de película de acción: Mad Max: Fury Road");
            break;
        case "drama":
            console.log("Recomendación de película de drama: Forrest Gump");
            break;
        case "comedia":
            console.log("Recomendación de película de comedia: Superbad");
            break;
        case "romance":
            console.log("Recomendación de película de romance: La La Land");
            break;
        case "suspenso":
            console.log("Recomendación de película de suspenso: El Silencio de los Inocentes");
            break;
        case "terror":
            console.log("Recomendación de película de terror: El Conjuro");
            break;
        default:
            console.log("Categoría no reconocida. No hay recomendación disponible.");
    }
}

/** Ejercicio 8
 * 
 * Crear una interfaz de un cajero ATM
 * 
 * Debe recibirse como parametro alguna de las siguientes opciones
 * 
 * 1. Retirar dinero
 * 2. Transferencia
 * 3. Deposito
 * 4. Pago de servicios
 * 
 * Segun sea la opcion indicada, imprimir en pantalla la accion a realizar
 * Utilizar if/else
 */

function cajeroATM(opcion) {
    if (opcion === 1) {
        console.log("Seleccionaste: Retirar dinero");
    } else if (opcion === 2) {
        console.log("Seleccionaste: Transferencia");
    } else if (opcion === 3) {
        console.log("Seleccionaste: Depósito");
    } else if (opcion === 4) {
        console.log("Seleccionaste: Pago de servicios");
    } else {
        console.log("Opción no válida");
    }
}

/** Ejercicio 9
 * 
 * Escribir en codigo un programa conversor de divisas
 * 
 * Debe recibir como parametro una cantidad en pesos mexicanos y
 * Segun sea la opcion que se indique, realizar la conversion correspondiente
 * 
 * 1. A dolares estadounidenses
 * 2. A euros 
 * 3. A yenes japoneses
 * 4. A libra esterlina
 * 5. A franco suizo
 * 
 * Consideracion: estructura switch
 * 
 *  * 
 */
function convertirDivisas(cantidad, opcion) {
    switch (opcion) {
        case 1:
            // Conversión a dólares estadounidenses (USD).
            const tasaDolar = 0.049; // Tasa de cambio actual (1 MXN = 0.049 USD).
            const resultadoDolar = cantidad * tasaDolar;
            console.log(`${cantidad} pesos mexicanos son aproximadamente ${resultadoDolar} dólares estadounidenses.`);
            break;
        case 2:
            // Conversión a euros (EUR).
            const tasaEuro = 0.042; // Tasa de cambio actual (1 MXN = 0.042 EUR).
            const resultadoEuro = cantidad * tasaEuro;
            console.log(`${cantidad} pesos mexicanos son aproximadamente ${resultadoEuro} euros.`);
            break;
        case 3:
            // Conversión a yenes japoneses (JPY).
            const tasaYen = 5.43; // Tasa de cambio actual (1 MXN = 5.43 JPY).
            const resultadoYen = cantidad * tasaYen;
            console.log(`${cantidad} pesos mexicanos son aproximadamente ${resultadoYen} yenes japoneses.`);
            break;
        case 4:
            // Conversión a libra esterlina (GBP).
            const tasaLibra = 0.036; // Tasa de cambio actual (1 MXN = 0.036 GBP).
            const resultadoLibra = cantidad * tasaLibra;
            console.log(`${cantidad} pesos mexicanos son aproximadamente ${resultadoLibra} libras esterlinas.`);
            break;
        case 5:
            // Conversión a franco suizo (CHF).
            const tasaFranco = 0.046; // Tasa de cambio actual (1 MXN = 0.046 CHF).
            const resultadoFranco = cantidad * tasaFranco;
            console.log(`${cantidad} pesos mexicanos son aproximadamente ${resultadoFranco} francos suizos.`);
            break;
        default:
            console.log("Opción no válida");
    }
}


/** Ejercicio 10
 * 
 * Realizar un programa que calcule un descuento del 10% a un producto si se ingresa el codigo
 * de descuento correcto
 * 
 * Debe recibir como parametros el precio del producto
 * y el codigo de descuento
 * 
 * Sugerencia de codigo de descuento DESCUENTO10
 * 
 * Consideracion: utilizar la estructura if-else
 * 
 */

function aplicarDescuento(precio, codigoDescuento) {
    const codigoCorrecto = "DESCUENTO10"; // Código de descuento correcto.
    const porcentajeDescuento = 10; // Porcentaje de descuento (10%).

    if (codigoDescuento === codigoCorrecto) {
        // Si el código de descuento es correcto, aplicamos el descuento.
        const descuento = (precio * porcentajeDescuento) / 100;
        const precioConDescuento = precio - descuento;
        console.log(`Precio original: $${precio}`);
        console.log(`Descuento aplicado: $${descuento}`);
        console.log(`Precio con descuento: $${precioConDescuento}`);
    } else {
        // Si el código de descuento no es correcto, se muestra el precio sin descuento.
        console.log(`Precio sin descuento: $${precio}`);
    }
}

// Ejemplo de uso de la función con diferentes códigos de descuento.
const pr
