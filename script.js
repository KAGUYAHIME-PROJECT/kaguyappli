console.log("生きてる？");


const normalRepliesJP = [
  "かぐや姫は、月に帰ってしまいました。",
  "1000年後、またお会いしましょう。",
  "幸せって、何でしょうね。",
  "人生って、何でしょうね。"
];

const coreRepliesJP = [
  "そう思うんですね。",
  "そう思われるのですね。"
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

function containsCoreWord(text) {
  return coreWords.some(word =>
    text.toLowerCase().includes(word.toLowerCase())
  );
}

function randomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function respond(text) {
  const isCore = containsCoreWord(text);
  const reply = isCore
    ? randomFrom(coreRepliesJP)
    : randomFrom(normalRepliesJP);

  document.getElementById("response").innerText =
    reply + "\n\n終了\n続きはない。\n説明もない。";
}

function submitQuestion() {
  const text = document.getElementById("questionInput").value;
  respond(text);
}

function askPreset(index) {
  const presets = [
    "KAGUYAHIME PROJECTって何ですか？",
    "あなたは何をしたんですか？"
  ];
  respond(presets[index]);
}

console.log("DOMチェック", {
  input: document.getElementById("textInput"),
  button: document.getElementById("sendBtn")
});
