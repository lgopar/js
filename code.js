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
          let numero = prompt("Ingresa un número entero del 1 al 100 divisible por 3:");
      
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
      validarNumeroDivisiblePorTres();*/

// PRE-ENTREGA Nro2 
let personas = [];

function agregarPersona() {
  let nombre = prompt("Ingresa el nombre de la persona:");
  let edad = prompt("Ingresa la edad de la persona:");
  let ciudad = prompt("Ingresa la ciudad de la persona:");

  const persona = {
    nombre: nombre,
    edad: parseInt(edad),
    ciudad: ciudad
  };

  personas.push(persona);
  console.log("Persona agregada correctamente!");
}

function mostrarPersonas() {
  console.log("Lista de personas:");
  personas.forEach((persona, index) => {
    console.log(index + 1 + ". Nombre: " + persona.nombre + ", Edad: " + persona.edad + ", Ciudad: " + persona.ciudad);
  });
}

function buscarPersonaPorNombre() {
  let nombreBuscar = prompt("Ingresa el nombre de la persona que queres buscar");
  let personaEncontrada = personas.find(persona => persona.nombre === nombreBuscar);

  if (personaEncontrada) {
    console.log("Persona encontrada:");
    console.log("Nombre: " + personaEncontrada.nombre + ", Edad: " + personaEncontrada.edad + ", Ciudad: " + personaEncontrada.ciudad);
  } else {
    console.log("No existen personas con ese nombre");
  }
}

function eliminarPersona() {
  let nombreEliminar = prompt("Ingresa el nombre de la persona que vas eliminar:");
  let indiceEliminar = personas.findIndex(persona => persona.nombre === nombreEliminar);

  if (indiceEliminar !== -1) {
    personas.splice(indiceEliminar, 1);
    console.log("Has elminado persona");
  } else {
    console.log("No existen personas con ese nombre");
  }
}

function menuPrincipal() {
  let opcion;
  do {
    opcion = prompt(`¿Que operacion queres realizar?
    1. Agregar una persona
    2. Mostrar personas
    3. Buscar persona por nombre
    4. Eliminar persona
    5. Salir`);

    switch (opcion) {
      case "1":
        agregarPersona();
        break;
      case "2":
        mostrarPersonas();
        break;
      case "3":
        buscarPersonaPorNombre();
        break;
      case "4":
        eliminarPersona();
        break;
      case "5":
        console.log("¡Hasta luego!");
        break;
      default:
        console.log("Opción inválida. Intenta nuevamente.");
    }
  } while (opcion !== "5");
}

menuPrincipal();
     