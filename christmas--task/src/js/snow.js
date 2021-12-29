const treeBlock = document.querySelector('.tree-block');

export function createSnowFlake() {
	const snow_flake = document.createElement('i');
	snow_flake.classList.add('fas');
	snow_flake.classList.add('fa-snowflake');
	snow_flake.style.left = Math.random() * (treeBlock.offsetWidth-20) + 'px';
	snow_flake.style.animationDuration = Math.random() * 3 + 2 + 's';
	snow_flake.style.opacity = Math.random();
	snow_flake.style.fontSize = Math.random() * 5 + 'px';
  snow_flake.style.zIndex = '10000';

	treeBlock.appendChild(snow_flake);

	setTimeout(() => {
		snow_flake.remove();
	}, 5000);
}
export const updateSnow = (e) => {
  e.target.classList.toggle('snow--active');
  let snowInterval = setInterval(() => {
   createSnowFlake();
    if (e.target.classList.contains('snow--active')) snowInterval;
    else clearInterval(snowInterval);
  }, 50);
}
