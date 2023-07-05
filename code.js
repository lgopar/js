//scriot con ciclo 
let dias = 1; 

do {
    let resultado = 24 * dias
    if (resultado === 144) {
        console.log("vamos 6 dias de estudio")
    } else {
        console.log(`12 * ${dias} = ${resultado}`);
    }
    dias++;
} while (dias <= 15);
 console.log("Llevamos 15 dias de estudio, ¿aprobaremos?")
 


 //script con condicional

 var numero = 15895478

 //Se verifica si el numero ingresado es par o impar. 
 if (numero % 2 === 0) {
    console.log(numero + " <--- Este es un numero par.");
    } else {
        console.log(numero + " <--- Este numero es impar.")
    }

    //Script interactivo, solicita al usuario que ingrese un numero < 1 y 100 < que sea divisible entre 3. Se verifica si el numero ingresado es entero y si es un numero correcto se devuelve en consola un mensaje positivo. Si es un numero incorrecto se genera un ciclo hasta que se ingrese correctamente el numero.  
    
var numeroCorrecto = false;

while (!numeroCorrecto) {
    var numero = prompt("Ingresa un número del 1 al 100 divisible por 3:");

         if (!isNaN(parseInt(numero)) && parseInt(numero) >= 1 && parseInt(numero) <= 100) {
        numero = parseInt(numero);
     if (numero % 3 === 0) {
            console.log("¡El número ingresado es correcto!");
            numeroCorrecto = true;
        } else {
            console.log("El número no es divisible por 3. Intenta nuevamente.");
        }
    } else {
        console.log("No has ingresado un número válido. Intenta nuevamente.");
    }
}

