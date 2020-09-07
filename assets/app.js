const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
  const randomColor = getRandomNumberFromArrayLenght(colors);
  document.body.style.backgroundColor = colors[randomColor];
  color.textContent = colors[randomColor];
});

function getRandomNumberFromArrayLenght(arr) {
  return Math.floor((Math.random() * arr.length));
}