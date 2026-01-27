console.log("KAGUYAHIME 起動");

const input = document.getElementById("textInput");
const bamboo = document.querySelector(".bamboo-input");

input.addEventListener("keydown", (e) => {
  if (e.key !== "Enter") return;

  if (input.value.trim() === "") return;

  // ここから「確定処理」
  bamboo.classList.add("fade-out");

  const text = document.createElement("div");
  text.className = "floating-text";
  text.textContent = input.value;

  document.body.appendChild(text);

  // 竹が消えた後に input を無効化
  setTimeout(() => {
    bamboo.style.display = "none";
  }, 1200);

  input.value = "";
});
