// Funcion del primer ejercicio
export function estrellas(numero) {
  let cadenaEstrellas = '';
  for (let i = 0; i < numero; i++) {
    cadenaEstrellas += '*';
  }
  return cadenaEstrellas;
}

// Funcion del segundo ejercicio
export function arregloEstrellas(numero) {
  const arrayEstrellas = [];
  let cadenaEstrellas = '';
  for (let i = 0; i < numero; i++) {
    cadenaEstrellas += '*';
    arrayEstrellas.push(cadenaEstrellas);
  }
  return arrayEstrellas;
}
