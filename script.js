console.log("KAGUYAHIME 起動");

const input = document.getElementById("textInput");
const bamboo = document.querySelector(".bamboo-input");
const button = document.getElementById("sendBtn");

button.addEventListener("click", () => {
  const value = input.value.trim();
  if (value === "") return;

  console.log("問い:", value);

  bamboo.classList.add("fade-out");

  const text = document.createElement("div");
  text.className = "floating-text";
  text.textContent = value;

  document.body.appendChild(text);

  setTimeout(() => {
    bamboo.style.display = "none";
  }, 1200);

  input.value = "";
});
