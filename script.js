console.log("KAGUYAHIME 起動");

const input = document.getElementById("textInput");
const bamboo = document.querySelector(".bamboo-input");

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && input.value.trim() !== "") {

    // 竹を消す
    bamboo.style.opacity = "0";
    bamboo.style.pointerEvents = "none";

    // 浮かぶ文字生成
    const text = document.createElement("div");
    text.className = "floating-text";
    text.textContent = input.value;

    document.body.appendChild(text);

    input.value = "";
  }
});
