function createSnowFlake() {
  const treeBlock = document.querySelector('.tree-block') as HTMLElement;
  const snowFlake = document.createElement('i');
  snowFlake.classList.add('fas');
  snowFlake.classList.add('fa-snowflake');
  snowFlake.style.left = Math.random() * (treeBlock.offsetWidth - 20) + 'px';
  snowFlake.style.animationDuration = Math.random() * 3 + 2 + 's';
  snowFlake.style.opacity = Math.random() + '';
  snowFlake.style.fontSize = Math.random() * 5 + 'px';
  snowFlake.style.zIndex = '10000';

  treeBlock.appendChild(snowFlake);

  setTimeout(() => {
    snowFlake.remove();
  }, 5000);
}
const updateSnow = (e: Event) => {
  (e.target as HTMLElement).classList.toggle('snow--active');
  const snowInterval = setInterval(() => {
    createSnowFlake();
    if ((e.target as HTMLElement).classList.contains('snow--active')) snowInterval;
    else clearInterval(snowInterval);
  }, 50);
};

export default updateSnow;
