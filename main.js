const [headerTitle] = document.getElementsByClassName('header__title');
const hypnotizeButton = document.getElementById('mainBtn');
let pauseInterval;
let animationId;

const generateRandomColor = (alpha = 1.0) => {
  const randomRed = Math.floor(Math.random() * 255);
  const randomGreen = Math.floor(Math.random() * 255);
  const randomBlue = Math.floor(Math.random() * 255);
  const newRandomColor = `rgba(${randomRed}, ${randomGreen}, ${randomBlue} , ${alpha})`;
  return newRandomColor;
};

const applyStyles = () => {
  const gradientAngle = Math.random() * 360;
  const fontSize = Math.floor(Math.random() * (80 - 60) + 60);
  headerTitle.style.backgroundImage = `linear-gradient(${gradientAngle}deg , ${generateRandomColor()} , ${generateRandomColor()} , ${generateRandomColor()})`;
  headerTitle.style.border = `${fontSize / 20}px solid ${generateRandomColor()}`;
  headerTitle.style.borderRadius = `${fontSize / 4}px`;
  headerTitle.style.textShadow = ` 0 0  ${fontSize / 1.5}px ${generateRandomColor()}`;
  headerTitle.style.fontSize = `${fontSize}px`;
  headerTitle.parentElement.style.backgroundColor = `${generateRandomColor(Math.random() * 0.7)}`;
  headerTitle.parentElement.style.borderRadius = `${fontSize / 4}px`;
  animationId = requestAnimationFrame(applyStyles);
}

const resetStyles = () => {
  if (hypnotizeButton.parentElement.querySelector('#pauseBtn')) {
    hypnotizeButton.style.display = '';
    const pauseButton = hypnotizeButton.parentElement.querySelector('#pauseBtn');
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

const clickHandler = () => {
  animationId = requestAnimationFrame(applyStyles);
  hypnotizeButton.style.display = 'none';
};

hypnotizeButton.addEventListener('click', () => {
  clickHandler();
  pauseInterval = setInterval(() => {
    if (!hypnotizeButton.parentElement.querySelector('#pauseBtn')) {
      const pauseButton = document.createElement('button');
      hypnotizeButton.parentElement.appendChild(pauseButton);
      pauseButton.className = 'button',
      pauseButton.id = 'pauseBtn',
      pauseButton.textContent = `Im done, Thanks man! 🤯`,
      pauseButton.onclick = resetStyles;
    }
  }, 2000);
});

