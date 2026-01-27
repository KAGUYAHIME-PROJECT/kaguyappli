const responses = [
  "かぐや姫は、月に帰ってしまいました。",
  "1000年後、またお会いしましょう。",
  "幸せって、何でしょうね。",
  "人生って、何でしょうね。"
];

const gentleQuestion =
  "忘れたふりをしている大切なことは、\nありませんか。";

const button = document.getElementById("ask");
const output = document.getElementById("response");

button.addEventListener("click", () => {
  output.textContent = gentleQuestion;

  setTimeout(() => {
    const r = responses[Math.floor(Math.random() * responses.length)];
    output.textContent = gentleQuestion + "\n\n" + r;
  }, 1500);
});
