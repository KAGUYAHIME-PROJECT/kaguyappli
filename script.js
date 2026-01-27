const input = document.getElementById("textInput");

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && input.value.trim() !== "") {
    createFloatingText(input.value);
    input.value = "";
  }
});

function createFloatingText(text) {
  const el = document.createElement("div");
  el.className = "floating-text";
  el.textContent = text;
  document.body.appendChild(el);

  setTimeout(() => {
    el.remove();
  }, 4000);
}
