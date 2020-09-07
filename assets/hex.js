const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
  const hexColor = generateHexColorFromArr(hex);
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
});

function getRandomNumberFromArrayLenght(arr) {
  return Math.floor((Math.random() * arr.length));
}

function generateHexColorFromArr(arr) {
  let hexColor = '#';
  for (let i = 0; i < 6; i++) {
    hexColor += arr[getRandomNumberFromArrayLenght(arr)];
  }

  return hexColor;
}