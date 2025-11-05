let estadoA = false;
let estadoB = false;

function cambiarEstado(input) {
    if (input === 'A') {
        estadoA = !estadoA;
        document.getElementById('inputA').textContent = estadoA ? 'A: ON' : 'A: OFF';
        document.getElementById('inputA').classList.toggle('on', estadoA);
        document.getElementById('inputA').classList.toggle('off', !estadoA);
    } else if (input === 'B') {
        estadoB = !estadoB;
        document.getElementById('inputB').textContent = estadoB ? 'B: ON' : 'B: OFF';
        document.getElementById('inputB').classList.toggle('on', estadoB);
        document.getElementById('inputB').classList.toggle('off', !estadoB);
    }
    
    ejecutarPuertaAND();
}

function ejecutarPuertaAND() {
    // Lógica AND: solo es TRUE si ambos son TRUE
    const salida = estadoA && estadoB; 
    
    const outputElement = document.getElementById('output');
    outputElement.textContent = salida ? 'SALIDA: ON' : 'SALIDA: OFF';
    outputElement.classList.toggle('led-on', salida);
    outputElement.classList.toggle('led-off', !salida);
}
