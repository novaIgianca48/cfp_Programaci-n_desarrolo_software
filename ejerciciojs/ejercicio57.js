function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let num_f = aleatorio(1,100)
let fila_actual, columna_actual;
let laberinto = new Array(10);
let contador = 0
for (let fila = 0; fila < 10; fila++) {
    laberinto[fila]  = new Array(10);
    for (let columna = 0; columna < 10; columna++) {
        laberinto[fila][columna] = 0;
    }
}

for (let i = 0; i < aleatorio(3,4); i++) {
    laberinto[aleatorio(0,9)][aleatorio(1,10)] = 7
}
for (let i = 0; i < Array.length; i++) {
    if(num_f === laberinto ){
        console.log(boom);
    }
}


for (let fila = 0; fila < 10; fila++) {
    let filaTexto = '';
    for (let columna = 0; columna < 10; columna++) {
       
        filaTexto += laberinto[fila][columna] + " ";
    }
    console.log(filaTexto); 
}