<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8" />
  <title>KAGUYAHIME PROJECT</title>
  <style>
    body {
      font-family: serif;
      background: #000;
      color: #eee;
      padding: 40px;
    }
    button {
      margin: 6px 0;
      padding: 6px 12px;
      background: #111;
      color: #eee;
      border: 1px solid #555;
      cursor: pointer;
    }
    input {
      width: 100%;
      padding: 6px;
      margin: 10px 0;
      background: #111;
      color: #eee;
      border: 1px solid #555;
    }
    #response {
      margin-top: 20px;
      white-space: pre-line;
    }
  </style>
</head>
<body>

<h2 id="title">昔々の物語</h2>

<p id="prompt">質問を入力させる</p>

<input id="questionInput" placeholder="……" />

<button onclick="askPreset(0)">
  KAGUYAHIME PROJECTって何ですか？
</button><br>
<button onclick="askPreset(1)">
  あなたは何をしたんですか？
</button><br>
<button onclick="submitQuestion()">問いかける</button>

<div id="response"></div>

<script>
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

// 「肝の言葉」判定用キーワード
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

function randomFrom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function respond(text) {
  const isCore = containsCoreWord(text);
  const reply = isCore
    ? randomFrom(coreRepliesJP)
    : randomFrom(normalRepliesJP);

  document.getElementById("response").innerText =
    reply +
    "\n\n終了\n続きはない。\n説明もない。";
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
</script>

</body>
</html>
