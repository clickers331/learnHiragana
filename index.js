const question_el = document.getElementById("questionEl");
const btnOne = document.getElementById("answerOne");
const btnTwo = document.getElementById("answerTwo");
const btnThree = document.getElementById("answerThree");
const btnFour = document.getElementById("answerFour");

const buttons = {
  1: btnOne,
  2: btnTwo,
  3: btnThree,
  4: btnFour,
};
const questions = {
  ん: "n",
  わ: "wa",
  を: "wo",
  や: "ya",
  ゆ: "yu",
  よ: "yo",
  ら: "ra",
  り: "ri",
  る: "ru",
  れ: "re",
  ろ: "ro",
  ま: "ma",
  み: "mi",
  む: "mu",
  め: "me",
  も: "mo",
  は: "ha",
  ひ: "hi",
  ふ: "fu",
  へ: "he",
  ほ: "ho",
  な: "na",
  に: "ni",
  ぬ: "nu",
  ね: "ne",
  の: "no",
  た: "ta",
  ち: "chi",
  つ: "tsu",
  て: "te",
  と: "to",
  さ: "sa",
  し: "shi",
  す: "su",
  せ: "se",
  そ: "so",
  か: "ka",
  き: "ki",
  く: "ku",
  け: "ke",
  こ: "ko",
  あ: "a",
  い: "i",
  う: "u",
  え: "e",
  お: "o",
  が: "ga",
  ぎ: "gi",
  ぐ: "gu",
  げ: "ge",
  ご: "go",
  ざ: "za",
  じ: "ji",
  ず: "zu",
  ぜ: "ze",
  ぞ: "zo",
  だ: "da",
  ぢ: "ji",
  づ: "zu",
  で: "de",
  ど: "do",
  ば: "ba",
  び: "bi",
  ぶ: "bu",
  べ: "be",
  ぼ: "bo",
  ぱ: "pa",
  ぴ: "pi",
  ぷ: "pu",
  ぺ: "pe",
  ぽ: "po",
};
const reversed = Object.fromEntries(
  Object.entries(questions).map(([key, value]) => [value, key])
);

function newQuestion() {
  let question = Math.floor(Math.random() * 71);
  let rightBtn = Math.floor(Math.random() * 4) + 1;
  let copy = JSON.parse(JSON.stringify(Object.values(questions)));
  copy.splice(question, 1);
  for (let i = 1; i < 5; i++) {
    if (i == rightBtn) {
      buttons[rightBtn].textContent = Object.values(questions)[question];
    } else {
      wrongAnswer = Math.floor(Math.random() * copy.length);
      buttons[i].textContent = copy[wrongAnswer];
      copy.splice(wrongAnswer, 1);
    }
  }
  question_el.textContent = reversed[buttons[rightBtn].textContent];
}

newQuestion();
