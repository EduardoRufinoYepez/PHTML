// Programa: Juego de Adivinar el Número
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
let adivinado = false;

console.log("¡Bienvenido al juego!");
console.log("Adivina el número entre 1 y 100.");

while (!adivinado && intentos < 10) {
    const suposicion = parseInt(prompt("Ingresa un número:"));
    intentos++;
    
    if (suposicion === numeroSecreto) {
        console.log(`¡Correcto! Número de intentos: ${intentos}`);
        adivinado = true;
    } else if (suposicion < numeroSecreto) {
        console.log("El número es MAYOR.");
    } else {
        console.log("El número es MENOR.");
    }
}

if (!adivinado) {
    console.log(`¡Agotaste tus intentos! El número era ${numeroSecreto}`);
}