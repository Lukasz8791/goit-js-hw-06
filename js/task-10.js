const input = document.querySelector("input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesContainer = document.getElementById("boxes");
function createBoxes(amount) {
  const initialSize = 30;
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.width = initialSize + i * 10 + "px";
    div.style.height = initialSize + i * 10 + "px";
    div.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(div);
  }
}
function destroyBoxes() {
  boxesContainer.innerHTML = "";
}
createButton.addEventListener("click", function () {
  const amount = input.value;
  createBoxes(amount);
  input.value = "";
});
destroyButton.addEventListener("click", destroyBoxes);
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
