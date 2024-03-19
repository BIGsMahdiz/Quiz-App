const scoreText = document.getElementById("score");
const usernameInput = document.getElementById("username");
const saveButton = document.getElementById("save-button");

const score = JSON.parse(localStorage.getItem("score"));
const highScore = JSON.parse(localStorage.getItem("highScore")) || [];

const scoreHandler = () => {
  scoreText.innerText = score;
};

const saveHanler = () => {
  if (!usernameInput.value) {
    alert("please enter your name");
  } else {
    const finalScore = { username: usernameInput.value, score };
    highScore.push(finalScore);
    highScore.sort((a, b) => b.score - a.score);
    highScore.splice(10);
    localStorage.setItem("highScore", JSON.stringify(highScore));
    localStorage.removeItem("score");
    console.log(highScore);
  }
};
window.addEventListener("load", scoreHandler);
saveButton.addEventListener("click", saveHanler);
