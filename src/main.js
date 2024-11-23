// Encontrar formulario
const form = document.querySelector("form");

// Encontrar contenedor para la imagen
const imageContainer = document.getElementById("imageContainer");

// Encontrar entradadas de categoría, ancho y alto
const categoryInput = document.getElementById("categoryInput");
const widthInput = document.getElementById("widthInput");
const heightInput = document.getElementById("heightInput");

// Encontrar nodos para valores de ancho y alto
const widthNode = document.getElementById("width");
const heightNode = document.getElementById("height");

// Variables para almacenar categoría, ancho y alto
let category = "";
let width = 0;
let height = 0;

// Función para inicializar parámetros de ancho y alto
function initWidthAndHeight() {
  const step = 50;
  const resultBoxWidth = document.querySelector(".result-box").offsetWidth;
  const imgMaxWidth = Math.floor((resultBoxWidth - 30) / step) * step;

  width = imgMaxWidth;
  height = imgMaxWidth;

  widthInput.setAttribute("step", step);
  heightInput.setAttribute("step", step);
  widthInput.setAttribute("max", imgMaxWidth);
  heightInput.setAttribute("max", imgMaxWidth);
  widthInput.setAttribute("value", width);
  heightInput.setAttribute("value", height);

  widthNode.textContent = `${width}px`;
  heightNode.textContent = `${height}px`;
}

// Inicializar ancho y alto
initWidthAndHeight();
window.addEventListener("resize", initWidthAndHeight);

// Guardar la categoría cuando el usuario escriba algo
categoryInput.addEventListener("change", function (event) {
  category = event.target.value;
});

// Guardar el ancho cuando el usuario modifique el valor
widthInput.addEventListener("input", function (event) {
  width = event.target.value;
  widthNode.textContent = `${width}px`;
});

// Guardar el alto cuando el usuario modifique el valor
heightInput.addEventListener("input", function (event) {
  height = event.target.value;
  heightNode.textContent = `${height}px`;
});

// Obtener una imagen aleatoria al enviar el formulario
form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const response = await fetch(
    "https://api.api-ninjas.com/v1/randomimage?width=" +
      width +
      "&height=" +
      height +
      "&category=" +
      category,
    {
      method: "GET",
      headers: {
        "X-Api-Key": "J920VqpHKnCyOTpsa98Fz24VFcii0EJdRG3UlzJH",
        Accept: "image/jpg",
      },
    }
  );

  console.log("response.ok =", response.ok);

  if (response.ok === true) {
    const image = await response.blob();
    const imageUrl = URL.createObjectURL(image);

    imageContainer.setAttribute("width", width);
    imageContainer.setAttribute("height", height);
    imageContainer.src = imageUrl;
  }
});
