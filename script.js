const btn = document.getElementById("sendBtn");
const textarea = document.querySelector("textarea");
const inputBox = document.querySelector(".bamboo-input");
const moonLink = document.getElementById("moonLink");

btn.addEventListener("click", () => {
  const text = textarea.value.trim();
  if (!text) return;

  const floating = document.createElement("div");
  floating.className = "floating-text";
  floating.textContent = text;

  document.body.appendChild(floating);

  textarea.value = "";
  inputBox.classList.add("fade-out");

  setTimeout(() => {
    inputBox.classList.remove("fade-out");
    moonLink.classList.remove("hidden");
  }, 4000);

  setTimeout(() => {
    floating.remove();
  }, 4200);
});
