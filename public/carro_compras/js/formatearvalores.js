function formatearPesosColombianos(totalNeto) {
    // Convierte el número a string
    let numeroString = totalNeto.toString();
    
    // Divide el número en partes por cada 3 dígitos, empezando desde el final
    let partes = [];
    while (numeroString.length > 3) {
        partes.unshift(numeroString.slice(-3)); // Agrega los últimos 3 dígitos al principio del array
        numeroString = numeroString.slice(0, -3); // Elimina los últimos 3 dígitos
    }
    partes.unshift(numeroString); // Agrega el resto del número al principio del array
    
    // Une las partes con puntos como separadores y devuelve el número formateado
    return partes.join('.');
}
