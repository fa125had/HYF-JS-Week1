const [headerTitle] = document.getElementsByClassName('header__title');

const generateRandomColor = (alpha = 1.0) => {
  const randomRed = Math.floor(Math.random() * 255);
  const randomGreen = Math.floor(Math.random() * 255);
  const randomBlue = Math.floor(Math.random() * 255);
  const newRandomColor = `rgba(${randomRed}, ${randomGreen}, ${randomBlue} , ${alpha})`;
  return newRandomColor;
}
const styleChanger = () => {
  const gradientAngle = Math.random() * 360;
  const fontSize = Math.floor(Math.random() * (85 - 60) + 30);
  headerTitle.style.backgroundImage = `linear-gradient(${gradientAngle}deg , ${generateRandomColor()} , ${generateRandomColor()} , ${generateRandomColor()})`;
  headerTitle.style.border = `${fontSize / 20}px solid ${generateRandomColor()}`;
  headerTitle.style.borderRadius = `${fontSize / 4}px`;
  headerTitle.style.textShadow = ` 0 0  ${fontSize / 1.5}px ${generateRandomColor()}`;
  headerTitle.style.fontSize = `${fontSize}px`;
  headerTitle.parentElement.style.backgroundColor = `${generateRandomColor(Math.random() * 0.7)}`;
  headerTitle.parentElement.style.borderRadius = `${fontSize / 4}px`;

}
let intervalId;
const clickHandler = () => {
  intervalId = setInterval(() => {
    styleChanger();
  }, 100);
};

const stopChangingStyles = () => {
  clearInterval(intervalId);
  if (newStyleButton.parentElement.querySelector('#pauseBtn')) {
    const pauseButton = newStyleButton.parentElement.querySelector('#pauseBtn');
    pauseButton.remove();
  }
};
const newStyleButton = document.getElementById('mainBtn');
newStyleButton.addEventListener('click', () => {
  clickHandler();
  if (!newStyleButton.parentElement.querySelector('#pauseBtn')) {
    const newButton = document.createElement('button');
    newStyleButton.parentElement.appendChild(newButton);
    newButton.className = 'button',
      newButton.id = 'pauseBtn',
      newButton.textContent = 'Pause ||',
      newButton.onclick = stopChangingStyles;
  }

});

