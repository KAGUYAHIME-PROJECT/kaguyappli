console.log("KAGUYAHIME 起動");

const input = document.getElementById("textInput");
const bamboo = document.querySelector(".bamboo-input");

let typing = false;

input.addEventListener("focus", () => {
  typing = true;
});

input.addEventListener("blur", () => {
  typing = false;
});

input.addEventListener("keydown", (e) => {
  // 🌙 Enter以外は何もしない
  if (e.key !== "Enter") return;

  // 🌱 空なら何もしない
  if (input.value.trim() === "") return;

  // 🎋 入力中なら何もしない
  if (typing) return;

  // ここから「物語」
  bamboo.classList.add("fade-out");

  const text = document.createElement("div");
  text.className = "floating-text";
  text.textContent = input.value;

  document.body.appendChild(text);

  setTimeout(() => {
    bamboo.style.display = "none";
  }, 1200);

  input.value = "";
});
