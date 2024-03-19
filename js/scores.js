const highScores = JSON.parse(localStorage.getItem("highScore")) || [];

const list = document.querySelector("ol");

const content = (list.innerHTML = highScores.map((item, index) => {
  return `
    <li>
    <span>${index + 1}</span>
    <p>${item.username}</p>
    <span>${item.score}</span>
    </li>
    `;
}));
console.log(content);
list.innerHTML = content.join("");
