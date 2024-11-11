function sofi(a, b, c) {
  // código aquí
}

function caroL(a, b, c) {
  // código aquí
}

function caroJ(a, b, c) {
  // código aquí
}

function manu(a, b, c) {
  // código aquí
}

function luci(a, b, c) {
  // código aquí
}

function eli(a, b, c) {
  // código aquí
}

function salo(a, b, c) {
  // código aquí
}

const lista1 = [
  "la Asesina",
  "la Capitana",
  "el Trueno",
  "el Lobo",
  "el Conejo",
  "el Halcón",
  "el Milagro",
  "el Rey",
  "el Robot",
  "la Maestra",
  "la Doctora",
  "el Fantasma",
  "el Tornado",
  "el Agente",
  "el Aguijón",
];

const lista2 = [
  "Carmesí",
  "Espacial",
  "Letal",
  "Invisible",
  "Mutante",
  "Gigante",
  "Terrorista",
  "Arco Iris",
  "de Hierro",
  "Maravilla",
  "Increíble",
  "de Goma",
  "de Roca",
  "de Fuego",
  "Estelar",
];

const lista3 = [
  "de las Tinieblas",
  "Celestial",
  "Infernal",
  "de la Selva",
  "de las Profundidades",
  "de los Mares",
  "de la Luz",
  "Salvaje",
  "Indomable",
  "del Amor",
  "de la Paz",
  "de la Amistad",
  "Inmortal",
  "Extraterrestre",
  "Medieval",
];

function limpiarIndex(index, max) {
  return Math.abs(Math.floor(index % max));
}

function superNombre(nombre, a, b, c) {
  const num1 = sofi(a, b, c);
  const num2 = caroL(a, b, c);
  const num3 = caroJ(a, b, c);
  const num4 = manu(a, b, c);
  const num5 = luci(a, b, c);
  const num6 = eli(a, b, c);
  const num7 = salo(a, b, c);

  const index1 = num1 + num2;
  const index2 = num3 + num4;
  const index3 = num5 + num6 + num7;

  return (
    "Cuando nadie está viendo, " +
    nombre +
    " se transforma en " +
    lista1[limpiarIndex(index1, lista1.length)] +
    " " +
    lista2[limpiarIndex(index2, lista2.length)] +
    " " +
    lista3[limpiarIndex(index3, lista3.length)]
  );
}

// console.log(superNombre("", 0, 0, 0));
