const [headerTitle] = document.getElementsByClassName('header__title');
const newStyleButton = document.getElementById('mainBtn');
let pauseInterval;
let animationId;

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
  animationId = requestAnimationFrame(styleChanger);
}

const clickHandler = () => {
  animationId = requestAnimationFrame(styleChanger);
  newStyleButton.style.display = 'none';
};

const stopChangingStyles = () => {
  if (newStyleButton.parentElement.querySelector('#pauseBtn')) {
    newStyleButton.style.display = '';
    const pauseButton = newStyleButton.parentElement.querySelector('#pauseBtn');
    pauseButton.remove();
    cancelAnimationFrame(animationId);
    clearInterval(pauseInterval);
    headerTitle.style.fontSize = '';
    headerTitle.style.border = '';
    headerTitle.parentElement.style.backgroundColor = '';
    headerTitle.style.backgroundImage = '';
    headerTitle.style.textShadow = '';
  }

};


newStyleButton.addEventListener('click', () => {
  clickHandler();
  pauseInterval = setInterval(() => {
    if (!newStyleButton.parentElement.querySelector('#pauseBtn')) {
      const newButton = document.createElement('button');
      newStyleButton.parentElement.appendChild(newButton);
      newButton.className = 'button',
        newButton.id = 'pauseBtn',
        newButton.textContent = `Im done, Thanks man! 🤯`,
        newButton.onclick = stopChangingStyles;
    }
  }, 2000);
});

