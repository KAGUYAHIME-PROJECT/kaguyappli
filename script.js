const quietReplies = [
  "かぐや姫は月に帰ってしまいました",
  "1000年後またお会いしましょう",
  "幸せとは何でしょうね",
  "人生とは何でしょうね"
];

const coreReplies = [
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
  let reply;

  if (isCore) {
    reply = randomFrom(coreReplies);
    document.getElementById("response").innerText =
      reply + "\n\nーさようなら";
  } else {
    reply = randomFrom(quietReplies);
    document.getElementById("response").innerText = reply;
  }
}

function submitQuestion() {
  const text = document.getElementById("questionInput").value;
  respond(text);
}

function askPreset(index) {
  const presets = [
    "KAGUYAHIME PROJECTって何ですか",
    "KAGUYAHIME PROJECTは何をしたんですか"
  ];
  respond(presets[index]);
}
