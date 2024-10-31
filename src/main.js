// Encontrar botones
const getButton = document.getElementById("getButton");
const postButton = document.getElementById("postButton");

// Encontrar contenedor para la imagen
const imageContainer = document.getElementById("imageContainer");

// Encontrar la lista de resultados
const list = document.getElementById("list");

// Variable para almacenar la imagen
let image;

// Petición para obtener una imagen aleatoria
getButton.addEventListener("click", async function () {
  const response = await fetch();

  console.log("GET", response);

  // if (response.ok === true) {
  //   image = await response.blob();
  //   const imageUrl = URL.createObjectURL(image);
  //   imageContainer.src = imageUrl;
  // }
});

// Petición para detectar objetos en la imagen
postButton.addEventListener("click", async function () {
  const formData = new FormData();
  formData.append("image", image);

  const response = await fetch();

  console.log("POST", response);
  const results = await response.json();
  console.log("results", results);

  // if (response.ok === true) {
  //   const labels = results
  //     .filter((result) => Number(result.confidence) > 0.5)
  //     .map((result) => result.label);

  //   const labelSet = new Set(labels);
  //   let listItems = "";

  //   labelSet.forEach(function (label) {
  //     listItems = listItems + `<li>${label}</li>`;
  //   });

  //   list.innerHTML = listItems;
  // }
});
