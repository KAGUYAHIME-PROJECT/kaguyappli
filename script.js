console.log("KAGUYAHIME 起動");

const input = document.getElementById("textInput");
const bamboo = document.querySelector(".bamboo-input");

// --- 返答データ ---
const normalRepliesJP = [
  "かぐや姫は、月に帰ってしまいました",
  "1000年後、またお会いしましょう",
  "幸せって、何でしょうね",
  "人生って、何でしょうね"
];

const coreRepliesJP = [
  "そう思うんですね",
  "そう思われるのですね"
];

const coreWords = [
  "幸せ",
  "人生",
  "意味",
  "生きる",
  "why",
  "life",
  "happiness"
];

// --- 判定 ---
function containsCoreWord(text) {
  return coreWords.some(word =>
    text.toLowerCase().includes(word.toLowerCase())
  );
}

function randomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// --- 実行 ---
function respond(text) {
  const isCore = containsCoreWord(text);
  const reply = isCore
    ? randomFrom(coreRepliesJP)
    : randomFrom(normalRepliesJP);

  // 竹を消す
  bamboo.classList.add("fade-out");

  // 浮かぶ返答
  const response = document.createElement("div");
  response.className = "floating-text";
  response.textContent =
    reply + "　—　終了します";

  document.body.appendChild(response);

  setTimeout(() => {
    response.remove();
    bamboo.classList.remove("fade-out");
    input.value = "";
  }, 4000);
}

// --- Enter無効化 ---
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") e.preventDefault();
});

// --- ボタン or 外部呼び出し用 ---
function submitQuestion() {
  const text = input.value.trim();
  if (text === "") return;
  respond(text);
}
