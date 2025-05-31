// 간단한 영단어 퀴즈 문제 (뜻 → 영어)
const quizData = [
  { meaning: '사과', word: 'apple' },
  { meaning: '책상', word: 'desk' },
  { meaning: '강아지', word: 'puppy' },
  { meaning: '컴퓨터', word: 'computer' },
  { meaning: '학교', word: 'school' },
  { meaning: '친구', word: 'friend' },
  { meaning: '자동차', word: 'car' },
  { meaning: '물', word: 'water' },
  { meaning: '의자', word: 'chair' },
  { meaning: '연필', word: 'pencil' }
];
let current = 0;
let score = 0;

function showQuestion() {
  document.getElementById('result').innerText = '';
  document.getElementById('answer').value = '';
  document.getElementById('next-btn').style.display = 'none';
  if(current < quizData.length) {
    document.getElementById('question').innerText = `Q${current+1}. "${quizData[current].meaning}"의 영어 단어는?`;
    document.getElementById('score').innerText = `점수: ${score} / ${quizData.length}`;
  } else {
    document.getElementById('question').innerText = '퀴즈 종료!';
    document.getElementById('score').innerText = `최종 점수: ${score} / ${quizData.length}`;
    document.getElementById('answer').style.display = 'none';
    document.getElementById('next-btn').style.display = 'none';
    document.querySelector('button[onclick="submitAnswer()"]')?.setAttribute('disabled', 'disabled');
  }
}

function submitAnswer() {
  const userAns = document.getElementById('answer').value.trim().toLowerCase();
  if(!userAns) return;
  if(userAns === quizData[current].word) {
    document.getElementById('result').innerText = '정답!';
    score++;
  } else {
    document.getElementById('result').innerText = `오답! 정답: ${quizData[current].word}`;
  }
  document.getElementById('next-btn').style.display = 'inline-block';
  document.querySelector('button[onclick="submitAnswer()"]')?.setAttribute('disabled', 'disabled');
}

function nextQuestion() {
  current++;
  document.querySelector('button[onclick="submitAnswer()"]')?.removeAttribute('disabled');
  showQuestion();
}

window.onload = showQuestion;
