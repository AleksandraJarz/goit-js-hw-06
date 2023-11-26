const slide = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

slide.addEventListener("input", () => {
  text.style.fontSize = `${slide.value}px`;
});
