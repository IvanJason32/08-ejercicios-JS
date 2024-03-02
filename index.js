
// Ejercicio 1: Mayúsculas y Minúsculas
//Texto inicial: "Hola Mundo"
//Tarea: Convertir toda la cadena a mayúsculas, y luego a minúsculas.

const mayusculas_minusculas = (texto) => {
    console.log(`El texto inicial es: ${texto}`);
    texto = texto.toUpperCase();
    console.log("El texto en MAYUSCULAS: " + texto);
    texto = texto.toLowerCase();
    console.log('El texto en minusculas: ', texto);
};

mayusculas_minusculas("Hola Mundo");

// Ejercicio 2: Contando Caracteres
// Texto inicial: "JavaScript es asombroso"
// Tarea: Contar cuántas letras 'a' contiene la cadena.

const contarCaracteres = (texto) => { 
    let count=0;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === "a") {
            count++;
        }
    }
    return count;
 };

console.log(contarCaracteres("JavaScript es asombroso"));

// Ejercicio 3: Extracción de Subcadenas
// Texto inicial: "Desarrollo con JavaScript"
// Tarea: Extraer la palabra "JavaScript" de la cadena completa.

const extrar_subcadena = (texto) => {
    let n = texto.indexOf("JavaScript");
    return texto.slice(n);
};

console.log(extrar_subcadena("Desarrollo con JavaScript"));

// Ejercicio 4: Comparación de Cadenas
// Texto inicial: "Hola", "hola"
// Tarea: Determinar si las dos cadenas son iguales, ignorando mayúsculas y minúsculas.

const comparacion_cadenas = (texto1, texto2) => {
    texto1 = texto1.toLowerCase();
    texto2 = texto2.toLowerCase();

    if (texto1 === texto2) {
        return true;
    } else {
        return false;
    }
};

console.log(comparacion_cadenas("Hola", "hola"));

// Ejercicio 5: Concatenación
// Texto inicial: "Hola", "Mundo"
// Tarea: Concatenar las dos cadenas para formar "Hola Mundo".


const concatenarStrings = (texto1, texto2) => {
    let textoCompleto = texto1 + " " + texto2;
    return textoCompleto;
};

console.log(concatenarStrings("Hola", "Mundo"));

// Ejercicio 6: Eliminación de Espacios
// Texto inicial: "    JavaScript    "
// Tarea: Eliminar los espacios en blanco al principio y al final de la cadena.

const eliminar_espacios = (texto) => {
    return texto = texto.trim();
};

console.log(eliminar_espacios("   JavaScript    "));

// Ejercicio 7: Reemplazo de Palabras
// Texto inicial: "JavaScript es genial"
// Tarea: Reemplazar "genial" por "asombroso".

const remplazar_palabra = (texto) => {
    texto = texto.split(" ")
    const posicion = texto.indexOf("genial");
    texto.splice(posicion, texto.length-1, "asombroso");
    texto = texto.join(" ");
    return texto;  
};

console.log(remplazar_palabra("JavaScript es genial"));

// Ejercicio 8: Inversión de Cadena
// Texto inicial: "Desarrollo"
// Tarea: Invertir el orden de los caracteres de la cadena.

const invertir_cadena = (texto) => {
    texto = texto.split("").reverse().join("");
    return texto;
};

console.log(invertir_cadena("Desarrollo"));

// Ejercicio 9: División en Array
// Texto inicial: "manzana,banana, cereza"
// Tarea: Dividir la cadena en un array utilizando la coma como separador.

const division_cadena_array = (texto) => {
    texto = texto.split(",")
    return texto
};

console.log(division_cadena_array("manzana,banana, cereza"));

// Ejercicio 10: Encuentra la Posición
// Texto inicial: "Aprendiendo JavaScript"
// Tarea: Encontrar la posición inicial de la palabra "JavaScript".

const encontrar_posicion = (texto) => {
    let posicion = texto.indexOf("JavaScript")
    return posicion;
};

console.log(encontrar_posicion("Aprendiendo JavaScript"));