'use strict';

// document.querySelector('.uzbek').addEventListener('click', function () {
//   document.querySelector('.again').textContent = 'Qayta!';
//   document.querySelector('.between').textContent =
//     "(1 dan 20 oralig'idagi sonlar)";
//   document.querySelector('h1').textContent = "Men o'ylagan raqamni toping!";
//   document.querySelector('.message').textContent = 'Qani kettik...';
//   document.querySelector('.check').textContent = 'Tekshiring!';
//   document.querySelector('.label-score').textContent =
//     ' 💯 Urinishlar soni:    20';
//   document.querySelector('.label-highscore').textContent =
//     ' 🥇 Eng yuqori ball:   0';
// });

document.querySelector('.english').addEventListener('click', function () {
  document.querySelector('.again').textContent = 'Again!';
  document.querySelector('.between').textContent = '(Between 1 and 20)';
  document.querySelector('h1').textContent = 'Guess My Number!';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.check').textContent = 'Check!';
  document.querySelector('.label-score').textContent = ' 💯 Score:   20';
  document.querySelector('.label-highscore').textContent = ' 🥇 Highscore:  0';
});

let computerNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let language = 'eng';
let engToUzb = {
  '🙅🏼‍♀️No number!': '🙅🏼‍♀️ raqam kiritilmadi!',
  'Too High': 'Katta son!',
  'Too Low': 'Kichik son!',
  'Corret NUmber': "tog'ri raqam!",
  'You lost the game!': "o'yinda yutqazdingiz!",
  'Strart guessing...': 'Topishni boshlang...',
};
function showMessage(message) {
  if (language == 'uzb') {
    document.querySelector('.message').textContent = engToUzb[message];
  } else {
    document.querySelector('.message').textContent = message;
  }
}
const NUMBER = document.querySelector('.number');

document.querySelector('.check').addEventListener('click', () => {
  let guessNumber = Number(document.querySelector('.guess').value);

  if (score > 1) {
    if (!guessNumber) {
      showMessage('🙅🏼‍♀️No number!');
    } else if (guessNumber !== computerNumber) {
      showMessage((guessNumber > computerNumber) ? 'Too High!' : 'Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      showMessage('Correct Number!');
      NUMBER.textContent = computerNumber;

      document.querySelector('body').style.backgroundColor = '#60b347';
      NUMBER.style.width = '25rem';
      highScore = (score > highScore) ? score : highScore;
      document.querySelector('.highScore').textContent = highScore;
    }
  } else {
    showMessage('😔 You lost the game!');
    document.querySelector('.score').textContent = 0;
  }
});
document.querySelector('.again').addEventListener('click', function () {
  computerNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.guess').value = '';
  showMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  NUMBER.textContent = '?';

  document.querySelector('body').style.backgroundColor = '#222';
  NUMBER.style.width = '15rem';
});

document.querySelector('.uzbek').addEventListener('click', () => {
  language = 'uzb';
  document.querySelector('.again').textContent = 'Qayta!';
  document.querySelector('.between').textContent = '1 dan 20 gacha ';
  document.querySelector('h1').textContent = "O'ylangan sonni top?";
  document.querySelector('.check').textContent = 'Tekshir!';
  document.querySelector('.message').textContent = 'Topishni boshlang...';
  document.querySelector(
    '.label-score'
  ).innerHTML = `💯 Ball:<span class="score">20</span>`;
  document.querySelector(
    '.label-highscore'
  ).innerHTML = `🥇 yuqori ball:<span class="highscore">0</span>`;
});
