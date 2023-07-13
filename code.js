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
 
    function validarNumeroDivisiblePorTres() {
        let numeroValido = false;
      
        while (!numeroValido) {
          let numero = prompt("Ingresa un número enterodel 1 al 100 divisible por 3:");
      
          // validacion de numero entero

          if (!isNaN(parseInt(numero)) && Number.isInteger(parseFloat(numero)) && parseInt(numero) >= 1 && parseInt(numero) <= 100) {
            numero = parseInt(numero);
      
            // verificcacion si es % 3
            
            if (numero % 3 === 0) {
              numeroValido = true;
              console.log("¡El número ingresado es correcto!");
            } else {
              console.log("El número no es divisible por 3. Intenta nuevamente.");
            }
          } else {
            alert("No has ingresado un número entero válido. Intenta nuevamente.");
          }
        }
      }
      
      // iniciar validacion
      validarNumeroDivisiblePorTres();
      