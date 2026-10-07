console.log('Sistema Inicial de Gestión v1.0');
console.log ('Esta nueva linea de codigo fue agregada en la rama principal (master) y luego fucionada');

// Módulo de cálculo agregado en la rama feature-calculo
function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function calcularOperaciones(x, y) {
    console.log(`--- Calculando para ${x} y ${y} ---`);
    console.log(`Suma: ${sumar(x, y)}`);
    console.log(`Resta: ${restar(x, y)}`);
    console.log(`Multiplicación: ${multiplicar(x, y)}`);
}

// Ejecución de prueba
calcularOperaciones(10, 5);
