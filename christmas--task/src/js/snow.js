const body = document.body;
const treeBlock = document.querySelector('.tree-block');

export function createSnowFlake() {
	const snow_flake = document.createElement('i');
	snow_flake.classList.add('fas');
	snow_flake.classList.add('fa-snowflake');
	snow_flake.style.left = Math.random() * window.innerWidth + 'px';
	snow_flake.style.animationDuration = Math.random() * 3 + 2 + 's'; // between 2 - 5 seconds
	snow_flake.style.opacity = Math.random();
	snow_flake.style.fontSize = Math.random() * 5 + 'px';
  snow_flake.style.zIndex = '100';

	treeBlock.appendChild(snow_flake);

	setTimeout(() => {
		snow_flake.remove();
	}, 5000)
}
