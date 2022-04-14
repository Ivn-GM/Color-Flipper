let options = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let boton = document.getElementById("boton");
let box = document.getElementById("box");


boton.addEventListener('click', function readyFinalHex() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
      color += options[getRandomNumber()];
  }

  box.textContent = color;
  document.body.style.backgroundColor = color;
});

function getRandomNumber() {
  return Math.floor(Math.random() * options.length);
}
