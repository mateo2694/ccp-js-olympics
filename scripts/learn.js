console.log("Hello GIRL POWER!");

// --------------------------------------------------------------------------------
// Console log
// * ¡Muestra tu propio mensaje en la consola!
console.log("Mateo estuvo aquí!");

// --------------------------------------------------------------------------------
// Variables y tipos de datos
// * ¡EXPLOREMOS!
const none1 = null;
const none2 = undefined;

const name = "Mateo";
const age = 30;
const male = true;

const arr = ["Santiago", "Luci", "Mateo", 30, true, false];
console.log(arr[3]);

const obj = { aguapanela: "bebida dulce", boligrafo: "objeto para escribir" };
console.log(obj.boligrafo);

// --------------------------------------------------------------------------------
// Condicionales
// * ¡Así ponemos condiciones!
const num1 = 3;
const num2 = 5;

if (num1 > num2) {
  console.log(num1 + " es mayor que " + num2);
} else if (num1 === num2) {
  console.log(num1 + " es igual que " + num2);
} else {
  console.log(num1 + " es menor que " + num2);
}

// --------------------------------------------------------------------------------
// Funciones
// * Escribe una función que reciba dos números y devuelva su suma
function sumar(a, b) {
  return a + b;
}
console.log(sumar(7, 14));

// * Escribe una función que reciba dos valores y devuelva true si ambos son iguales
// Operadores para comparar: === == <= >= < >
function comparar(x, y) {
  return x === y;
}
console.log(comparar("Mateo", "Mateo"));

// --------------------------------------------------------------------------------
// Arreglos
// * Escribe una función que reciba un arreglo (a) y un número (n), y devuelva el elemento del arreglo que se encuentra en la posición n

// --------------------------------------------------------------------------------
// Objetos
// * Escribe una función que reciba un objeto y un string, y devuelva true si existe una propiedad cuyo nombre y valor sean iguales al string
// * Escribe una función que reciba un objeto y un string, y devuelva true si existe una propiedad con ese nombre (no importa su valor)

// --------------------------------------------------------------------------------
// Loops
// * Escribe una función que reciba un arreglo de números y devuelva la suma de todos los números
// * Escribe una función que reciba un arreglo de números (a) y un númnero (n), y devuelva la suma de todos los números mayores que n
// * Escribe una función que reciba un arreglo de números y devuelva el promedio de todos los números
